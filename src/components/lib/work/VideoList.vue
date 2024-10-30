<script setup lang="ts">

import {onBeforeMount, Ref, ref} from "vue";
import {Video} from "src/js/lib";
import {useQuasar} from "quasar";
import VKVideoItem from "components/lib/video/VKVideoItem.vue";

const videos = ref([]) as Ref<Record<string, any>[]>
const q = useQuasar()

const props = defineProps<{
  workId: number
}>()
onBeforeMount(async () => {
  videos.value = await Video.getListByWork(q, props.workId);
  console.log(videos.value)
})
</script>

<template>
  <q-card>
    <q-card-section>
      <template v-for="video in videos" :key="`v-list${video.id}`">
        <VKVideoItem :video="video"></VKVideoItem>v
      </template>

    </q-card-section>
  </q-card>
</template>

<style scoped>

</style>
