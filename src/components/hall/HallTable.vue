<script setup>

import HallBuilderCell from "components/hall/cells/HallBuilderCell.vue";
import {inject} from "vue";

const HallPlan = inject('HallPlan')
const emit = defineEmits(['cellClick', 'ticket'])

function cellClicked(cell) {
  emit('cellClick', cell)
}

function ticketClicked(ticket) {
  emit('ticket', ticket)
}

function findTicket(id) {
  return HallPlan.value.tickets.find(el => el.cellId === id)
}
</script>

<template>
  <q-card-section v-if="HallPlan.tickets.length">
    <table style="width: max-content; margin: auto">
      <tbody style="margin: auto">
      <template v-for="(row,idx) in HallPlan.cells" :key="'row_' + idx">
        <tr>
          <td><div class="rowNumber">{{ HallPlan.structure.rowNums[idx] || '' }}</div></td>
          <td v-for="(cell, col) in row" :key="idx + '_' + col">
            <HallBuilderCell
                             v-model:cell="HallPlan.cells[cell.row-1][cell.col-1]"
                             :ticket="findTicket(cell.id)"

                             :key="cell.id"
                             @cellClick="(cell) => cellClicked(cell)"
                             @tickedClick="(ticket) => ticketClicked(ticket)"
            ></HallBuilderCell>
          </td>
          <td><div class="rowNumber">{{ HallPlan.structure.rowNums[idx] || ''}}</div></td>
        </tr>
      </template>
      </tbody>
    </table>
  </q-card-section>
</template>

<style scoped>
.rowNumber {
  padding: 3px;
  font-size: 10px;
}
</style>
