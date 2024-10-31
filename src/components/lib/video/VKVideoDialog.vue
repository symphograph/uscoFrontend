<script setup lang="ts">

import 'src/css/dialog.css'
import { useQuasar } from 'quasar';
import {computed, inject, Ref, ref} from 'vue';
import { imgUrl } from 'src/js/myFuncts';
import {Video} from "src/js/lib";
import {ussoAxios} from "src/js/myAxios";
import {myAnnounce} from "src/js/entry";

const q = useQuasar()

const isOpenDialog = inject('isOpenVKVideoDialog') as Ref<boolean>
const loading = ref(false)

const apiUrl = ussoAxios.getApiUrl('')


const announceList = myAnnounce.all
const announceInput = ref('')
function setInputVal(val: string) {
  announceInput.value = val
}

const filteredAnnounces = computed(() => {
  if(!announceInput.value) return announceList.value
  const input = announceInput.value.toLowerCase().trim()

  if (!input) return announceList.value // Возвращаем все, если ввода нет

  return announceList.value.filter(announce => {
    const progName = announce.progName?.toLowerCase() || ''
    const eventTime = announce.eventTime?.toLowerCase() || ''
    const hallName = announce.Hall?.name?.toLowerCase() || ''
    // Проверяем, содержится ли пользовательский ввод в любом из свойств
    return progName.includes(input)
      || eventTime.includes(input)
      || hallName.includes(input)
  })
})

const emit = defineEmits(['onSave'])

const props = defineProps({
  video: {
    type: Object,
    required: true
  }
})
const videoMutable = ref(props.video)

const refTitle = ref()
const isTitleFocus = ref(false)
const selectedAnnounce = ref()


function onHide() {
  loading.value = false
}

function onShow() {
  if(!props.video.announceId) return;
  selectedAnnounce.value = announceList.value.find((el) => el.id === props.video.announceId)
}

function close() {
  isOpenDialog.value = false
}

function getImgUrl(announce: any) {
  const md5 = announce?.sketch?.md5 || null
  const ext = announce?.sketch?.ext || null
  const size = 100
  return imgUrl(apiUrl, md5, ext, size)
}

async function linkToAnnounce() {
  loading.value = true
  const announce = {
    id: selectedAnnounce.value.id,
    progName: selectedAnnounce.value.progName,
    eventTime: selectedAnnounce.value.eventTime
  }

  if (await Video.linkToAnnounce(q, props.video.id, announce)) {
    emit('onSave')
    close()
  }

}
</script>

<template>
  <q-dialog v-model="isOpenDialog"
            @beforeShow="onShow"
            @beforeHide="onHide">
    <q-card bordered class="dialogArea">
      <q-card-section>
        <q-select v-model="selectedAnnounce"
                  :options="filteredAnnounces"
                  label="Выбрать концерт"
                  map-options
                  option-label="progName"
                  option-value="id"
                  clearable
                  use-input
                  @input-value="setInputVal"


                  @update:modelValue="() => {}"
        >
          <template v-slot:option="scope">
            <q-item v-bind="scope.itemProps">
              <q-item-section avatar>
                <q-img :src="getImgUrl(scope.opt)"></q-img>
              </q-item-section>
              <q-item-section>
                <q-item-label>{{ scope.opt.progName }}</q-item-label>
                <q-item-label caption>{{ scope.opt.eventTime }}</q-item-label>
                <q-item-label caption>{{ scope.opt.Hall.name }}</q-item-label>
              </q-item-section>
            </q-item>
          </template>
          <template v-slot:append v-if="selectedAnnounce">
            <q-btn icon="save"
                   color="green"
                   @click.stop.prevent="linkToAnnounce"
                   flat round></q-btn>
          </template>
        </q-select>
      </q-card-section>
      <q-card-section>
        <q-input v-model="videoMutable.title"
                 label="Название"
                 @focus="isTitleFocus = true"
                 @blur="isTitleFocus = false"
                 ref="refTitle"
        >
          <template v-slot:append>
            <q-btn icon="save" color="green" v-if="isTitleFocus" label="Сохранить"></q-btn>
          </template>
        </q-input>
      </q-card-section>


    </q-card>
  </q-dialog>
</template>

<style scoped>

</style>
