<template>
<div class="eventsarea">
<div class="vidarea">
  <div class="vitem" v-for="vid in videos" :key="vid.youtube_id">
    <q-video
      :ratio="16/9"
      :src="'https://www.youtube.com/embed/' + vid.youtube_id + '?rel=0'"
    ></q-video>
  </div>
</div>
</div>
</template>

<script setup>

import { useQuasar } from 'quasar'
import { api } from 'boot/axios'
import { inject, onMounted, ref } from 'vue'
import {notifyError} from "src/myFuncts";

const q = useQuasar()
const apiUrl = String(process.env.API)

const props = defineProps({
  videoLimit: Object
})

const videos = ref([
      { id: 'cYYEe_o-M3w' },
      { id: 'ZAC_GGmo-bk' },
      { id: 'yjTAG2iCjpk' },
      { id: 'Y4syxGpzDn4' },
      { id: 'lmpnSdUmSEE' },
      { id: '2Pagmmq3Yho' },
      { id: '_YTqUE3M_Gw' },
      { id: 'kYPkO3iB9OQ' }
])



    function loadData () {

      api.post(apiUrl + 'api/get/video.php', {
        params: {
          limit: props.videoLimit.limit
        }
      })
        .then((response) => {
          videos.value = response?.data?.data ?? []
        })
        .catch((error) => {
          q.notify(notifyError(error))
        })
    }
    onMounted(() => {
      loadData()
    })
</script>

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
