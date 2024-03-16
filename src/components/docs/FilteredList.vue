<script setup>

import {computed, inject} from "vue";
import DocItem from "components/docs/DocItem.vue";

const folderList = inject('folderList')

const docList = computed(() =>
  folderList.value.slice().reduce((acc, folder) => {
    return acc.concat(folder.docs);
  }, [])
)

const filterInput = inject('filterInput')
const filteredList = computed(() =>
  docList.value.slice().filter(v => v.title.toLowerCase().includes(filterInput.value))
)

function getFolderTitle(id) {
  const folder = folderList.value.find(el => el.id = id)
  return folder.title
}
</script>

<template>
  <q-list separator>
    <template v-for="doc in filteredList" :key="doc.id">
      <DocItem :doc="doc"></DocItem>
    </template>
  </q-list>
</template>

<style scoped>

</style>
