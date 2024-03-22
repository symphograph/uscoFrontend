<script setup>

import {imgUrl} from "src/js/myFuncts";
import {useQuasar} from "quasar";
import {inject} from "vue";

const apiUrl = String(process.env.API)
const q = useQuasar()
const editMode = inject('editMode')

const props = defineProps({
  md5: {
    type: String,
    required: true
  },
  ext: {
    type: String,
    required: true
  },
  size: {
    type: Number,
    required: false,
    default: 0
  }
})
</script>

<template>
  <q-img
    :src="imgUrl(apiUrl, md5, ext, size)"
    :ratio="1920/1080"
    fit="fill"
    placeholder-src="/img/news/default_sketch.svg"
  >
    <template v-slot:error>
      <q-img src="/img/news/default_sketch.svg"></q-img>
    </template>
  </q-img>
</template>

<style scoped>

</style>
