<script setup>
import {inject, provide, ref} from 'vue'
import AnnounceList from 'components/announses/AnnounceList.vue'
import {useQuasar, useMeta} from 'quasar'
import {api} from 'boot/axios'
import {useRoute, useRouter} from 'vue-router'
import {getMeta, notifyError, notifyOK} from "src/myFuncts";
import SelectSort from "components/announses/SelectSort.vue";


const metaData = getMeta('Анонсы')
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
  <div class="pageToolbar" :class="$q.platform.is.desktop ? 'no-wrap' : 'wrap'">
    <q-toolbar>
      <q-toolbar-title>
        {{ metaData.title }}
      </q-toolbar-title>
    </q-toolbar>
    <q-toolbar>
      <q-space></q-space>
      <div class="selectors">
        <q-btn
          v-if="editMode"
          label="Добавить"
          @click="addAnnounce"
        ></q-btn>
        <q-select v-model="evYear" :options="Years()" emit-value borderless></q-select>
        <SelectSort></SelectSort>
        <q-btn :icon="compactCard ? 'unfold_less' : 'unfold_more'"
               flat
               @click="compactCard = !compactCard">
          <q-tooltip>{{ compactCard ? 'Подробно' : 'Кратко' }}</q-tooltip>
        </q-btn>
      </div>
    </q-toolbar>
  </div>

  <q-linear-progress v-if="progress" indeterminate color="secondary"/>
  <div class="gridArea">
    <AnnounceList :evYear="evYear" :method="'listByYear'" :sort="sortType"></AnnounceList>
  </div>

</template>

<style scoped>
.gridArea {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  grid-gap: 1vw;
}
</style>
