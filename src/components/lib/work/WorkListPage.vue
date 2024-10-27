<script setup>
import {onMounted, ref, provide, inject} from "vue";
import SelectComposer from "components/lib/SelectComposer.vue";
import {LocalStorage, useQuasar} from "quasar";
import {useRoute, useRouter} from "vue-router";
import {api} from "boot/axios";
import WorkList from "components/lib/work/WorkList.vue";
import {notifyError} from "src/js/myFuncts";
import PageShell from "components/main/PageShell.vue";
import BtnLibEdit from "components/lib/BtnLibEdit.vue";
import AuthotItem from "components/lib/AuthorItem.vue";
import WorkDialog from "components/lib/work/WorkDialog.vue";
import {Author, Work} from "src/js/lib";


const q = useQuasar()
const route = useRoute()
const router = useRouter()
const apiStaff = String(process.env.apiStaff)

const searchText = ref('')
provide('searchText', searchText)

const progress = ref(false)
provide('progress', progress)

const works = ref([])
provide('works', works)


const selectedAuthorId = inject('selectedAuthorId')
const selectedAuthor = inject('selectedAuthor')
const editMode = inject('editMode')

const isOpenWorkDialog = ref(false)
provide('isOpenWorkDialog', isOpenWorkDialog)

const work = ref(null)
provide('work', work)

function itSel() {
  LocalStorage.set('lastAuthor', selectedAuthorId.value)
  route.params.authorId = selectedAuthorId.value
  router.push({ path: '/lib/works/' +  selectedAuthorId.value })
  loadWorks()
}

async function loadWorks() {
  progress.value = true
  const worksLoaded = await Work.getListByAuthor(q, route.params.authorId)
  if(worksLoaded){
    works.value = worksLoaded
  }
  progress.value = false
}

async function loadAuthor() {
  const result = await Author.get(q, selectedAuthorId.value)
  if(result) {
    selectedAuthor.value = result
  }

}

function createWork() {
  work.value = {
    id: undefined,
    titleRu: '',
    titleEn: '',
    authorId: selectedAuthorId.value,
    opus: '',
    icatno: ''
  }
  isOpenWorkDialog.value = true
}

onMounted(() => {
  selectedAuthorId.value = route.params.authorId * 1
  loadAuthor()
  loadWorks()
  console.log(selectedAuthor.value)
})
</script>

<template>
  <PageShell page-title="Произведения ">
    <template v-slot:ToolPanel>
      <q-btn @click="createWork" icon="add" v-if="editMode" flat round></q-btn>
      <AuthotItem :id="selectedAuthorId"
                  :iofEn="selectedAuthor?.iofEn"
                  :iconUrl="selectedAuthor?.iconUrl"
                  :fioRu="selectedAuthor?.fioRu"></AuthotItem>
      <q-input v-model="searchText" style="width: 100%; max-width: 16em" label="фильтр" stack-label clearable>
        <template v-slot:append>
          <q-icon name="search"></q-icon>
        </template>
      </q-input>
    </template>
    <template v-slot:PageContent>
      <div class="centralCol">
        <WorkList v-if="works.length" @onDel="loadWorks"></WorkList>
      </div>
    </template>
  </PageShell>
  <WorkDialog @onSave="loadWorks"></WorkDialog>
</template>

<style scoped>
.selAuthor {
  width: 100%;
  max-width: 400px;
}
</style>
