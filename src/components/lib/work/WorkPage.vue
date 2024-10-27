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
import BtnLibEdit from "components/lib/BtnLibEdit.vue";
import AuthotItem from "components/lib/AuthorItem.vue";
import {Author, Partition, Work} from "src/js/lib";
import BtnMoveSort from "components/main/buttons/BtnMoveSort.vue";
import PartitionList from "components/lib/work/PartitionList.vue";

const apiStaff = String(process.env.apiStaff)
const q = useQuasar()
const route = useRoute()
const editMode = inject('editMode')

const loading = ref(false)

const work = ref({})
const ClassicOnline = ref(null)


const selectedAuthorId = inject('selectedAuthorId')
const author = inject('selectedAuthor')

const isOpenPartitions = ref(false)

async function loadWork() {
  work.value = await Work.get(q, route.params.id)
  await loadAuthor()
}

async function loadAuthor() {
  author.value = await Author.get(q, work.value.authorId)
  console.log(author.value)
}

function updateWork(){
  loading.value = true
  Work.update(q, work.value)
  loading.value = false
}

function delWork(){
  api.post(apiStaff + 'epoint/lib/work.php', {
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

function loadClassicOnline() {
  api.post(apiStaff + 'epoint/lib/work.php', {
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
    </template>
    <template v-slot:PageContent>
      <div class="centralCol">
        <br>
        <q-card>
          <q-card-section>
            <q-item>
              <q-btn :label="`ID: ${work.id}`" flat @click="copy(work.id, q)" icon-right="content_copy"></q-btn>
            </q-item>
            <q-input v-model="work.titleRu" :readonly="!editMode" label="Локализованное название"></q-input>
            <q-input v-model="work.titleEn" :readonly="!editMode" label="Международное название"></q-input>
            <q-input v-model="work.opus" label="opus" :readonly="!editMode" prefix="Op."></q-input>
          </q-card-section>
          <q-card-actions align="right" v-if="editMode">
            <q-btn label="Сохранить" color="green" icon-right="save" flat @click="updateWork"></q-btn>
            <BtnDelete label="Удалить"
                       title="Удалить произведение"
                       throw-confirm
                       danger
                       flat
                       @onOk="delWork"
                       tooltip="Удалить произведение"></BtnDelete>
          </q-card-actions>
        </q-card>
        <br>
        <q-expansion-item label="Разделы" v-model="isOpenPartitions">
          <PartitionList v-if="isOpenPartitions" :workId="work.id"></PartitionList>
        </q-expansion-item>

        <br>
        <q-card>
          <q-card-section>Издания</q-card-section>
          <q-card-section></q-card-section>
        </q-card>



      </div>

    </template>
  </PageShell>

</template>

<style scoped>

</style>
