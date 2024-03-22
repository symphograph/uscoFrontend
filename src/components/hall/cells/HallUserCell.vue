<script setup>
import {computed, inject, ref} from "vue";
import {userIdByJWT} from "src/js/myFuncts";

const props = defineProps({
  cell: Object,
  ticket: Object
})

const colors = inject('colors')
const ticketMutable = ref(props.ticket)
const HallPlan = inject('HallPlan')
//const selectedMode = inject('selectedMode')
const emit = defineEmits(['reserve', 'returnTicket'])
//const selectedPrice = inject('selectedPrice')
//const addCountable = inject('addCountable')
const prevPriceType = ref('Invite')
const prevTicket = ref(0)
const AccessToken = inject('AccessToken')
const userId = userIdByJWT(AccessToken.value)*1

function findTicket(id) {
  return HallPlan.value.tickets.find(el => el.cellid === id) ?? false
}

function setPriceType() {
  //console.log(ticketMutable.value)

  if(!!!(ticketMutable?.value?.cellId ?? 0)){
    return
  }
  //console.log(props.ticket)
  if(
    prevTicket.value.cellId
    !==
    (ticketMutable?.value?.cellId ?? 0)
  ){
    prevPriceType.value = 'Invite'
  }
  if(selectedPrice.value.priceType === ticketMutable.value.priceType){
    ticketMutable.value.priceType = prevPriceType.value
  }else {
    prevPriceType.value = ticketMutable.value.priceType
    ticketMutable.value.priceType = selectedPrice.value.priceType
  }
  prevTicket.value = ticketMutable.value.cellId

}

function setStructureCell(cell) {
  cell.exist = !cell.exist
  if(!findTicket(cell.id)){
    HallPlan.value.tickets.push({
      cellId: cell.id,
      offline: false,
      seatRow: 0,
      seatNum: 0,
      priceType: 'Invite'
    })
  }

  cell.forceCount = !!(!cell.exist && addCountable.value);

  //console.log(cell)
}

function reserve() {
  emit("reserve", ticketMutable.value.id)
}

function returnTicket() {
  emit("returnTicket", ticketMutable.value.id)
}

function unReserve() {
  ticketMutable.value.userId = null
  //console.log(userIdByJWT(AccessToken.value))
}
</script>

<template>
  <div
    class="cellArea"

  >
    <template v-if="cell.exist">
      <div v-if="!!ticket?.offline" class="offlineCell"
           :style="{
        borderColor: colors[props.ticket?.priceType || 'Invite'][1],
        backgroundColor: colors[props.ticket?.priceType || 'Invite'][1]
      }"
      ></div>
      <div v-else-if="props.ticket.userId === userId"
           class="userCell"
           @click="returnTicket()"
           :style="{borderColor: colors[props.ticket?.priceType || 'Invite'][1]}"
      >
        {{ props.ticket.seatNum }}
        <q-tooltip :offset="[0,-120]" max-width="20em" :delay="300">
          {{ 'Это Ваше место' }}<br>
          {{ 'Ряд: ' + props.ticket.seatRow }}<br>
          {{ 'Место: ' + props.ticket.seatNum }}<br>
          {{ 'Цена: ' + props.ticket.priceType }}
        </q-tooltip>
      </div>
      <div v-else-if="props.ticket.userId" class="offlineCell"
           :style="{
        borderColor: colors[props.ticket?.priceType || 'Invite'][1],
        backgroundColor: colors[props.ticket?.priceType || 'Invite'][1]
      }"
      ></div>
      <div class="availableCell"
           v-else
           :style="{borderColor: colors[props.ticket?.priceType || 'Invite'][1]}"
           @click="reserve()"
      >{{ props.ticket.seatNum }}
        <q-tooltip :offset="[0,-120]" max-width="20em" :delay="300">
          {{ 'Ряд: ' + props.ticket.seatRow }}<br>
          {{ 'Место: ' + props.ticket.seatNum }}<br>
          {{ 'Цена: ' + props.ticket.priceType }}
        </q-tooltip>

      </div>
    </template>
  </div>
</template>

<style>
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
.userCell {
  width: 100%;
  height: 100%;
  border: 2px solid #00ff00;
  background-color: white;
  color: black;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
}
</style>
