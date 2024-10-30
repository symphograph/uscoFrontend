<script setup lang="ts">

import {ref} from "vue";

const props = defineProps<{
  announces?: Record<string, any>[]
}>()

const emit = defineEmits(['onSelect'])

const selectedAnnounce = ref()
</script>

<template>
<q-select v-model="selectedAnnounce"
          :options="announces"
          map-options
          option-value="id"
          option-label="progName"
          @update:modelValue="emit('onSelect', selectedAnnounce)"
>
  <template v-slot:option="scope">
    <q-item v-bind="scope.itemProps" :id="`an${scope.opt?.id}`">
      <q-item-section>
        <q-item-label caption>
          {{scope.opt.eventTime}}
        </q-item-label>
        <q-item-label caption>
          {{scope.opt.Hall.name}}
        </q-item-label>
        <q-item-label>
          {{scope.opt.progName}}
        </q-item-label>
      </q-item-section>
    </q-item>
  </template>
</q-select>
</template>

<style scoped>

</style>
