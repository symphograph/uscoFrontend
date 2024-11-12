<script setup lang="ts">

import {computed} from "vue";
import WorkItem from "components/lib/work/WorkItem.vue";

const props = defineProps<{
  works: Record<string, any>[]
  searchText?: string
}>()

const filteredList = computed(() => {
  if (!props.searchText) {
    return props.works
  }
  const searchLower = props.searchText.toLowerCase();
  return props.works.filter(work =>
    (work.titleRu ? work.titleRu.toLowerCase().includes(searchLower) : false) ||
    (work.titleEn ? work.titleEn.toLowerCase().includes(searchLower) : false)
  );
})
const emit = defineEmits(['onDel'])

</script>

<template>
  <q-scroll-area
    id="scroll-area-with-virtual-scroll-1"
    style="height: 100%"
  >
    <q-virtual-scroll :items="filteredList"
                      virtual-scroll-item-size="40"
                      virtual-scroll-slice-size="30"
                      :virtual-scroll-sticky-size-start="48"
                      :virtual-scroll-sticky-size-end="132"
                      scroll-target="#scroll-area-with-virtual-scroll-1 > .scroll"
                      style="height: 100%"
    >
      <template v-slot="{item}">
        <WorkItem :work="item" @onDel="emit('onDel')" :key="`wrk${item.id}`"></WorkItem>
      </template>
      <template v-slot:after>
        <slot name="after"></slot>
      </template>
    </q-virtual-scroll>
  </q-scroll-area>

</template>


<style scoped>

</style>
