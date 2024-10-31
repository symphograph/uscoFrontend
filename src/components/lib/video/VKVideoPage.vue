<script setup lang="ts">

import {computed, inject, onBeforeMount, provide, Ref, ref} from 'vue';
import { useQuasar } from 'quasar';
import PageShell from 'components/main/PageShell.vue';
import VKVideoItem from 'components/lib/video/VKVideoItem.vue';
import {Video} from "src/js/lib";
import {myAnnounce} from "src/js/entry";

const q = useQuasar()

const editModes = inject('editModes') as Record<string, any>;
const editMode = editModes.libVideo
provide('editMode', editMode)

const progress = ref(false)
provide('progress', progress)

const videos = ref([]) as Ref<Record<string, any>[]>
const searchText = ref('')
const isSearchFocused = ref(false)
provide('scrollWatch', ref(!isSearchFocused.value))

const filteredVideos = computed(() => {
  if(!searchText.value) {
    return videos.value
  }
  const searchLower = searchText.value.toLowerCase();
  return videos.value.filter(el =>
    (el.description ? el.description.toLowerCase().includes(searchLower) : false)
    || (el.recordedAt ? el.recordedAt.toLowerCase().includes(searchLower) : false)
    || (el.title ? el.title.toLowerCase().includes(searchLower) : false)
  );
})

const announceList = ref([])
provide('announceList', announceList)

async function loadVideos() {
  progress.value = true
  const list = await Video.getList(q)
  videos.value = [...list]
  progress.value = false
}

async function updateAllFromVK() {
  progress.value = true
  if (await Video.updateAllFromVK(q)){
    await loadVideos()
  }
  progress.value = false
}

onBeforeMount(() => {
  myAnnounce.initAllList(q)
  loadVideos()
})
</script>

<template>
  <PageShell page-title="Видеотека">
    <template v-slot:ToolPanel>
      <q-btn icon="refresh" flat stretch @click="updateAllFromVK"></q-btn>
      <q-input v-model="searchText"
               style="width: 100%; max-width: 16em"
               label="фильтр"
               @blur="isSearchFocused = false"
               @focus="isSearchFocused = true"
               stack-label
               clearable>
        <template v-slot:append>
          <q-icon name="search"></q-icon>
        </template>
      </q-input>
    </template>
    <template v-slot:PageContent>
      <div class="centralCol">
        <div class="vidarea" v-if="videos.length">
          <template v-for="video in filteredVideos" :key="video.id">
            <VKVideoItem :video="video" @onSave="loadVideos"></VKVideoItem>
          </template>

        </div>
      </div>
    </template>
  </PageShell>
</template>

<style scoped>
.vidarea {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 2vw;
}
</style>
