<script setup>

import {computed, inject, watch} from "vue";
import WorkItem from "components/lib/work/WorkItem.vue";


const works = inject('works')
const searchText = inject('searchText')

const filteredList = computed(() => {
  if(!searchText.value) {
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
    <q-list separator>
      <template v-for="work in filteredList" :key="work.id">
        <WorkItem :work="work" @onDel="emit('onDel')"></WorkItem>
      </template>
    </q-list>
</template>



<style scoped>

</style>
