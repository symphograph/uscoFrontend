<script setup lang="ts">
import {computed, inject, ref, Ref} from "vue";
import 'src/css/dialog.css'
import {TCode, Work} from "src/js/lib";
import {useQuasar} from "quasar";
import BtnDelete from "components/main/BtnDelete.vue";

const q = useQuasar()

const isOpenDialog = inject('isTCodeDialogOpen') as Ref<boolean>
const emit = defineEmits(['onDelete', 'onSave'])

const defaultTimeCode = {
  id: 0,
  start: '00:00:00',
  uLabel: '',
  type: 'init'
}

const props = defineProps({
  video: {
    type: Object,
    required: true
  },
  timeCode: {
    type: Object,
    default: () => {
      return {
        id: 0,
        start: '00:00:00',
        uLabel: '',
        type: 'init'
      }
    }
  }
})
const tCodeMutable = ref(props.timeCode)

const types = [
  {
    type: 'work',
    label: 'Всё произведение',
    caption: 'Если оно не делится на части'
  },
  {
    type: 'part',
    label: 'Часть произведения',
    caption: 'Часть или раздел произведения'
  },
  {
    type: 'init',
    label: 'Прочее',
    caption: 'Участок видео без исполнения'
  }
]

const loading = ref(false)

const works = ref([]) as Ref<any[]>

const selectedWork = ref()
const selectedPartition = ref()

const isNew = computed(() => {
  return !props.timeCode.id
})

const resultType = computed(() => {
  if(!isNew.value) {
    return props.timeCode.type
  }
  if(!selectedWork.value) return 'init'
  if(!selectedPartition.value) return 'work'
  return 'part'
})

function close() {
  isOpenDialog.value = false
}

const needWork = computed(() => {
  return ['work', 'part'].includes(tCodeMutable.value.type)
})

function onShow() {
  if(isNew.value){
    reset()
  }

  if(isNew.value){
    loadWorks()
  }
}

function reset() {
  tCodeMutable.value = {...defaultTimeCode}
  selectedWork.value = undefined
  selectedPartition.value = undefined
}

function onHide() {
  loading.value = false
  if(isNew.value){
    reset()
  }
}

function toSec(hms: string) {
  const a = hms.split(':');
  return (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2])
}

function toHMS(seconds: number) {
  const s = (seconds % 60).toString();
  const m = Math.floor(seconds / 60 % 60).toString();
  const h = Math.floor(seconds / 60 / 60 % 60).toString();
  return `${h.padStart(2,'0')}:${m.padStart(2,'0')}:${s.padStart(2,'0')}`;
}

function isValidStartFormat(start: string){
  const sec = toSec(start)
  return start === toHMS(sec)
}

async function save() {
  loading.value = true
  const result = isNew.value
    ? await add()
    : await TCode.update(q, tCodeMutable.value)

  if(result) {
    emit('onSave')
    close()
  }
  loading.value = false
}

async function add() {
  tCodeMutable.value.type = resultType.value
  const tCode = tCodeMutable.value
  const videoId = props.video.id
  const start = tCode.start

  switch (tCode.type) {
    case 'init':
      return TCode.addInit(q, videoId, start, tCode.uLabel)
    case 'work':
      return TCode.addWork(q, videoId, start, selectedWork.value.id)
    case 'part':
      return TCode.addPartition(q, videoId, start, selectedPartition.value.id)
  }
}

async function loadWorks() {
  if(!props.video.announceId) {
    return
  }
  loading.value = true
  works.value = await Work.getListByAnnounce(q, props.video.announceId)
  loading.value = false
}

function onSelectType() {
  if(needWork.value){
    loadWorks()
  }
}

function onSelectWork() {
  if(!selectedWork.value?.children?.length){
    selectedPartition.value = null
  }
  selectedPartition.value = selectedWork.value.children[0]
}

async function del() {
  loading.value = true
  if(await TCode.del(q, props.timeCode.id)) {
    emit('onDelete')
    close()
  }
  loading.value = false
}
</script>

