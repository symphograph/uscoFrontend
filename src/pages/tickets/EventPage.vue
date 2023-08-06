<script setup>
import {computed, inject, nextTick, onMounted, provide, ref} from "vue";
import {api} from "boot/axios";
import {notifyError, notifyOK, userIdByJWT} from "src/myFuncts";
import {useMeta, useQuasar} from "quasar";
import HallUserCell from "components/hall/cells/HallUserCell.vue";
import {useRoute} from "vue-router";
import TicketCard from "components/hall/TicketCard.vue";

const apiUrl = String(process.env.API)
const q = useQuasar()
const route = useRoute()

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

const AccessToken = inject('AccessToken')
const userId = userIdByJWT(AccessToken.value) * 1

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

function loadHallPlan() {
  api.post(apiUrl + 'api/tickets/hallplan.php', {
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
    })
}

function loadAnnounce() {
  progress.value = true
  console.log('progress on')
  api.post(apiUrl + 'api/event/announce.php', {
    params: {
      method: 'get',
      id: route.params.id
    }
  })
    .then((response) => {
      if (!response?.data?.result) {
        console.log('announce err:', response.data)
        throw new Error()
      }
      Announce.value = response?.data?.data ?? {}
      console.log('Announce loaded')
      loadHallPlan()
    })
    .catch((error) => {
      q.notify(notifyError(error))
    })
    .finally(() => {

    })
}

function reserveTicket(ticketId) {
  HallPlan.value.tickets.find(el => el.id === ticketId).userId = userId
  api.post(apiUrl + 'api/tickets/ticket.php', {
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
    })
}

function returnTicket(ticketId) {
  HallPlan.value.tickets.find(el => el.id === ticketId).userId = null
  api.post(apiUrl + 'api/tickets/ticket.php', {
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

onMounted(() => {
  loadAnnounce()
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
      <div class="tableArea">
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
    </q-card>
    <template v-if="HallPlan.tickets.length">
      <div class="ticketList">
        <template v-for="ticket in userTickets" :key="'tic_' + ticket.id">
          <TicketCard :ticket="ticket"
                      :price="findPrice(ticket)"
                      @reserve="(ticketId) => reserveTicket(ticketId)"
          ></TicketCard>
        </template>
      </div>
    </template>
  </div>
</template>

<style scoped>


.card {
  width: 100%;
  max-width: 1200px;
  margin: auto;
}

.tableArea {
  max-width: max-content;
  height: 100%;
  padding: 1em;
  margin: auto;
  overflow: auto;
}

.ticketList {
  transition-duration: 600ms;
}
</style>
