<script setup>
import {inject, ref} from "vue";

const initCells = inject('initCells')

const HallPlan = inject('HallPlan')

const addCountable = inject('addCountable')

</script>

<template>
  <q-input label="Рядов"
           v-model="HallPlan.structure.cntRows"
           color="amber"
           type="number"
           outlined
           class="inputNumber"
  ></q-input>
  <q-input label="Ячеек"
           v-model="HallPlan.structure.cntCols"
           color="amber"
           type="number"
           outlined
           class="inputNumber"
  ></q-input>
  <div style="width: 100%; border: 1px solid lightgray; border-radius: 3px">
    <q-tooltip delay="300">Всегда учитывать ячейку при подсчете мест ряда.</q-tooltip>
    <q-checkbox v-model="addCountable" label="+1">
    </q-checkbox>
  </div>

  <q-btn label="Создать"
         @click="initCells"
         class="defbtn"
         outline
  ></q-btn>
</template>

<style scoped>

</style>