<template>
  <q-dialog v-model="isOpenDialog"
            @before-hide="onHide"
            @beforeShow="onShow"
  >
    <q-card bordered class="dialogArea">
      <q-card-section>
        <q-item>
          <q-item-section>
            <q-item-label caption>{{
                isNew
                  ? 'Добавить таймкод'
                  : 'Именить таймкод для:'
              }}</q-item-label>
            <q-item-label v-if="!isNew">{{ timeCode.label }}</q-item-label>
          </q-item-section>

        </q-item>

      </q-card-section>
      <q-card-section>
        <q-input mask="##:##:##"
                 clearable
                 :label="`${toHMS(0)} - ${toHMS(video.duration)}`"
                 @update:modelValue="(hms) => toSec(String(hms))"
                 :rules="[
                  val => !!val || '* Обязательное поле',
                  val => isValidStartFormat(val) || 'Нужен формат [HH:MM:SS]',
                  val => toSec(String(val)) <= video.duration || 'За пределами видео',
        ]"
                 v-model="tCodeMutable.start"></q-input>

        <q-input v-model="tCodeMutable.uLabel"
                 v-if="resultType === 'init'"
                 clearable
                 label="Название таймкода"
                 stack-label>
          <template v-slot:append v-if="!tCodeMutable.uLabel">
            <q-btn label="вст. слово" @click="tCodeMutable.uLabel = 'Вступительное слово'"></q-btn>
          </template>

        </q-input>

        <template v-if="isNew">

          <q-select v-model="selectedWork"
                    v-if="works.length"
                    :label="selectedWork?.author.fioRu || 'Произведение'"
                    :options="works"
                    clearable
                    map-options
                    option-value="id"
                    option-label="titleRu"
                    @update:modelValue="onSelectWork"
          >
            <template v-slot:option="scope">
              <q-item v-bind="scope.itemProps">
                <q-item-section>
                  <q-item-label caption>{{scope.opt.author.fioRu }}</q-item-label>
                  <q-item-label>{{scope.opt.titleRu}}</q-item-label>
                </q-item-section>
              </q-item>
            </template>
          </q-select>
          <q-item v-else>
            <q-item-section>
              <q-item-label>Список произведений пуст</q-item-label>
              <q-item-label caption v-if="video.announceId">
                Похоже, в анонсе не указана программа концента.
              </q-item-label>
              <q-item-label caption v-else>
                Привяжите видео к анонсу, чтобы получить список произведений.
              </q-item-label>
            </q-item-section>
          </q-item>

          <q-select v-model="selectedPartition"
                    :options="selectedWork?.children ?? []"
                    v-if="selectedWork?.children?.length"
                    label="Часть, номер, раздел"
                    clearable
                    stack-label
                    map-options
                    option-value="id"
                    option-label="title"
          >
            <template v-slot:option="scope">
              <q-item v-bind="scope.itemProps">
                <q-item-section avatar>{{scope.opt.sortVal}}</q-item-section>
                <q-item-section>
                  <q-item-label>{{scope.opt.title}}</q-item-label>
                  <q-item-label caption>{{scope.opt.caption }}</q-item-label>
                </q-item-section>
              </q-item>
            </template>
          </q-select>
        </template>


      </q-card-section>
      <template v-if="false">
        <q-card-section>
          {{timeCode}}
        </q-card-section>
        <q-card-section>
          {{tCodeMutable}}
        </q-card-section>
      </template>

      <q-card-section v-if="selectedWork?.children.length">
        <q-item>
          <q-item-section>
            <q-item-label>
              {{
                !selectedPartition
                ? 'Будет добавлено произведение без частей'
                  : 'Часть будет отображена в автоматически созданной папке'
              }}
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-card-section>

      {{resultType}}
      <q-card-actions align="right">
        <BtnDelete label="Удалить"
                   v-if="timeCode.id"
                   throw-confirm
                   @onOk="del"
                   danger></BtnDelete>
        <q-space></q-space>
        <q-btn label="Отмена" @click="close"></q-btn>
        <q-btn label="Сохранить" :loading="loading" color="green" @click="save"></q-btn>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<style scoped>

</style>
