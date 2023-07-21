<template>
  <div class="content">
        <div class="menuRow">
          <div class="prices">
            <q-input label="Цена 1" v-model="plan.prices.Price_1" type="number"></q-input>
            <q-input v-model="plan.prices.Price_2" type="number"></q-input>
            <q-input v-model="plan.prices.Price_3" type="number"></q-input>
            <q-input v-model="plan.prices.Price_4" type="number"></q-input>
            <q-input v-model="plan.prices.Price_5" type="number"></q-input>
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
          <q-input label="Количество рядов" filled v-model="plan.cntRows" type="number" class="inputNumber"></q-input>
          <q-input label="Количество ячеек" filled v-model="plan.cntCols" type="number" class="inputNumber"></q-input>
          <q-btn label="Перестроить" @click="initDefaultPlan" class="defbtn"></q-btn>
        </div>


      <div v-if="true" style="overflow: auto; ; margin: 1em auto">
        <q-card style="width: max-content; padding: 2em; margin: 0 auto" dark>
          <q-card-section>
            <table style="width: max-content">
              <tbody style="margin: auto">
              <template v-for="(row,idx) in plan.seats" :key="'row_' + idx">
                <tr>
                  <td>{{ idx + 1 }}</td>
                  <td v-for="(seat, col) in row" :key="'col'+col">
                    <HallBuilderCell :seat="seat"></HallBuilderCell>

                    <q-btn
                      v-if="false"
                      size="xs"
                      :unelevated="!seat.exist"
                      padding="sm"
                      :class="'cell' + (seat.exist ? ' ' +  seat.pricing : '')"
                      @click="editCell(seat)">
                    </q-btn>
                  </td>
                  <td>{{ idx + 1 }}</td>
                </tr>
              </template>
              </tbody>
            </table>
          </q-card-section>
          <q-card-actions>
            <q-btn label="Сохранить" @click="savePlan"></q-btn>
          </q-card-actions>

        </q-card>
        </div>
  </div>

</template>

<script setup>
import {computed, onMounted, provide, ref} from "vue";
import {api} from "boot/axios";
import {notifyError, notifyOK} from "src/myFuncts";
import {useQuasar} from "quasar";
import HallBuilderCell from "components/tickets/HallBuilderCell.vue";


const apiUrl = String(process.env.API)
const q = useQuasar()

const plan = ref({
  announceId: 137,
  cntRows: 19,
  cntCols: 35,
  seats: [],
  prices: {
    Invite: 0,
    Price_1: 200,
    Price_2: 300,
    Price_3: 500,
    Price_4: 800,
    Price_5: 1000
  }
})

const priceList = []

const modes = [
  {value: 'Existing', label: 'Место вкл/вкл'},
  {value: 'Invite', label: 'По пригласительным'},
  {value: 'Price_1', label: 'Цена 1'},
  {value: 'Price_2', label: 'Цена 2'},
  {value: 'Price_3', label: 'Цена 3'},
  {value: 'Price_4', label: 'Цена 4'},
  {value: 'Price_5', label: 'Цена 5'},
]

const selectedMode = ref('Existing')
provide('selectedMode', selectedMode)

const announceId = ref(0)


function test() {
  console.log(seats.value)
}

function initDefaultPlan() {
  plan.value.seats = []
  let rows = []
  let cols = []
  let id = 0
  let seat = {}
  for (let row = 0; row < plan.value.cntRows; row++) {
    for (let col = 0; col < plan.value.cntCols; col++) {
      id++
      seat = {
        row: row + 1,
        col: col + 1,
        exist: true,
        pricing: 'Invite'
      }
      cols.push(seat)
    }
    rows.push(cols)
    cols = []
  }

  plan.value.seats = rows
}

function savePlan() {
  api.post(apiUrl + 'api/set/tickets/plan.php', {
    params: {
      plan: plan.value
    }
  })
    .then((response) => {
      q.notify(notifyOK(response?.data?.result ?? ''))
    })
    .catch((error) => {
      q.notify(notifyError(error))
    })
}

onMounted(() => {
  initDefaultPlan()
})
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

.colorInvite1 {
  color: $invite;
}

.colorPrice_1 {
  color: $price_1;
}

.colorPrice_2 {
  color: $price_2;
}

.colorPrice_3 {
  color: $price_3;
}

.colorPrice_4 {
  color: $price_4;
}

.colorPrice_5 {
  color: $price_5;
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
