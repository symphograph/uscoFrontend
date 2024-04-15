<script setup>

import {inject} from "vue";

const sortType = inject('sortType')
const emit = defineEmits(['onSelect'])
const sortTypes = [
  {label: 'Сначала новые', value: 'dateDesc', caption: 'По убыванию даты'},
  {label: 'Сначала давние', value: 'dateAsc', caption: 'По возрастанию даты'},
]
</script>

<template>
  <q-select v-model="sortType"
            borderless
            map-options
            emit-value
            @update:model-value="emit('onSelect')"
            :options="sortTypes">
    <template v-slot:option="scope">
      <q-item v-bind="scope.itemProps">
        <q-item-section>
          <q-item-label>
            {{ scope.opt.label }}
          </q-item-label>
          <q-item-label caption>
            {{scope.opt.caption}}
          </q-item-label>
        </q-item-section>
      </q-item>
    </template>
  </q-select>
</template>

<style scoped>

</style>
