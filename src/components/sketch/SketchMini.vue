<script setup lang="ts">
import {SketchBase} from "src/js/img";

const props = defineProps<{
  md5: string,
  ext: string,
  size?: number
}>()

</script>

<template>
  <img :src="SketchBase.getSrc(md5, ext, size)" alt="l" style="width: 60px"/>
</template>

<style scoped>

</style>
