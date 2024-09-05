<script setup>

import { inject, ref } from 'vue';

const props = defineProps({
  video: Object
});

const libEditMode = inject('libEditMode');
const isHover = ref(false);
const isOpenVKVideoDialog = inject('isOpenVKVideoDialog')
const VKVideo = inject('VKVideo')

function openDialog() {
  VKVideo.value = props.video
  isOpenVKVideoDialog.value = true
  console.log(VKVideo.value)
}

function splitTitle(str) {
  const parts = str.split(' - ');
  return { date: parts[0], title: parts.slice(1).join(' - ') };
}
</script>

<template>
  <q-img style="cursor: pointer"
         :src="video.image[4].url"
         :ratio="1920/1080"
         @mouseover="isHover = true"
         @mouseleave="isHover = false"
         class="rounded-borders">
    <div class="absolute-top-left text-subtitle2">
      {{ video.recordedAt }}
    </div>
    <div class="absolute-top-right no-padding" v-if="libEditMode">
      <q-btn icon="edit" flat @click="openDialog"></q-btn>
    </div>
    <div class="absolute-center" v-if="isHover" style="border-radius: 50%">
      <q-btn icon="play_circle" style="cursor: pointer" round></q-btn>
    </div>

    <div class="absolute-bottom text-center">
      {{ video.title }}
    </div>
  </q-img>
</template>

<style scoped>

</style>
