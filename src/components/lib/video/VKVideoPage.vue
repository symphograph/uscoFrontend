<script setup>
import { api } from 'boot/axios';
import { notifyError } from 'src/js/myFuncts';
import {inject, onBeforeMount, provide, ref} from 'vue';
import { useQuasar } from 'quasar';
import { useRoute, useRouter } from 'vue-router';
import WorkList from 'components/lib/work/WorkList.vue';
import PageShell from 'components/main/PageShell.vue';
import BtnLibEdit from 'components/lib/BtnLibEdit.vue';
import AuthotItem from 'components/lib/AuthorItem.vue';
import VKVideoItem from 'components/lib/video/VKVideoItem.vue';
import VKVideoDialog from 'components/lib/video/VKVideoDialog.vue';
import {Video} from "src/js/lib";

const q = useQuasar()
const apiStaff = String(process.env.apiStaff)
const apiUrl = String(process.env.API);

const editModes = inject('editModes');
const editMode = editModes.libVideo
provide('editMode', editMode)

const progress = ref(false)
provide('progress', progress)

const videos = ref([])
const searchText = ref('')

const announceList = ref([])
provide('announceList', announceList)

async function loadVideos() {
  progress.value = true
  const list = await Video.getList(q)
  videos.value = [...list]
  progress.value = false
}

function splitTitle(str) {
  const parts = str.split(' - ');
  return { date: parts[0], title: parts.slice(1).join(' - ') };
}

function updateAllFromVK() {
  progress.value = true
  api.post(apiStaff + 'epoint/lib/video.php', {
    params: {
      method: 'updateAllFromVK'
    }
  })
    .then((response) => {
      loadVideos()
    })
    .catch((error) => {
      videos.value = []
      q.notify(notifyError(error))
    })
    .finally(() => {
      progress.value = false
    })
}

function loadAnnounces() {
  progress.value = true
  api.post(apiUrl + 'epoint/event/announce.php', {
    params: {
      method: 'listAll'
    }
  })
    .then((response) => {
      announceList.value = []
      announceList.value = response?.data?.data ?? []
    })
    .catch((error) => {
      q.notify(notifyError(error))
      announceList.value = []
    })
    .finally(() => {
      progress.value = false
    })
}

onBeforeMount(() => {
  loadAnnounces()
  loadVideos()
})
</script>

<template>
  <PageShell page-title="Видеотека">
    <template v-slot:ToolPanel>
      <q-btn icon="refresh" flat stretch @click="updateAllFromVK"></q-btn>
      <q-input v-model="searchText" style="width: 100%; max-width: 16em" label="фильтр" stack-label clearable>
        <template v-slot:append>
          <q-icon name="search"></q-icon>
        </template>
      </q-input>
    </template>
    <template v-slot:PageContent>
      <div class="centralCol">
        <div class="vidarea" v-if="videos.length">
          <template v-for="video in videos" :key="video.id">
            <VKVideoItem :video="video"></VKVideoItem>
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
