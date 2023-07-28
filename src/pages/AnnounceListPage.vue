<template>
  <div class="content" v-if="Halls">
    <div class="eventsarea">
      <div class="p_title">
        <div>Афиши</div>
        <div class="selectors">
          <q-btn v-if="editMode"  label="Добавить"
                 @click="addAnnounce"
          ></q-btn>
          <q-select v-model="evYear" :options="years" emit-value></q-select>
          <q-select v-model="moSort" :options="options"></q-select>
        </div>
      </div>
      <q-linear-progress v-if="progress" indeterminate color="secondary"/>
      <div class="gridarea">
        <AnnounceList v-model:evYear="evYear" :sort="moSort.value"></AnnounceList>
      </div>
    </div>
  </div>
</template>

<script setup>
import {inject, ref} from 'vue'
import AnnounceList from 'components/announses/AnnounceList.vue'
import { useQuasar, useMeta } from 'quasar'
import { api } from 'boot/axios'
import { useRoute, useRouter } from 'vue-router'
import {notifyError, notifyOK} from "src/myFuncts";

const metaData = {
  title: 'Анонсы'
}
useMeta(metaData)
const apiUrl = String(process.env.API)
const q = useQuasar()
const lvl = inject('lvl')
const route = useRoute()
const router = useRouter()
const editMode = inject('editMode')


const progress = inject('progress')


const Halls = inject('Halls')

const moSort = ref({
  label: 'Сначала новые',
  value: 0
})

const options = ref([
  {
    label: 'Сначала новые',
    value: 0
  },
  {
    label: 'Сначала старые',
    value: 1
  }
])

const years = [2023, 2022, 2021, 2020, 2019, 2018]
const evYear = ref(new Date().getFullYear())

function addAnnounce () {
      api.post(apiUrl + 'api/announce/add.php', {
        params: {
        }
      })
        .then((response) => {
          if(!!!response?.data?.result){
            throw new Error();
          }
          q.notify(notifyOK(response?.data?.result ?? null))
          router.push({ path: '/announce/' + response.data.data.id })
        })
        .catch((error) => {
          q.notify(notifyError(error))
        })
    }

</script>

<style scoped>
.gridarea {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  grid-gap: 1vw;
}

.eventsarea {
  padding: 1em;
  /* width: 100%; */
  max-width: 1200px;
  overflow-y: hidden;
  margin: 0 auto;
  display: block;
}

.selectors {
  min-width: 50%;
  display: flex;
  justify-content: flex-end;
}
.selectors>* {
  margin: 0 1em;
}
</style>
