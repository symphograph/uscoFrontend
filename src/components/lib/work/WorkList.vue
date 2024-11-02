<script setup>

import {computed, inject, watch} from "vue";
import WorkItem from "components/lib/work/WorkItem.vue";


const works = inject('works')
const searchText = inject('searchText')

const filteredList = computed(() => {
  if (!searchText.value) {
    return works.value
  }
  const searchLower = searchText.value.toLowerCase();
  return works.value.filter(work =>
    (work.titleRu ? work.titleRu.toLowerCase().includes(searchLower) : false) ||
    (work.titleEn ? work.titleEn.toLowerCase().includes(searchLower) : false)
  );
})
const emit = defineEmits(['onDel'])

watch(searchText, (newValue, oldValue) => {
  console.log("Search text changed from", oldValue, "to", newValue);
});
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
                      class="centralCol"

    >
      <template v-slot="{item}">
        <WorkItem :work="item" @onDel="emit('onDel')" :key="`wrk${item.id}`"></WorkItem>
      </template>
    </q-virtual-scroll>
  </q-scroll-area>
</template>


<style scoped>

</style>
