<script setup lang="ts">

import {SketchBase} from "src/js/img";

const props = defineProps<{
  md5?: string,
  ext?: string,
  size?: number,
  url?: string
}>()

function getUrl(){
  if(props.url) return props.url

  return SketchBase.getSrc(props.md5 || '', props.ext || '', props.size)
}
</script>

<template>
  <q-img
    :src="getUrl()"
    :ratio="1920/1080"
    no-transition
    :loading-show-delay="150"
    fit="fill"
  >
    <template v-slot:error>
      <q-img :src="SketchBase.defaultUrl"
             no-spinner
             no-transition
      ></q-img>
    </template>
  </q-img>
</template>

<style scoped>

</style>
