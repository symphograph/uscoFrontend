<script setup lang="ts">

import {onBeforeMount, provide, Ref, ref} from "vue";
import {Video} from "src/js/lib";
import {useQuasar} from "quasar";
import VKVideoItem from "components/lib/video/VKVideoItem.vue";

const videos = ref([]) as Ref<Record<string, any>[]>
const q = useQuasar()

const editMode = ref(false)
provide('editMode', editMode)

const props = defineProps<{
  workId: number
}>()
onBeforeMount(async () => {
  videos.value = await Video.getListByWork(q, props.workId);
})
</script>

<template>
  <q-card>
    <q-card-section>
      <div class="vidarea" v-if="videos.length">
      <template v-for="video in videos" :key="`v-list${video.id}`">
        <VKVideoItem :video="video"></VKVideoItem>
      </template>
      </div>
    </q-card-section>
  </q-card>
</template>

<style scoped>
.vidarea {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 2vw;
}
</style>
