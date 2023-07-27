<script setup>
import {inject, provide, ref} from "vue";
import PriceInputs from "components/hall/PriceInputs.vue";
import StructureInputs from "components/hall/StructureInputs.vue";
import ModeSelect from "components/hall/ModeSelect.vue";

const HallPlan = inject('HallPlan')
const Halls = inject('Halls')
const emit = defineEmits(['onSelectHall', 'onSelectPrice'])


const selectedMode = inject('selectedMode')



const colors = inject('colors')



function onSelectMode (mode) {
  if(mode.price !== null){
    selectedMode.value = mode
  }

}

function onSelectHall () {
  emit('onSelectHall')
}
</script>

<template>
  <div class="menuArea">
    <div class="menuBlock">
      <div class="blockRow">
        <q-select :options="Halls"
                  v-model="HallPlan.id"
                  color="amber"
                  outlined
                  style="width: 100%"
                  emit-value
                  map-options
                  option-value="id"
                  option-label="name"
                  @update:model-value="onSelectHall"
        ></q-select>
      </div>
    </div>

    <div class="menuBlock">
      <div class="blockRow">
        <ModeSelect></ModeSelect>
      </div>
      <template v-if="selectedMode === 'Structure'">
        <div class="blockRow">
          <StructureInputs></StructureInputs>
        </div>
      </template>

      <template v-if="selectedMode === 'Prices'">
        <PriceInputs></PriceInputs>
      </template>
    </div>
  </div>
</template>

<style scoped>

.menuArea {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: auto;
}

.menuBlock {
  width: 100%;
  max-width: 30em;
}

.blockRow {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.inputNumber {
  /*max-width: 10em;*/
  width: 50%;
}
</style>
