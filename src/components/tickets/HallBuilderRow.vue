<template>
  <tr>
    <td>{{rowNum}}</td>
    <td v-for="(seat, col) in plan[rowNum]" :key="'col'+col">
      <q-checkbox v-model="seat.condition" dense @update:model-value="emit('checked')">
        <q-tooltip>{{ seat }}</q-tooltip>
      </q-checkbox>
    </td>
  </tr>
</template>

<script setup>

import {inject, ref} from "vue";
const plan = inject('seats')
const props = defineProps({
  cols: Array,
  rowNum: Number
})

const cols = ref(props.cols)

const emit = defineEmits(['checked'])
</script>

<style scoped>

</style>
