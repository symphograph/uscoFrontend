<script setup lang="ts">
import {useMeta, useQuasar} from 'quasar'
import NewEditor from 'components/news/NewEditor.vue'
import {ref, inject, onMounted, provide, computed} from 'vue'
import {useRoute} from 'vue-router'
import {getMeta} from "src/js/myFuncts";
import EntryPhoto from "components/news/EntryPhoto.vue";
import PageShell from "components/main/PageShell.vue";
import {Entry} from "src/js/entry";


const entry = ref()
provide('Entry', entry)

const q = useQuasar()
const route = useRoute()

const editModes = inject('editModes') as Record<string, any>;
const editMode = editModes.entry;
provide('editMode', editMode)

const progress = ref(true)
provide('progress', progress)

const editorRef = ref()

useMeta(() => {
  return getMeta(entry?.value?.title ?? 'Новость')
})


async function loadData() {
  progress.value = true
  entry.value = await Entry.get(q, Number(route.params.id))
  progress.value = false
}

const usedPhotos = computed(() => {
  let sections = entry.value.parsedMD.filter((el: any) => el.type === 'img')

  return sections
    .map((section: any) => entry.value.Photos.find((photo: any) => photo.id === section.fileId))
    .filter(Boolean)
})

const unusedPhotos = computed(() => {
  const usedPhotoIds = usedPhotos.value.map((photo: any) => photo.id);
  return entry.value.Photos.filter((photo: any) => !usedPhotoIds.includes(photo.id));
})

function onDelPhoto(id: number) {
  if (editMode.value) {
    editorRef.value.unlinkPhoto(id)
  }

}

onMounted(() => {
  loadData()
})
</script>

<template>

  <PageShell :page-title="entry?.title ?? 'Новость'" no-stick-title>
    <template v-slot:PageContent>
      <div class="contentArea" v-if="editMode && entry">
        <NewEditor
          v-if="editMode && entry"
          @uploaded="loadData()"
          ref="editorRef"
        ></NewEditor>
      </div>
      <div class="contentArea" v-if="entry">
        <template v-for="(row, idx) in entry.parsedMD" :key="idx">

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

        <template v-if="entry.refLink">
          <q-separator spaced="1em"></q-separator>
          <q-item clickable :href="entry.refLink">
            <q-item-section avatar>
              <q-icon name="link"></q-icon>
            </q-item-section>
            <q-item-section>
              <q-item-label>Источник: {{ entry.refName }}</q-item-label>
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
      <div class="content" v-else-if="!progress">
        <div class="newsarea">
          <div class="narea">
            <div class="text">
              Новость не найдена
            </div>
          </div>
        </div>
      </div>
    </template>

  </PageShell>

</template>

<style>
.pageToolbar {
  width: 100%;
  max-width: 1200px;
  margin: auto;
  display: flex;
  /*border-bottom: 1px solid var(--PageTitle);*/
}

.pageTitle {
  font-size: 25px;
  color: var(--PageTitle);
}

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
  width: 100%;
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
