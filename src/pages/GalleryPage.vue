<template>
  <div class="content">
    <div class="eventsarea">
      <PhotoArea></PhotoArea>
    </div>
  </div>
</template>

<script setup>
import PhotoArea from 'components/PhotoArea.vue'
import { useMeta } from 'quasar'
import {inject, onBeforeMount} from "vue";

const metaData = {
  title: 'Галерея'
}
useMeta(metaData)
onBeforeMount(() => {

})
</script>

<style scoped>

body, .content, .q-page-container, .q-carousel__slide {
  background-color: #2f2e2e;
}
.q-page-container{
  padding: 0;
}
.content{
  margin: 0;
  /*background-color: black;*/
}
</style>
