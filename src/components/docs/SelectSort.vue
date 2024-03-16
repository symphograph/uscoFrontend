<script setup>

import {inject} from "vue";

const sortType = inject('sortType')

const sortTypes = [
  {label: 'По названию', value: 'title', caption: 'Сортировать по названию документа'},
  {label: 'По возрастанию даты', value: 'dateAsc', caption: 'От давних'},
  {label: 'По убыванию даты', value: 'dateDesc', caption: 'От новых'},
]
</script>

<template>
  <q-select v-model="sortType"
            label="Упорядочить"
            borderless
            map-options
            emit-value
            style="width: 16em"
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
