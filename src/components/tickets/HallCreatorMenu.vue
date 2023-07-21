<script setup>
import {inject, provide, ref} from "vue";

const plan = inject('plan')
const Halls = inject('Halls')

const selectedMode = inject('selectedMode')

const modes = ref([
  {value: 'Existing', label: 'Место вкл/вкл'},
  {value: 'Invite', label: 'По пригласительным'},
  {value: 'Price_1', label: 'Цена 1'},
  {value: 'Price_2', label: 'Цена 2'},
  {value: 'Price_3', label: 'Цена 3'},
  {value: 'Price_4', label: 'Цена 4'},
  {value: 'Price_5', label: 'Цена 5'},
])
provide(modes, 'modes')

const initDefaultPlan = inject('initDefaultPlan')
</script>

<template>
  <div class="menuRow">
    <div>
      <div class="prices">
        <q-input label="Цена 1" class="priceCell" v-model="plan.prices.Price_1" type="number"></q-input>
        <q-input label="Цена 2" class="priceCell" v-model="plan.prices.Price_2" type="number"></q-input>
        <q-input label="Цена 3" class="priceCell" v-model="plan.prices.Price_3" type="number"></q-input>
        <q-input label="Цена 4" class="priceCell" v-model="plan.prices.Price_4" type="number"></q-input>
        <q-input label="Цена 5" class="priceCell" v-model="plan.prices.Price_5" type="number"></q-input>
      </div>
      <div>
        <q-select :options="Halls"
                  emit-value
                  map-options
                  option-value="id"
                  option-label="name"
        ></q-select>
      </div>
    </div>

    <div>
      <div style="display: flex">
        <q-input label="Количество рядов" filled v-model="plan.cntRows" type="number" class="inputNumber"></q-input>
        <q-input label="Количество ячеек" filled v-model="plan.cntCols" type="number" class="inputNumber"></q-input>
      </div>
      <q-select v-model="selectedMode"
                filled
                style="min-width: 18em"
                :options="modes"
                label="Что будем редактировать?"
                emit-value
                map-options>
        <template v-slot:prepend>
          <q-icon name="edit" />
        </template>
        <template v-slot:option="scope">
          <q-item v-bind="scope.itemProps">
            <q-item-section>
              <q-item-label :class="'color' + scope.opt.value">
                {{scope.opt.label}}
              </q-item-label>
            </q-item-section>

          </q-item>
        </template>
      </q-select>

    </div>


    <q-btn label="Перестроить" @click="initDefaultPlan" class="defbtn"></q-btn>
  </div>
</template>

<style scoped>
.prices {
  display: flex;
}

.priceCell {
  max-width: 5em;
}

.inputNumber {
  max-width: 10em;
}

.menuRow {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: auto;
}
</style>
