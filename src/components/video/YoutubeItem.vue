<script setup lang="ts">
const props = defineProps({
  youtubeId: Number
})
</script>

<template>
  <q-video
    :ratio="16/9"
    :src="'https://www.youtube.com/embed/' + youtubeId + '?rel=0'"
  ></q-video>
</template>

<style scoped>

</style>
