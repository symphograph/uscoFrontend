<script setup>
import {computed, inject, nextTick, onMounted, provide, ref} from "vue";
import {api} from "boot/axios";
import { notifyError} from "src/js/myFuncts";
import {useMeta, useQuasar} from "quasar";
import HallUserCell from "components/hall/cells/HallUserCell.vue";
import {useRoute} from "vue-router";
import TicketCard from "components/hall/TicketCard.vue";
import { scroll } from 'quasar'
import DialogLogin from "components/hall/DialogLogin.vue";
import { myUser } from 'src/js/myAuth';
import {myAnnounce} from "src/js/announce";
const { getHorizontalScrollPosition, setHorizontalScrollPosition } = scroll

const apiUrl = String(process.env.API)
const q = useQuasar()
const route = useRoute()

const tableAreaRef = ref(null)

const Pricing = ref([
  {
    priceType: 'Invite',
    price: null,
    label: 'Пригласительные'
  },
  {
    priceType: 'Price_1',
    price: 200,
    label: 'Цена 1'
  },
  {
    priceType: 'Price_2',
    price: 300,
    label: 'Цена 2'
  },
  {
    priceType: 'Price_3',
    price: 500,
    label: 'Цена 3'
  },
  {
    priceType: 'Price_4',
    price: 800,
    label: 'Цена 4'
  },
  {
    priceType: 'Price_5',
    price: 1000,
    label: 'Цена 5'
  }
])
provide('defaultPricing', Pricing)

const progress = inject('progress')

const userId = myUser.self.id
const authType = myUser.self.authType

const Announce = ref({})
provide('Announce', Announce)

const HallPlan = ref({
  id: 1,
  structure: {
    cntRows: 10,
    cntCols: 12,
    rowNums: [],
  },
  pricing: Pricing.value,
  cells: [],
  tickets: []
})
provide('HallPlan', HallPlan)

const colors = {
  Offline: ['white', '#bb6af3'],
  Existing: ['white', '#bb6af3'],
  Invite: ['purple', '#bb6af3'],
  Price_1: ['blue', 'blue'],
  Price_2: ['green', 'green'],
  Price_3: ['yellow', 'yellow'],
  Price_4: ["orange", 'orange'],
  Price_5: ['red', '#ad1010']
}
provide('colors', colors)

const renderHallTable = ref(false);

const userTickets = computed(() => {
  let tickets = [...HallPlan.value.tickets]
  return tickets.filter(el => el.userId === userId)
})

function findPrice(ticket) {
  return HallPlan.value.pricing.find(el => el.priceType === ticket.priceType)?.price ?? 0
}


function findTicket(cellId) {
  return HallPlan.value.tickets.find(el => el.cellId === cellId)
}

function diaLogin () {
  q.dialog({
    component: DialogLogin,
    componentProps: {
      text: 'Войдите, чтобы сохранить',
      okBtnText: 'В настройки',
      cancelBtnText: 'Не сейчас',
      AccessToken: myUser.self.AccessToken,
      SessionToken: myUser.self.SessionToken
      // ...more..props...
    },
    cancel: true,
    persistent: true
  }).onOk(() => {
    // console.log('>>>> OK')
  }).onOk(() => {
    router.push('/account')
    // console.log('>>>> second OK catcher')
  }).onCancel(() => {
    //emit('Cancel')
    // console.log('>>>> Cancel')
  }).onDismiss(() => {
    //emit('Dismiss')
    // console.log('I am triggered on both OK and Cancel')
  })
}

function loadHallPlan() {
  api.post(apiUrl + 'epoint/tickets/hallplan.php', {
    params: {
      method: 'get',
      id: route.params.id
    }
  })
    .then(async (response) => {
      if (!response?.data?.data?.HallPlan) {
        throw new Error()
      }
      renderHallTable.value = false;
      HallPlan.value = response?.data?.data?.HallPlan
      await nextTick()
      renderHallTable.value = true;
      console.log('HallPlan loaded')
    })
    .catch((error) => {
      HallPlan.value = {}
      q.notify(notifyError(error))
    })
    .finally(() => {
      progress.value = false
      console.log('progress off')
      nextTick(() => {
        let el = document.getElementById('tableArea')
        el.scrollTo(el.clientWidth/2, 0)
        console.log(el.scrollWidth)
        upScale()
      })
    })
}

