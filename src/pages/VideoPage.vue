<template>
  <div class="content">
      <VideoList :videoLimit="videoLimit"></VideoList>
  </div>

</template>

<script setup>
import VideoList from 'components/VideoList.vue'
import { useMeta } from 'quasar'

const metaData = {
  title: 'Видео'
}
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
