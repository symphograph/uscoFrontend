<script setup lang="ts">
import PageShell from "components/main/PageShell.vue";
import {useQuasar} from "quasar";
import {useRoute, useRouter} from "vue-router";
import {computed, inject, onBeforeMount, Ref, ref} from "vue";
import {copy, numDeclension} from "src/js/myFuncts";
import BtnDelete from "components/main/BtnDelete.vue";
import AuthorItem from "components/lib/author/AuthorItem.vue";
import {Author, Work} from "src/js/lib";
import PartitionList from "components/lib/work/PartitionList.vue";
import PublicationList from "components/lib/publication/PublicationList.vue";
import GenreSelect from "components/lib/genre/GenreSelect.vue";
import VideoList from "components/lib/work/VideoList.vue";


const q = useQuasar()
const route = useRoute()
const router = useRouter()
const editMode = inject('editMode')

const loading = ref(false)
const progress = inject('progress') as Ref<boolean>

const work = ref()

const isOpenPartitions = ref(false)
const isOpenPublications = ref(false)
const isOpenVideos = ref(false)

const imslpUrl = computed(() => {
  if(!work.value.imslpId) return ''
  return 'https://imslp.org/wiki/' + work.value.imslpWork.idString
})

async function loadWork(workId: number) {
  work.value = await Work.get(q, workId)
}

async function loadAuthor() {
  Author.selected.value = await Author.get(q, work.value.authorId)
}

function updateWork(){
  loading.value = true
  Work.update(q, work.value)
  loading.value = false
}

function onSelectGenre(genre: any) {
  work.value.genreId = genre?.id ?? null
}

async function delWork(workId: number) {
  loading.value = true
  if(await Work.del(q, workId)){
    router.push({path: '/lib/works/' + Author.selected.value.id})
  }
  loading.value = false
}

function getWorkNumDeclension() {
  const wordForms = ['произведение', 'произведения', 'произведений']
  const declension = numDeclension(Author.selected.value.cntWorks, wordForms)
  return `${Author.selected.value.cntWorks} ${declension}`
}

function decodeDoubleEncodedHtml(text: string) {
  // Заменяем &amp; на &
  text = text.replace(/&amp;/g, "&");

  // Создаем элемент для декодирования HTML-сущностей
  const txt = document.createElement("textarea");
  txt.innerHTML = text;

  // Возвращаем декодированное значение
  return txt.value;
}

onBeforeMount(async () => {
  const workId = Number(route.params.id)
  if (!workId) {
    router.push({path: '/lib/author/'})
    return
  }
  progress.value = true
  await loadWork(workId)
  await loadAuthor()
  progress.value = false
})
</script>

<template>
  <PageShell page-title="Произведение" v-if="work && Author.selected.value">
    <template v-slot:ToolPanel>
      <AuthorItem v-if="Author.selected.value"
                  :id="Author.selected.value.id"
                  :iofEn="Author.selected.value?.iofEn"
                  :iconUrl="Author.selected.value?.iconUrl"
                  :fioRu="Author.selected.value?.fioRu">
      </AuthorItem>
    </template>
    <template v-slot:PageContent>
      <div class="centralCol">
        <br>
        <q-card v-if="work.id">
          <q-card-section>
            <q-item>
              <q-btn :label="`ID: ${work.id}`" flat @click="copy(work.id, q)" icon-right="content_copy"></q-btn>
            </q-item>

            <q-input v-model="work.titleRu" :readonly="!editMode" label="Локализованное название"></q-input>

            <q-input v-model="work.titleEn" :readonly="!editMode" label="Международное название"></q-input>

            <q-item v-if="work.titleCO">

              <q-item-section>
                <q-item-label caption>Назвение на ClassicOnline</q-item-label>
                <q-item-label>{{decodeDoubleEncodedHtml(work.titleCO)}}</q-item-label>
              </q-item-section>
            </q-item>

            <q-input v-model="work.opus" label="opus" :readonly="!editMode" prefix="Op."></q-input>
            <GenreSelect @onSelect="onSelectGenre"
                         :readonly="!editMode"
                         :genreId="work.genreId"></GenreSelect>
          </q-card-section>
          <q-card-actions align="right" v-if="editMode">
            <BtnDelete label="Удалить"
                       title="Удалить произведение"
                       throw-confirm
                       danger
                       flat
                       @onOk="delWork(work.id)"
                       tooltip="Удалить произведение"></BtnDelete>
            <q-btn label="Сохранить" color="green" icon-right="save" flat @click="updateWork"></q-btn>
          </q-card-actions>
          <q-card-section>
            <q-item clickable :to="`/lib/works/${Author.selected.value.id}`">
              <q-item-section>
                <q-item-label>
                  Перейти к списку
                </q-item-label>
                <q-item-label caption>
                  {{ getWorkNumDeclension() }}
                </q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-icon name="open_in_new"></q-icon>
              </q-item-section>
            </q-item>
          </q-card-section>
          <q-card-section>
            <q-btn icon="img:https://upload.wikimedia.org/wikipedia/commons/9/98/IMSLP_logo_%282016%29.svg"
                   v-if="imslpUrl"
                   size="6em"
                   :class="q.dark.isActive ? 'invert' : undefined"
                   :href="imslpUrl"
                   target="_blank"
            ></q-btn>
          </q-card-section>
        </q-card>

        <br>

        <q-expansion-item label="Разделы" v-model="isOpenPartitions">
          <PartitionList v-if="isOpenPartitions" :workId="work.id"></PartitionList>
        </q-expansion-item>

        <br>

        <q-expansion-item label="Видео" v-model="isOpenVideos">
          <VideoList v-if="isOpenVideos" :workId="work.id"></VideoList>
        </q-expansion-item>

        <br>

        <q-expansion-item label="Издания" v-model="isOpenPublications">
          <PublicationList v-if="isOpenPublications" :workId="work.id"></PublicationList>
        </q-expansion-item>
      </div>

    </template>
  </PageShell>

</template>

<style scoped>

</style>
