<script setup>
import {computed, inject} from "vue";

const modes = [
  {
    value: 'Offline',
    label: 'Занятые места',
    descr: 'Места, чьи билеты недоступны онлайн. Их забрали очно.'
  },
  {
    value: 'Prices',
    label: 'Цены',
    descr: 'Настройка цен и привязка места к типу цены'
  },
  {
    value: 'Structure',
    label: 'Структура Зала',
    descr: 'Отмечает ячейку как проход или место'
  }
]
const selectedMode = inject('selectedMode')
const selectedPrice = inject('selectedPrice')
const colors = inject('colors')
function mainColor () {
  return selectedMode.value === 'Prices' ? colors[selectedPrice.value.priceType][0] : 'amber'
}
</script>

<template>
  <q-select v-model="selectedMode"
            color="amber"
            :label-color="mainColor()"
            outlined
            emit-value
            map-options
            style="width: 100%"
            :options="modes"
            label="Что будем редактировать?"
  >
    <template v-slot:prepend>
      <q-icon name="edit" :color="mainColor()"/>
    </template>
    <template v-slot:option="scope">
      <q-item v-bind="scope.itemProps">
        <q-item-section>
          <q-item-label>
            {{ scope.opt.label }}
          </q-item-label>
          <q-item-label caption>
            {{ scope.opt.descr }}
          </q-item-label>
        </q-item-section>

      </q-item>
    </template>
  </q-select>
</template>

<style scoped>

</style>
