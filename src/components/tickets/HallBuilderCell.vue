<template>
  <div
    :class="'cell2' + (seatN.exist ? ' ' +  seatN.pricing : '')"
    @click="editCell(seatN)"></div>
</template>

<script setup>
import {inject, ref} from "vue";

const props = defineProps({
  seat: Object
})

const seatN = ref(props.seat)

const selectedMode = inject('selectedMode')


function editCell(seat) {
  switch (selectedMode.value) {
    case 'Existing': {
      seat.exist = !seat.exist
      return;
    }
    default: {
      if(seat.pricing === selectedMode.value){
        seat.pricing = 'Invite'
        return;
      }
      seat.pricing = selectedMode.value
    }
  }
}
</script>

<style lang="scss" scoped>
.cell {
  /*width: 10px;*/
  /*height: 10px;*/
  /*border: 1px solid;*/
  /*border-radius: 3px;*/
  /*margin: 1px;*/
  border: none;
}

.cell2 {
  width: 30px;
  height: 30px;
  /*border: 1px solid;*/
  border-radius: 3px;
  margin: 2px;
  border: none;
}



.Invite {
  border: 1px dotted $invite;
  color: $invite;
}

.Price_1 {
  border: 1px solid $price_1;
  color: $price_1;
}

.Price_2 {
  border: 1px solid $price_2;
  color: $price_2;
}

.Price_3 {
  border: 1px solid $price_3;
  color: $price_3;
}

.Price_4 {
  border: 1px solid $price_4;
  color: $price_4;
}

.Price_5 {
  border: 1px solid $price_5;
  color: $price_5;
}
</style>
