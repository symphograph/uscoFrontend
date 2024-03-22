<script setup>
import {useMeta, useQuasar} from 'quasar'
import {api} from 'boot/axios'
import NewEditor from 'components/news/NewEditor.vue'
import PageTitle from "components/main/PageTitle.vue";
import {ref, inject, onMounted, provide, computed} from 'vue'
import {useRoute} from 'vue-router'
import {getMeta, imgUrl, notifyError} from "src/js/myFuncts";
import EntryPhoto from "components/news/EntryPhoto.vue";


const id = ref(0)
const Entry = ref(null)
provide('Entry', Entry)

const q = useQuasar()
const apiUrl = String(process.env.API)
const route = useRoute()
const editMode = inject('editMode')
const pTitle = ref('Новость')
const isError = ref(false)
const loading = ref(true)
const editorRef = ref()

const metaData = getMeta(pTitle.value || 'Новость')
useMeta(metaData)


function loadData() {

  loading.value = true
  api.post(apiUrl + 'api/news/entry.php', {
    params: {
      method: 'get',
      id: route.params.id
    }
  })
    .then((response) => {
      if (!!!response?.data?.result) {
        throw new Error();
      }
      Entry.value = response?.data?.data ?? null
      pTitle.value = Entry?.value?.title ?? ''
      const metaData = getMeta(pTitle.value || 'Новость')
      useMeta(metaData)
    })
    .catch((error) => {
      isError.value = true
      q.notify(notifyError(error))
    })
    .finally(() => {
      loading.value = false
    })
}

const usedPhotos = computed(() => {
  let sections = Entry.value.parsedMD.filter(el => el.type === 'img')

  return sections
    .map(section => Entry.value.Photos.find(photo => photo.id === section.fileId))
    .filter(Boolean)
})

const unusedPhotos = computed(() => {
  const usedPhotoIds = usedPhotos.value.map(photo => photo.id);
  return Entry.value.Photos.filter(photo => !usedPhotoIds.includes(photo.id));
})
function onDelPhoto(id) {
  if(editMode.value){
    editorRef.value.unlinkPhoto(id)
  }

}
onMounted(() => {
  loadData()
})
</script>

<template>

  <div class="contentArea" v-if="editMode && Entry">
    <NewEditor
      v-if="editMode && Entry"
      @uploaded="loadData()"
      ref="editorRef"
    ></NewEditor>
  </div>

  <PageTitle :title="Entry?.title || 'Заголовок'" :loading="loading"></PageTitle>
  <div class="contentArea" v-if="Entry">
    <template v-for="(row, idx) in Entry.parsedMD" :key="idx">

      <div v-if="row.type === 'text'" class="textBlock">
        <section v-if="row.content !== '\n'" v-html="row.content"></section>
        <br v-else>
      </div>
      <template v-if="row.type === 'img'">
        <EntryPhoto :id="row.fileId" :md5="row.md5" :ext="row.ext" @onDel="onDelPhoto"></EntryPhoto>
      </template>

      <div v-if="row.type === 'video'" class="videoItem">
        <q-video
          :ratio="16/9"
          :src="'https://www.youtube.com/embed/' + row.content"
        ></q-video>
      </div>
    </template>

    <template v-if="Entry.refLink">
      <q-separator spaced="1em"></q-separator>
      <q-item clickable :href="Entry.refLink">
        <q-item-section avatar>
          <q-icon name="link"></q-icon>
        </q-item-section>
        <q-item-section>
          <q-item-label>Источник: {{ Entry.refName }}</q-item-label>
        </q-item-section>
      </q-item>
    </template>

    <template v-if="unusedPhotos.length">
      <q-separator spaced="2em"></q-separator>
      <template v-for="(img, idx) in unusedPhotos" :key="idx">
        <EntryPhoto :id="img.id" :ext="img.ext" :md5="img.md5" @onDel="onDelPhoto"></EntryPhoto>
      </template>
    </template>


  </div>
  <div class="content" v-else-if="!loading">
    <div class="newsarea">
      <div class="narea">
        <div class="text">
          Новость не найдена
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.imagesArea {
  padding: 1em;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 2vw;
}

.textBlock {
  overflow-x: hidden;
  padding: 0 1em;
}

.contentArea {
  max-width: 900px;
  margin: auto;
  color: var(--mainText);
  font-size: 16px;
  padding: 1em 0;
}

.text img {
  box-shadow: 0 0 0.5em black;
}

.videoItem {
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  overflow: hidden;
  position: relative;
}

.narea iframe {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

li {
  padding: 0.5em 0;
}

blockquote {
  padding: 0 1em;
  border-left: 3px solid #6b4c07;
}
</style>
