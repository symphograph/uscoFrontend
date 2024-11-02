<script setup>
import {onMounted, ref, provide, inject, onBeforeMount} from "vue";
import {LocalStorage, useQuasar} from "quasar";
import {useRoute, useRouter} from "vue-router";
import WorkList from "components/lib/work/WorkList.vue";
import PageShell from "components/main/PageShell.vue";
import AuthorItem from "components/lib/AuthorItem.vue";
import WorkDialog from "components/lib/work/WorkDialog.vue";
import {Author, Work} from "src/js/lib";


const q = useQuasar()
const route = useRoute()
const router = useRouter()


const loadingAuthors = inject('loadingAuthors')

const searchText = ref('')
provide('searchText', searchText)

const progress = ref(false)
provide('progress', progress)

const works = ref([])
provide('works', works)


const selectedAuthorId = inject('selectedAuthorId')

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
  loadingAuthors.value = true
  const result = await Author.get(q, route.params.authorId)
  if(result) {
    Author.selected.value = result
  }
  loadingAuthors.value = false
}

function createWork() {
  work.value = {
    id: undefined,
    titleRu: '',
    titleEn: '',
    authorId: route.params.authorId,
    opus: '',
    icatno: ''
  }
  isOpenWorkDialog.value = true
}

onBeforeMount(() => {
  selectedAuthorId.value = route.params.authorId * 1
  if(!selectedAuthorId.value){
    router.push({path: '/lib/author/'})
  }
})

onMounted(() => {
  if (!selectedAuthorId.value) return
  loadAuthor()
  loadWorks()
})
</script>

<template>

      <PageShell page-title="Произведения ">
        <template v-slot:ToolPanel>
          <q-btn @click="createWork" icon="add" v-if="editMode" flat round></q-btn>
          <AuthorItem :id="selectedAuthorId"
                      :iofEn="Author.selected.value?.iofEn"
                      :iconUrl="Author.selected.value?.iconUrl"
                      :fioRu="Author.selected.value?.fioRu"></AuthorItem>
          <q-input v-model="searchText" style="width: 100%; max-width: 16em" label="фильтр" stack-label clearable>
            <template v-slot:append>
              <q-icon name="search"></q-icon>
            </template>
          </q-input>
        </template>
        <template v-slot:virtualScroll>
            <WorkList  @onDel="loadWorks"></WorkList>
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
