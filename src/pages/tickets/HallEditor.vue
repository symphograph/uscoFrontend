<script setup>
import {computed, nextTick, onBeforeMount, onMounted, provide, ref} from "vue";
import {api} from "boot/axios";
import {notifyError, notifyOK} from "src/js/myFuncts";
import {useQuasar} from "quasar";
import HallCreatorMenu from "components/hall/HallCreatorMenu.vue";
import HallTable from "components/hall/HallTable.vue";


const apiUrl = String(process.env.API)
const q = useQuasar()

const selectedMode = ref('Prices')
provide('selectedMode', selectedMode)

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

const selectedPrice = ref({
  priceType: 'Invite',
  price: null,
  label: 'Пригласительные'
},)
provide('selectedPrice', selectedPrice)

const selectedAnnounce = ref({})
provide('selectedAnnounce', selectedAnnounce)

const addCountable = ref(false)
provide('addCountable', addCountable)

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

const progress = ref(false)
provide('progress', progress)

const announceList = ref([])
provide('announceList', announceList)

const renderHallTable = ref(false);

function savePlan() {
  //HallPlan.value.pricing = Pricing.value
  if (selectedMode.value === 'Structure') {
    resetTickets()
  }
  api.post(apiUrl + 'api/tickets/hallplan.php', {
    params: {
      method: 'put',
      plan: HallPlan.value
    }
  })
    .then((response) => {
      if (!response?.data?.result) {
        throw new Error()
      }

      q.notify(notifyOK(response?.data?.result ?? ''))
    })
    .catch((error) => {
      q.notify(notifyError(error))
    })
}

async function initCells() {
  renderHallTable.value = false;
  HallPlan.value.cells = []
  let cells = []
  let cols = []
  let id = 0
  let cell = {}
  for (let row = 1; row <= HallPlan.value.structure.cntRows; row++) {
    for (let col = 1; col <= HallPlan.value.structure.cntCols; col++) {
      id++
      cell = {
        id: id,
        row: row,
        col: col,
        exist: true,
        forceCount: false
      }
      cols.push(cell)
    }
    cells.push(cols)
    cols = []
  }

  HallPlan.value.cells = cells
  await resetTickets()
  await nextTick()
  renderHallTable.value = true
}

provide('initCells', initCells)

const seatNum = ref(0);
const seatRow = ref(0);

function newTicketByCell(cell) {
  if (!cell.exist && !cell.forceCount) {
    return
  }

  if (cell.forceCount) {
    seatNum.value++
    return
  }

  if (!cell.exist) {
    return
  }

  seatNum.value++
  let ticket = {
    cellId: cell.id,
    offline: false,
    seatRow: seatRow.value,
    seatNum: seatNum.value,
    priceType: 'Invite'
  }
  HallPlan.value.tickets.push(ticket)
}

function ticketsOfRow(row) {
  seatNum.value = 0;
  if (isEmptyRow(row)) {
    HallPlan.value.structure.rowNums.push(false)
    return
  }
  seatRow.value++
  HallPlan.value.structure.rowNums.push(seatRow.value)
  row.forEach(cell => newTicketByCell(cell))
}

async function resetTickets() {

  renderHallTable.value = false
  seatRow.value = 0
  HallPlan.value.tickets = []
  HallPlan.value.structure.rowNums = []
  HallPlan.value.cells.forEach(row => ticketsOfRow(row));
  await nextTick()
  renderHallTable.value = true
  console.log('cntOfTickets:', HallPlan.value.tickets.length)

}

function isEmptyRow(row) {
  let rowCopy = [...row]
  return !rowCopy.filter(el => el.exist).length
}

function cellClicked(cell) {
  console.log(cell)
}

function onSelectHall(hallId) {
  loadAnnounces(hallId)
  loadHallPlan()
}

function loadHallPlan() {
  api.post(apiUrl + 'api/tickets/hallplan.php', {
    params: {
      method: 'get',
      id: selectedAnnounce.value.id
    }
  })
    .then(async (response) => {
      if (response.status === 204) {
        HallPlan.value.id = selectedAnnounce.value.id
        await initCells()
        return
      }
      if (!response?.data?.data?.HallPlan) {
        throw new Error()
      }
      renderHallTable.value = false;
      HallPlan.value = response?.data?.data?.HallPlan
      await nextTick()
      renderHallTable.value = true;
    })
    .catch((error) => {
      HallPlan.value = {}
      q.notify(notifyError(error))
    })
}

function loadAnnounces() {
  progress.value = true
  api.post(apiUrl + 'api/event/announce.php', {
    params: {
      method: 'futureList'
    }
  })
    .then((response) => {
      if (!response?.data?.result) {
        throw new Error()
      }
      announceList.value = response?.data?.data ?? []

      selectedAnnounce.value = announceList.value[0]
      loadHallPlan()
    })
    .catch((error) => {
      q.notify(notifyError(error))
      announceList.value = []
    })
    .finally(() => {
      progress.value = false
    })
}

function reset() {
  switch (selectedMode.value) {

    case 'Prices': {
      console.log('resetTickets')
      resetTickets()
      break;
    }
    default : {
      console.log(selectedMode.value)
    }
  }
}

function onSelectAnnounce() {
  loadHallPlan()
}

onBeforeMount(() => {

})

onMounted(() => {
  //loadHallPlan()
  loadAnnounces()
})
</script>

<template>
  <div class="content">
    <HallCreatorMenu @onSelectAnnounce="loadHallPlan()"></HallCreatorMenu>

    <div style="overflow: auto; margin: 1em auto; min-width: 100vw;">
      <q-card style="width: max-content; min-width: 80vw; padding: 2em; margin: 0 auto;" dark>
        <HallTable v-if="renderHallTable"></HallTable>
        <q-card-actions style="display: flex; justify-content: end">
          <q-btn v-if="selectedMode === 'Prices'" label="Сбросить" @click="reset()"></q-btn>
          <q-btn label="Сохранить" @click="savePlan"></q-btn>
        </q-card-actions>
      </q-card>
    </div>
  </div>

</template>

<style lang="scss">


</style>
