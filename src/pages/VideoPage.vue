<template>
  <div class="content">
      <VideoList :videoLimit="videoLimit"></VideoList>
  </div>

</template>

<script setup>
import VideoList from 'components/VideoList.vue'
import { useMeta } from 'quasar'
import {getMeta} from "src/js/myFuncts";

const metaData = getMeta('Видео')
useMeta(metaData)

const videoLimit = {
  limit: 1000
}

</script>

<style scoped>
.vidarea {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  grid-gap: 2vw;
}
</style>
