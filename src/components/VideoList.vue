<script setup lang="ts">

import { useQuasar } from 'quasar';
import { api } from 'boot/axios';
import {inject, onMounted, Ref, ref} from 'vue';
import { notifyError } from 'src/js/myFuncts';

const q = useQuasar();
const apiUrl = String(process.env.API);

const props = defineProps<{
  method: string,
  limit: number
}>();

const videos = ref([]) as Ref<any[]>;


function loadData() {

  api.post(apiUrl + 'epoint/video/youtube.php', {
    params: {
      method: props.method,
      limit: props.limit
    }
  })
    .then((response) => {
      videos.value = response?.data?.data ?? [];
    })
    .catch((error) => {
      q.notify(notifyError(error));
    });
}

onMounted(() => {
  loadData();
});
</script>

<template>
  <div class="eventsarea">
    <div class="vidarea">
      <div class="vitem" v-for="video in videos" :key="video.youtubeId">
        <q-video
          :ratio="16/9"
          :src="'https://www.youtube.com/embed/' + video.youtubeId + '?rel=0'"
        ></q-video>
      </div>
    </div>
  </div>
</template>

<style scoped>
.vidarea {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 2vw;
}

.vitem {
  box-shadow: 1px 2px 5px #000000;
}


</style>