async function loadAnnounce() {
  progress.value = true
  Announce.value = await myAnnounce.get(q, route.params.id)
  progress.value = false
}

function reserveTicket(ticketId) {
  HallPlan.value.tickets.find(el => el.id === ticketId).userId = userId
  api.post(apiUrl + 'epoint/tickets/ticket.php', {
    params: {
      method: 'reserve',
      id: ticketId
    }
  })
    .then((response) => {
      if (!response?.data?.result) {
        throw new Error()
      }
      // q.notify(notifyOK(response?.data?.result))
    })
    .catch((error) => {
      HallPlan.value.tickets.find(el => el.id === ticketId).userId = null
      q.notify(notifyError(error))
      if(error.response.status === 403){
        HallPlan.value.tickets.find(el => el.id === ticketId).offline = true
      }
    })
}

function returnTicket(ticketId) {
  HallPlan.value.tickets.find(el => el.id === ticketId).userId = null
  api.post(apiUrl + 'epoint/tickets/ticket.php', {
    params: {
      method: 'returnTicket',
      id: ticketId
    }
  })
    .then((response) => {
      if (!response?.data?.result) {
        throw new Error()
      }
      // q.notify(notifyOK(response?.data?.result))
    })
    .catch((error) => {
      HallPlan.value.tickets.find(el => el.id === ticketId).userId = userId
      q.notify(notifyError(error))
    })
}

const elScale = ref(50)
function upScale () {
  setTimeout(()=> {
    elScale.value = 100
  }, 1000)
}

onMounted(() => {
  loadAnnounce()
  console.log(authType)
})

const style = ref({width: '100%', height: '100%', margin: 'auto', overflow: 'scroll'})

const metaData = {
    title: 'Билеты'
}
useMeta(metaData)

</script>

<template>
  <div class="content">
    <div>rer</div>
    <div>rer</div>
    <div>rer</div>
    <q-card class="card">
      <q-linear-progress v-if="progress" indeterminate color="secondary"/>
      <div class="tableArea" id="tableArea" ref="tableAreaRef" v-if="!progress">
        <div :style="{transform: `scale(` + elScale + `%)`}" >
          <div>
            <div class="scene">Сцена</div>
            <table>
              <tbody>
              <template v-for="(row,idx) in HallPlan.cells" :key="'row_' + idx">
                <tr>
                  <td>
                    <div class="rowNumber">{{ HallPlan.structure.rowNums[idx] || '' }}</div>
                  </td>
                  <td v-for="(cell, col) in row" :key="idx + '_' + col">
                    <HallUserCell
                      v-model:cell="HallPlan.cells[cell.row-1][cell.col-1]"
                      :ticket="findTicket(cell.id)"
                      :key="cell.id"
                      @reserve="(ticketId) => reserveTicket(ticketId)"
                      @returnTicket="(ticketId) => returnTicket(ticketId)"
                    ></HallUserCell>
                  </td>
                  <td>
                    <div class="rowNumber">{{ HallPlan.structure.rowNums[idx] || '' }}</div>
                  </td>
                </tr>
              </template>
              </tbody>
            </table>
          </div>

        </div>
      </div>
      <q-card-actions style="display: flex; justify-content: end; padding: 1em">
        <q-btn label="сохранить"
               outline
               color="green"
               @click="diaLogin"
        ></q-btn>
      </q-card-actions>
    </q-card>
    <template v-if="HallPlan.tickets.length">
      <div class="ticketList">
        <template v-for="ticket in userTickets" :key="'tic_' + ticket.id">
          <TicketCard :ticket="ticket"
                      :price="findPrice(ticket)"
                      @reserve="(ticketId) => reserveTicket(ticketId)"
                      @returnTicket="(ticketId) => returnTicket(ticketId)"
          ></TicketCard>
        </template>
      </div>
    </template>
  </div>
</template>

<style scoped>
.scene {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;
  border: 1px solid #f5c672;
}

.card {
  width: 100%;
  max-width: 1200px;
  margin: auto;
}

.tableArea {
  width: 100%;
  height: 100%;
  padding: 1em;
  margin: 1em auto;
  overflow: auto;

}
.tableArea>div{
  margin: auto;
  width: max-content;
  height: max-content;
  /*display: flex;
  justify-content: center;
  align-items: center;*/
  transition-duration: 1s;
}
.ticketList {
  transition-duration: 1s;
}
</style>
