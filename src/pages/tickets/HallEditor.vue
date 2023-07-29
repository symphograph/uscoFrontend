<script setup>
import {computed, nextTick, onBeforeMount, onMounted, provide, ref} from "vue";
import {api} from "boot/axios";
import {notifyError, notifyOK} from "src/myFuncts";
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

function savePlan() {
  //HallPlan.value.pricing = Pricing.value
  if(selectedMode.value === 'Structure'){
    resetTickets()
  }
  api.post(apiUrl + 'api/tickets/hallplan/set.php', {
    params: {
      plan: HallPlan.value,
      id: HallPlan.value.id
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

function newTicketByCell(cell) {
  if(!cell.exist && !cell.forceCount){
    return false
  }

  if(cell.forceCount) {
    seatNum.value++
  }

  if(!cell.exist){
    return false
  }

  seatNum.value++
  let ticket = {
    id: cell.id,
    offline: false,
    seatRow: seatRow.value,
    seatNum: seatNum.value,
    priceType: 'Invite'
  }
  HallPlan.value.tickets.push(ticket)
  //console.log(cell.exist)
}

const seatNum = ref(0);
const seatRow = ref(0);

const renderHallTable = ref(false);

function ticketsOfRow(row){
  seatNum.value = 0;
  if(isEmptyRow(row)) {
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
  //console.log(HallPlan.value.tickets)
  //console.log('cntOfTickets:',HallPlan.value.tickets.length)

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
  api.post(apiUrl + 'api/tickets/hallplan/get.php', {
    params: {
      id: HallPlan.value.id
    }
  })
    .then(async (response) => {
      if (!response?.data?.result) {
        throw new Error()
      }
      if (!response?.data?.data?.HallPlan) {
        initCells()
        return
      }
      renderHallTable.value = false;
      HallPlan.value = response?.data?.data?.HallPlan
      await nextTick()
      renderHallTable.value = true;
    })
    .catch((error) => {
      initCells()
      q.notify(notifyError(error))
    })
}

function loadAnnounces(hallId) {
  progress.value = true
  api.post(apiUrl + 'api/event/announce.php', {
    params: {
      hallId: hallId,
      method: 'listByHall'
    }
  })
    .then((response) => {
      announceList.value = response?.data?.data ?? []
    })
    .catch((error) => {
      q.notify(notifyError(error))
      announceList.value = []
    })
    .finally(() => {
      progress.value = false
    })
}

onBeforeMount(() => {

})

onMounted(() => {
  loadHallPlan()


})
</script>

<template>
  <div class="content">
    <HallCreatorMenu @onSelectHall="(hallId) => onSelectHall(hallId)"></HallCreatorMenu>

    <div style="overflow: auto; ; margin: 1em auto">
      <q-card style="width: max-content; padding: 2em; margin: 0 auto" dark>
        <HallTable v-if="renderHallTable"></HallTable>
        <q-card-actions style="display: flex; justify-content: end">
          <q-btn label="Сохранить" @click="savePlan"></q-btn>
          <q-btn v-if="selectedMode === 'Prices'" label="Сбросить" @click="resetTickets"></q-btn>
        </q-card-actions>
      </q-card>
    </div>
  </div>

</template>

<style lang="scss">



</style>
