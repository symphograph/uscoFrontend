<script setup>
import {computed, inject, provide, ref} from "vue";
import PriceInputs from "components/hall/PriceInputs.vue";
import StructureInputs from "components/hall/StructureInputs.vue";
import ModeSelect from "components/hall/ModeSelect.vue";
import {useQuasar} from "quasar";
import AnnounceSelect from "components/hall/AnnounceSelect.vue";

const q = useQuasar()

const HallPlan = inject('HallPlan')

const emit = defineEmits(['onSelectHall', 'onSelectPrice', 'onSelectAnnounce'])


const selectedMode = inject('selectedMode')



const colors = inject('colors')



function onSelectMode (mode) {
  if(mode.price !== null){
    selectedMode.value = mode
  }

}

function onSelectAnnounce() {
emit('onSelectAnnounce')
}

function onSelectHall (hallId) {
  emit('onSelectHall', hallId)
}
</script>

<template>
  <div class="menuArea">
    <div class="menuBlock">
      <div class="blockRow">
      <AnnounceSelect @onSelectAnnounce="onSelectAnnounce()"></AnnounceSelect>
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
    </div>
    <template v-if="selectedMode === 'Prices'">
      <PriceInputs></PriceInputs>
    </template>
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
