<script setup>
import {inject, provide, ref} from 'vue'
import AnnounceList from 'components/announses/AnnounceList.vue'
import {useQuasar, useMeta} from 'quasar'
import {api} from 'boot/axios'
import {useRoute, useRouter} from 'vue-router'
import {getMeta, notifyError, notifyOK} from "src/js/myFuncts";
import SelectSort from "components/announses/SelectSort.vue";
import PageShell from "components/main/PageShell.vue";

const pageTitle = 'Анонсы'
const metaData = getMeta(pageTitle)
useMeta(metaData)

const apiUrl = String(process.env.API)
const q = useQuasar()
const route = useRoute()
const router = useRouter()
const editMode = inject('editMode')

const compactCard = ref(false)
provide('compactCard', compactCard)

const progress = inject('progress')

const sortType = ref('dateDesc')
provide('sortType', sortType)

const evYear = ref(new Date().getFullYear())
provide('evYear', evYear)

const announceList = ref([])
provide('announceList', announceList)


const scrollWatch = inject('scrollWatch');
const refScrollArea = ref()

function toggleCompactCard() {
  scrollWatch.value = false;
  compactCard.value = !compactCard.value;
  setTimeout(() => {
    scrollWatch.value = true;
  }, 500);
}



function Years() {
  let arr = []
  for (let year = 2018; year <= new Date().getFullYear(); year++) {
    arr.push(year)
  }
  return arr.reverse()
}

function addAnnounce() {
  api.post(apiUrl + 'api/event/announce.php', {
    params: {
      method: 'add'
    }
  })
    .then((response) => {
      if (!!!response?.data?.result) {
        throw new Error();
      }
      q.notify(notifyOK(response?.data?.result ?? null))
      router.push({path: '/announce/' + response.data.data.id})
    })
    .catch((error) => {
      q.notify(notifyError(error))
    })
}

</script>

<template>
  <PageShell :pageTitle="pageTitle">
    <template v-slot:ToolPanel>
      <q-btn
        v-if="editMode"
        label="Добавить"
        stretch flat
        @click="addAnnounce"
      ></q-btn>
      <q-select v-model="evYear" :options="Years()" emit-value borderless></q-select>
      <SelectSort @onSelect="() => {refScrollArea.setScrollPosition('vertical', 0, 300)}"></SelectSort>
      <q-btn :icon="compactCard ? 'unfold_less' : 'unfold_more'"
             flat stretch
             @click="toggleCompactCard">
        <q-tooltip>{{ compactCard ? 'Подробно' : 'Кратко' }}</q-tooltip>
      </q-btn>
    </template>
    <template v-slot:PageContent>
      <div class="centralCol">
        <div class="gridArea">
          <AnnounceList :evYear="evYear" :method="'listByYear'" :sort="sortType"></AnnounceList>
        </div>
      </div>
    </template>
  </PageShell>
</template>

<style scoped>
.gridArea {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  grid-gap: 1vw;
}
</style>
