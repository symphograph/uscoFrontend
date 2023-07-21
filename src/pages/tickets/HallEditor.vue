<script setup>
import {computed, onMounted, provide, ref} from "vue";
import {api} from "boot/axios";
import {notifyError, notifyOK} from "src/myFuncts";
import {useQuasar} from "quasar";
import HallBuilderCell from "components/tickets/HallBuilderCell.vue";
import HallCreatorMenu from "components/tickets/HallCreatorMenu.vue";


const apiUrl = String(process.env.API)
const q = useQuasar()

const plan = ref({
  announceId: 137,
  cntRows: 19,
  cntCols: 27,
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
provide('plan', plan)
const priceList = []



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
provide('initDefaultPlan', initDefaultPlan)

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

<template>
  <div class="content">
    <HallCreatorMenu></HallCreatorMenu>

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

<style lang="scss">


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


</style>
