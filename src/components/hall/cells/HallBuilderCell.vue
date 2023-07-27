<script setup>
import {computed, inject, ref} from "vue";

const props = defineProps({
  cell: Object,
  ticket: Object
})

const colors = inject('colors')
const ticketMutable = ref(props.ticket)
const HallPlan = inject('HallPlan')
const selectedMode = inject('selectedMode')
const emit = defineEmits(['cellClick'])
const selectedPrice = inject('selectedPrice')
const addCountable = inject('addCountable')
const prevPriceType = ref(false)
const prevTicket = ref(0)

function findTicket(id) {
  return HallPlan.value.tickets.find(el => el.id === id) ?? false
}

function setPriceType() {
  console.log(ticketMutable.value)

  if(!!!(ticketMutable?.value?.id ?? 0)){
    return
  }
  console.log(props.ticket)
  if(
    prevTicket.value.id
    !==
    (ticketMutable?.value?.id ?? 0)
  ){
    prevPriceType.value = false
  }
  if(selectedPrice.value.priceType === ticketMutable.value.priceType){
    ticketMutable.value.priceType = prevPriceType.value
  }else {
    prevPriceType.value = ticketMutable.value.priceType
    ticketMutable.value.priceType = selectedPrice.value.priceType
  }
  prevTicket.value = ticketMutable.value.id

}

function setStructureCell(cell) {
  cell.exist = !cell.exist
  if(!findTicket(cell.id)){
    HallPlan.value.tickets.push({
      id: cell.id,
      offline: false,
      seatRow: 0,
      seatNum: 0,
      priceType: 'Invite'
    })
  }

  cell.forceCount = !!(!cell.exist && addCountable.value);

  console.log(cell)
}

function editCell(cell) {
  switch (selectedMode.value) {
    case 'Structure': {
      setStructureCell(cell)
      break;
    }
    case 'Prices': {
      setPriceType()

      break;
    }
    case 'Offline': {
      //console.log(HallPlan.value.tickets.find(el => el.id === cell.id))
      ticketMutable.value.offline = !ticketMutable.value.offline
      //console.log(ticketMutable.value)
      break;
    }
    default: {
      if (cell.priceType === selectedMode.value.value) {
        cell.priceType = 'Invite'
        break;
      }
      cell.priceType = selectedMode.value.value
    }
  }

  //emit('cellClick', cell)
}
</script>

<template>
  <div
    class="cellArea"
    @click="editCell(cell)"
  >
    <template v-if="props.cell.exist">
      <div v-if="ticket.offline" class="offlineCell"
           :style="{
        borderColor: colors[props.ticket?.priceType || 'Invite'][1],
        backgroundColor: colors[props.ticket?.priceType || 'Invite'][1]
      }"
      ></div>
      <div class="availableCell"
           v-else
           :style="{borderColor: colors[props.ticket?.priceType || 'Invite'][1]}"
      >{{ props.ticket.seatNum }}
        <q-tooltip :offset="[0,-120]" max-width="20em" :delay="300">
          {{ 'Место: ' + props.ticket.seatNum }}<br>
          {{ 'Ряд: ' + props.ticket.seatRow }}<br>
          {{ 'Цена: ' + props.ticket.priceType }}
        </q-tooltip>

      </div>
    </template>

    <template v-else-if="props.cell.forceCount">
      <div class="forceCount">?
        <q-tooltip :offset="[0,-100]" max-width="20em">
          По каким-то причинам это место посчитано в схеме, но на самом деле его не существует
        </q-tooltip>
      </div>
    </template>
  </div>
</template>

<style lang="scss">
.emptyCell {
  border: none;
}

.forceCount {
  width: 100%;
  height: 100%;
  border: 1px dotted lightgray;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.cellArea {
  width: 20px;
  height: 20px;
  font-size: 8px;
  background: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.availableCell {
  width: 100%;
  height: 100%;
  border: 1px solid;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
}

.offlineCell {
  width: 30%;
  height: 30%;
  border: 1px solid;
  /*background-color: gray;*/
  border-radius: 50%;
}
</style>
