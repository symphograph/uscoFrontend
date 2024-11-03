<script setup>
import {inject, provide, ref} from 'vue'
import AnnounceList from 'components/announсes/AnnounceList.vue'
import {useQuasar, useMeta} from 'quasar'
import {useRouter} from 'vue-router'
import {getMeta} from "src/js/myFuncts";
import SelectSort from "components/announсes/SelectSort.vue";
import PageShell from "components/main/PageShell.vue";
import {myAnnounce} from "src/js/entry";

const pageTitle = 'Анонсы'
const metaData = getMeta(pageTitle)
useMeta(metaData)

const q = useQuasar()

const router = useRouter()


const editModes = inject('editModes');
const editMode = editModes.announce;

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

async function addAnnounce() {
  progress.value = true
  const result = await myAnnounce.create(q)
  console.log(result)
  if (result?.id) {
    await router.push({path: '/announce/' + result.id})
  }
  progress.value = false
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
          <AnnounceList :year="evYear" :method="'listByYear'" :sort="sortType"></AnnounceList>
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
