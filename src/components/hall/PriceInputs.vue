<script setup>
import {inject} from "vue";

const emit = defineEmits(['onSelectPrice'])

const selectedPrice = inject('selectedPrice')
const HallPlan = inject('HallPlan')

function onSelectPrice(cellPrice) {
  selectedPrice.value = cellPrice
  //console.log(Pricing.value)
}

const colors = inject('colors')

function iconSize(cellPrice) {
  return cellPrice.priceType === selectedPrice.value.priceType ? '1.5em' : '1em'
}
</script>

<template>
<div class="priceRow">
  <template v-for="cellPrice in HallPlan.pricing" :key="cellPrice.priceType">
    <div class="priceCell">
      <div style="cursor: pointer" @click="onSelectPrice(cellPrice)">
        <q-input :label="cellPrice.label"
                 dense
                 :label-color="colors[cellPrice.priceType][0]"
                 step="100"
                 input-class="priceInput"
                 v-model="HallPlan.pricing.find(el => el.priceType === cellPrice.priceType).price"
                 type="number"
        >
        </q-input>
        <q-icon name="edit"
                :color="colors[cellPrice.priceType][0]"
                :size="iconSize(cellPrice)"
        ></q-icon>
      </div>
    </div>
  </template>
</div>
</template>

<style scoped>
.priceRow {
  display: flex;
  justify-content: space-between;
}

.priceCell {
  display: flex;
  max-width: 5em;
  cursor: pointer;
}

.priceInput {

}


</style>
