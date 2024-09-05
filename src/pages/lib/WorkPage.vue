<script setup>
import PageShell from "components/main/PageShell.vue";
import {api} from "boot/axios";
import {useQuasar} from "quasar";
import {useRoute} from "vue-router";
import {inject, onBeforeMount, provide, ref} from "vue";
import {copy, notifyError, notifyOK} from "src/js/myFuncts";
import {myUser} from "src/js/myAuth";
import BtnDelete from "components/main/BtnDelete.vue";
import PartitionDialog from "components/lib/PartitionDialog.vue";
import BtnLibEdit from "pages/lib/BtnLibEdit.vue";
import AuthotItem from "components/lib/AuthorItem.vue";

const apiStaff = String(process.env.apiStaff)
const q = useQuasar()
const route = useRoute()
const libEditMode = inject('libEditMode')

const work = ref({})
const ClassicOnline = ref(null)
const partitions = ref([])

const selectedAuthorId = inject('selectedAuthorId')
const author = inject('selectedAuthor')

const isOpenPartitionDialog = ref(false)
provide('isOpenPartitionDialog', isOpenPartitionDialog)


function defaultPartition() {
  return {
    id: undefined,
    num: partitions.value.length + 1,
    title: '',
    workId: work.value.id
  }
}

const selectedPartition = ref({})
provide('selectedPartition', selectedPartition)

function createPartition() {
  selectedPartition.value = defaultPartition()
  isOpenPartitionDialog.value = true
}

function editPartition(partition) {
  selectedPartition.value = partition
  isOpenPartitionDialog.value = true
}

function loadWork(){
  api.post(apiStaff + '/api/lib/work.php', {
    params: {
      method: 'get',
      workId: route.params.id
    }
  })
    .then((response) => {
      work.value = response?.data?.data ?? {}
      selectedAuthorId.value = work.value.authorId
      loadAuthor()
      loadPartitions()

    })
    .catch((error) => {
      q.notify(notifyError(error))
    })
}

const loadAuthor = inject('loadAuthor')

function updateWork(){
  api.post(apiStaff + '/api/lib/work.php', {
    params: {
      method: 'update',
      workId: route.params.id,
      work: work.value
    }
  })
    .then((response) => {
      if (!!!response?.data?.result) {
        throw new Error();
      }
      q.notify(notifyOK(response?.data?.result ?? null))
    })
    .catch((error) => {
      q.notify(notifyError(error))
    })
}

function delWork(){
  api.post(apiStaff + '/api/lib/work.php', {
    params: {
      method: 'del',
      workId: route.params.id,
    }
  })
    .then((response) => {
      if (!!!response?.data?.result) {
        throw new Error();
      }
      q.notify(notifyOK(response?.data?.result ?? null))
    })
    .catch((error) => {
      q.notify(notifyError(error))
    })
}

function delPartition(id){
  api.post(apiStaff + '/api/lib/partition.php', {
    params: {
      method: 'del',
      id: id,
    }
  })
    .then((response) => {
      if (!!!response?.data?.result) {
        throw new Error();
      }
      q.notify(notifyOK(response?.data?.result ?? null))
      loadPartitions()
    })
    .catch((error) => {
      q.notify(notifyError(error))
    })
}

function loadPartitions(){
  api.post(apiStaff + '/api/lib/partition.php', {
    params: {
      method: 'list',
      workId: route.params.id
    }
  })
    .then((response) => {
      partitions.value = []
      partitions.value = response?.data?.data ?? []
      console.log(partitions.value)
    })
    .catch((error) => {
      q.notify(notifyError(error))
    })
}
provide('loadPartitions', loadPartitions)

function loadClassicOnline() {
  api.post(apiStaff + '/api/lib/work.php', {
    params: {
      method: 'getCO',
      opus: work.value.opus,
      authorId: work.value.authorId
    }
  })
    .then((response) => {
      ClassicOnline.value = response?.data?.data ?? {}
    })
    .catch((error) => {
      q.notify(notifyError(error))
    })
}



onBeforeMount(() => {
  loadWork()
})
</script>

<template>

  <PageShell :page-title="work.titleRu">
    <template v-slot:ToolPanel>
      <AuthotItem :id="selectedAuthorId"
                  :iofEn="author?.iofEn"
                  :iconUrl="author?.iconUrl"
                  :fioRu="author?.fioRu"></AuthotItem>
      <BtnLibEdit></BtnLibEdit>
    </template>
    <template v-slot:PageContent>
      <div class="centralCol">
        <br>
        <q-card>
          <q-card-section>
            <q-item>
              <q-btn :label="`ID: ${work.id}`" flat @click="copy(work.id, q)" icon-right="content_copy"></q-btn>
            </q-item>
            <q-input v-model="work.titleRu" :readonly="!libEditMode" label="Локализованное название"></q-input>
            <q-input v-model="work.titleEn" :readonly="!libEditMode" label="Международное название"></q-input>
            <q-input v-model="work.opus" label="opus" :readonly="!libEditMode" prefix="Op."></q-input>
          </q-card-section>
          <q-card-actions align="right" v-if="libEditMode">
            <q-btn label="Сохранить" color="green" @click="updateWork"></q-btn>
            <BtnDelete label="Удалить"
                       title="Удалить произведение"
                       throw-confirm
                       danger
                       @onOk="delWork"
                       tooltip="Удалить произведение"></BtnDelete>
          </q-card-actions>
        </q-card>
        <br>
        <q-card>
          <q-card-section>Части произведения
            <q-btn icon="add" round v-if="libEditMode" @click="createPartition">
              <q-tooltip>Добавить часть</q-tooltip>
            </q-btn>
          </q-card-section>
          <q-card-section>
            <q-list>
              <template v-for="partition in partitions" :key="partition.id">
                <q-item>
                  <q-item-section avatar>
                    <q-item-label>{{ partition.num }}</q-item-label>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>{{ partition.title }}</q-item-label>
                  </q-item-section>

                  <template v-if="libEditMode">
                    <q-item-section side>
                      <q-btn icon="edit" dense round flat @click="editPartition(partition)">
                        <q-tooltip>Редактировать</q-tooltip>
                      </q-btn>
                    </q-item-section>
                    <q-item-section side>
                      <BtnDelete throw-confirm
                                 danger flat
                                 @onOk="delPartition(partition.id)"
                                 tooltip="Удалить часть"
                                 title="Удалить часть"></BtnDelete>
                    </q-item-section>
                  </template>
                </q-item>
              </template>
            </q-list>
          </q-card-section>
        </q-card>
        <br>
        <q-card>
          <q-card-section>Издания</q-card-section>
          <q-card-section></q-card-section>
        </q-card>



      </div>

    </template>
  </PageShell>
  <PartitionDialog></PartitionDialog>
</template>

<style scoped>

</style>
