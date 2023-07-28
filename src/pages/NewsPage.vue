<template>
  <div class="eventsarea">
    <div class="p_title">
      <div>{{ title }}</div>
      <div class="selectors">
        <q-btn v-if="editMode" label="Добавить"
               @click="addEntry"
        ></q-btn>
        <q-select v-model="evYear" :options="years" emit-value></q-select>
        <!--        <NewsSelect></NewsSelect>-->
      </div>
    </div>
    <br>
    <NewsList :query="query" :year="evYear" :limit="100" :category="category"></NewsList>

  </div>
</template>

<script setup>
import { computed, inject, ref } from 'vue'
import NewsList from 'components/news/NewsList.vue'
import { useMeta, useQuasar } from 'quasar'
import { api } from 'boot/axios'
import { useRoute, useRouter } from 'vue-router'
import {notifyError} from "src/myFuncts";

const apiUrl = String(process.env.API)
const route = useRoute()
const router = useRouter()
const q = useQuasar()

const editMode = inject('editMode')
const years = ref([2018, 2019, 2020, 2021, 2022, 2023])
const evYear = ref(new Date().getFullYear())
const limit = ref(100)

const titles = ref({
  all: 'Все новости',
  euterpe: 'Новости Эвтерпы',
  partners: 'Новости партнеров',
  usco: 'Новости оркестра'
})

function addEntry () {

  api.post(apiUrl + 'api/news/entry/add.php', {
    params: {

    }
  })
    .then((response) => {
      route.params.id = response.data.data.id
      router.push({ path: '/new/' + response.data.data.id })
    })
    .catch((error) => {
      q.notify(notifyError(error))
    })

}

const title = computed(() => {
  return titles[route.params.category]
})

const metaData = {
  title: 'Новости'
}
useMeta(metaData)

const category = ref(route.params.category)
/*
const category = computed(() => {
  return route.params.category
})
*/
const query = computed(()=>{
  return {
    year: evYear.value,
    category: category.value,
    limit: 100
  }
})

</script>

<style scoped>
.eventsarea {
  min-height: 100vh;
}

.selectors {
  /*margin: 0 -1em;*/
}

.selectors > * {
  margin: 0 1em;
}
</style>
