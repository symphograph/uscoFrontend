<script setup lang="ts">

import WorkSelectItem from "components/announсes/WorkSelectItem.vue";
import {ref, watch, watchEffect} from "vue";

const selectedWork = ref()
const emit = defineEmits(['onSelect'])

const props = defineProps<{
  works: Array<Record<string, any>>,
  loading?: false
}>()

const options = ref([...props.works])

watchEffect(() => {
  options.value = [...props.works]
  console.log('works updated')
  selectedWork.value = undefined
})

function filterFn(val: any, update: any, abort: any) {
  update(() => {
    if(!val) {
      options.value = [...props.works]
      return
    }
    const needle = val.toLowerCase()
    let List = [...props.works]

    if (val) {
      List = List.filter(work =>
        (work.titleRu ? work.titleRu.toLowerCase().includes(needle) : false) ||
        (work.titleEn ? work.titleEn.toLowerCase().includes(needle) : false)
      );
    }
    options.value = List
  })
}

</script>

<template>
  <q-select
    v-model="selectedWork"
    :options="options"
    :loading="loading"
    option-label="titleRu"
    option-value="id"
    map-options
    use-input
    @filter="filterFn"
    clearable
    label="Произведение"
    @update:model-value="emit('onSelect', selectedWork)"
  >
    <template v-slot:option="scope">
      <WorkSelectItem v-bind="scope.itemProps" :work="scope.opt"></WorkSelectItem>
    </template>
  </q-select>
</template>

<style scoped>

</style>
