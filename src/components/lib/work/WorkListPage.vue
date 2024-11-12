<script setup lang="ts">
import {ref, provide, inject, onBeforeMount, Ref} from "vue";
import {useMeta, useQuasar} from "quasar";
import {useRoute, useRouter} from "vue-router";
import WorkList from "components/lib/work/WorkList.vue";
import AuthorItem from "components/lib/author/AuthorItem.vue";
import WorkCreateDialog from "components/lib/work/WorkCreateDialog.vue";
import {Author, Work} from "src/js/lib";
import {getMeta} from "src/js/myFuncts";
import MainFooter from "components/main/footer/MainFooter.vue";

const q = useQuasar()
const route = useRoute()
const router = useRouter()

const metaData = getMeta('Произведения')
useMeta(metaData)

const loadingAuthors = inject('loadingAuthors') as Ref<boolean>

const searchText = ref('')
provide('searchText', searchText)

const progress = ref(false)
provide('progress', progress)

const works = ref([]) as Ref<Record<string, any>[]>

const editMode = inject('editMode')

const isOpenWorkDialog = ref(false)
provide('isOpenWorkDialog', isOpenWorkDialog)

const work = ref()
provide('work', work)

async function loadWorks(authorId: number) {
  progress.value = true
  const result = await Work.getListByAuthor(q, authorId)
  if (result) {
    works.value = result
  }
  progress.value = false
}

async function loadAuthor(authorId: number) {
  loadingAuthors.value = true
  const result = await Author.get(q, authorId)
  if (result) {
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
  const authorId = Number(route.params.authorId)
  if (!authorId) {
    router.push({path: '/lib/author/'})
    return
  }
  loadAuthor(authorId)
  loadWorks(authorId)
})


const isExpandedMenu = ref(false)

</script>

<template>
  <template v-if="Author.selected.value">
    <div v-if="q.platform.is.mobile">
      <q-item class="pageTitle">
        <q-item-label lines="0">{{ metaData.title }}</q-item-label>
      </q-item>

      <AuthorItem :id="Author.selected.value.id"
                  :iofEn="Author.selected.value?.iofEn"
                  :iconUrl="Author.selected.value?.iconUrl"
                  :fioRu="Author.selected.value?.fioRu">
        <template v-slot:sections>
          <q-item-section side>
            <q-btn @click="createWork" icon="add" v-if="editMode" round></q-btn>
            <q-btn icon="tune" v-else flat stretch @click.stop.prevent="isExpandedMenu = !isExpandedMenu"></q-btn>
          </q-item-section>
        </template>
      </AuthorItem>
      <q-slide-transition>
        <q-input v-model="searchText" v-if="isExpandedMenu" style="width: 100%;" label="фильтр" stack-label clearable>
          <template v-slot:append>
            <q-icon name="search"></q-icon>
          </template>
        </q-input>
      </q-slide-transition>
      <q-separator></q-separator>
    </div>

    <div class="mainCol" v-else>
      <div style="display: flex; flex-wrap: nowrap">
        <q-item class="pageTitle">
          <q-item-label lines="0">{{ metaData.title }}</q-item-label>
        </q-item>
        <AuthorItem :id="Author.selected.value.id"
                    :iofEn="Author.selected.value?.iofEn"
                    :iconUrl="Author.selected.value?.iconUrl"
                    :fioRu="Author.selected.value?.fioRu">
          <template v-slot:sections>
            <q-item-section side>
              <q-btn @click.stop.prevent="createWork" icon="add" v-if="editMode" round></q-btn>
            </q-item-section>
          </template>
        </AuthorItem>
        <q-slide-transition>

          <q-input v-model="searchText"
                   style="width: 100%;"
                   label="фильтр"
                   stack-label clearable>

            <template v-slot:append>
              <q-icon name="search"></q-icon>
            </template>
          </q-input>
        </q-slide-transition>
      </div>
      <q-separator></q-separator>
    </div>
  </template>


  <WorkList :works="works" :searchText="searchText" @onDel="loadWorks">
    <template v-slot:after>
      <MainFooter></MainFooter>
    </template>
  </WorkList>


  <WorkCreateDialog :authorId="Author.selected.value.id"
                    v-if="Author.selected.value"
                    @onSave="loadWorks"></WorkCreateDialog>

</template>

<style scoped>
.selAuthor {
  width: 100%;
  max-width: 400px;
}

.pageTitle {
  font-size: 25px;
  color: var(--PageTitle);
}

.toolRow {
  display: flex;
  flex-wrap: nowrap;
}

.mainCol {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  /*Высоту не трогать!!!*/
}

</style>
