<script setup>
import {computed, inject, provide, ref} from "vue";
import PriceInputs from "components/hall/PriceInputs.vue";
import StructureInputs from "components/hall/StructureInputs.vue";
import ModeSelect from "components/hall/ModeSelect.vue";
import {useQuasar} from "quasar";

const q = useQuasar()

const HallPlan = inject('HallPlan')
const Halls = inject('Halls')
const emit = defineEmits(['onSelectHall', 'onSelectPrice'])


const selectedMode = inject('selectedMode')

const announceList = inject('announceList')

const colors = inject('colors')

function sketchUrl(Sketch) {
  let size = 480
  if (q.platform.is.mobile) {
    size = 1080
  }
  return String(process.env.API) +
    Sketch.folder +
    '/' + size + '/' +
    Sketch.fileName +
    '?ver=' + Sketch.md5
}

function onSelectMode (mode) {
  if(mode.price !== null){
    selectedMode.value = mode
  }

}

function onSelectAnnounce() {

}

function onSelectHall (hallId) {
  emit('onSelectHall', hallId)
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
                  @update:model-value="onSelectHall(HallPlan.id)"
        ></q-select>
      </div>
      <div class="blockRow">
      <q-select v-if="announceList.length"
                :options="announceList"
                v-model="announceList.id"
                color="amber"
                outlined
                style="width: 100%"
                emit-value
                map-options
                option-value="id"
                option-label="progName"
                @update:model-value="onSelectAnnounce()"
      >
        <template v-slot:option="scope">
          <q-item v-bind="scope.itemProps">
            <q-item-section avatar>
              <img style="width: 50px" :src="sketchUrl(scope.opt.Sketch)"/>
            </q-item-section>
            <q-item-section >
              <q-item-label>
                {{ scope.opt.progName }}
              </q-item-label>
              <q-item-label caption>
                {{ scope.opt.datetime }}
              </q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-toggle v-model="scope.opt.isShow" color="green"></q-toggle>
            </q-item-section>
          </q-item>
          <q-separator></q-separator>
        </template>

      </q-select>
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
