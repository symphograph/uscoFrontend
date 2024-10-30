<script setup lang="ts">
import {useQuasar} from "quasar";
import {computed, inject, onBeforeMount, ref, Ref} from "vue";
import AnnounceSelect from "components/announсes/AnnounceSelect.vue";
import 'src/css/dialog.css'
import {myAnnounce} from "src/js/entry";
import {Work} from "src/js/lib";

const q = useQuasar()
const isOpenDialog = inject('isOpenBatchAddDialog') as Ref<boolean>
const loading = ref(false)

const props = defineProps<{
  targetAnnounceId: number
}>()

const emit = defineEmits(['onBatchAddWorks'])

const announces = ref() as Ref<any[]>
const works = ref([]) as Ref<any[]>

const checkedWorks = ref([]) as Ref<number[]>

function close() {
  isOpenDialog.value = false
}

function onHide() {
  checkedWorks.value = []
  announces.value = []
  works.value = []
  loading.value = false
}

async function loadAnnounces() {
  loading.value = true
  announces.value = await myAnnounce.getList(q)
  loading.value = false
}

async function loadWorks(announceId: number) {
  loading.value = true
  works.value = await Work.getListByAnnounce(q, announceId)
  loading.value = false
}

function onSelectAnnounce(announce: any) {
  if(!announce) return
  loadWorks(announce.id)
}

async function linkListToAnnounce() {
  loading.value = true
  const result = await Work.linkListToAnnounce(q, props.targetAnnounceId, checkedWorks.value);
  if(result){
    emit('onBatchAddWorks')
    close()
  }
  loading.value = false
}

function checkAll() {
  checkedWorks.value = works.value.map((el) => el.id)
}

function uncheckAll() {
  checkedWorks.value = []
}

const isAllChecked = computed(() => {
  if(!works.value.length) return false
  return works.value.length === checkedWorks.value.length
})

onBeforeMount(() => {
  loadAnnounces()
})
</script>

<template>
  <q-dialog v-model="isOpenDialog" @before-hide="onHide">
    <q-card bordered class="dialogArea">
      <q-card-section>
        <AnnounceSelect :announces="announces" @onSelect="onSelectAnnounce"></AnnounceSelect>
      </q-card-section>
      <q-card-section v-if="works.length">
        <q-item>
          <q-item-section>
            <q-btn v-if="!isAllChecked" label="Отметить все" @click="checkAll"></q-btn>
            <q-btn v-if="isAllChecked" label="Снять все" @click="uncheckAll"></q-btn>
          </q-item-section>
        </q-item>
        <q-item v-for="work in works" :key="`add_work${work.id}`" tag="label">
          <q-item-section>
            <q-item-label caption>
              {{ work.author.fioRu }}
            </q-item-label>
            <q-item-label>
              {{ work.titleRu }}
            </q-item-label>
          </q-item-section>
          <q-item-section></q-item-section>
          <q-item-section side>
            <q-checkbox v-model="checkedWorks" :val="work.id"></q-checkbox>
          </q-item-section>
        </q-item>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn
          icon="save"
          flat
          color="green"
          :disable="!checkedWorks.length"
          @click="linkListToAnnounce"
          label="Добавить"></q-btn>
      </q-card-actions>

    </q-card>
  </q-dialog>

</template>

<style scoped>

</style>
