<script setup>
import {computed, inject, nextTick, provide, ref} from 'vue'
import NewsList from 'components/news/NewsList.vue'
import {useMeta, useQuasar} from 'quasar'
import {api} from 'boot/axios'
import {useRoute, useRouter} from 'vue-router'
import {getMeta, notifyError} from "src/js/myFuncts";
import PageShell from "components/main/PageShell.vue";

const apiUrl = String(process.env.API)
const route = useRoute()
const router = useRouter()
const q = useQuasar()
const progress = inject('progress')

const editModes = inject('editModes');
const editMode = editModes.entry;
provide('editMode', editMode)

const evYear = ref(new Date().getFullYear())
const listRef = ref()

function onSetYear() {
  nextTick(() => {
    listRef.value.loadData()
  })
}

const titles = ref({
  all: 'Все новости',
  euterpe: 'Новости Эвтерпы',
  other: 'Новости партнеров',
  usso: 'Новости оркестра'
})

function addEntry() {

  api.post(apiUrl + 'epoint/news/entry.php', {
    params: {
      method: 'add'
    }
  })
    .then((response) => {
      route.params.id = response.data.data.id
      router.push({path: '/new/' + response.data.data.id})
    })
    .catch((error) => {
      q.notify(notifyError(error))
    })

}

function Years() {
  let arr = []
  for (let year = 2018; year <= new Date().getFullYear(); year++) {
    arr.push(year)
  }
  return arr.reverse()
}

const title = computed(() => {
  return titles.value[route.params.category]
})

const metaData = getMeta(title.value)
useMeta(metaData)

const category = ref(route.params.category)

</script>

<template>
  <PageShell :page-title="title">
    <template v-slot:SideTools>
      <q-btn
        v-if="editMode"
        label="Добавить"
        stretch flat
        @click="addEntry"
      ></q-btn>
      <q-select v-model="evYear"
                :options="Years()"
                emit-value
                borderless
                @update:model-value="onSetYear()">
      </q-select>
    </template>
    <template v-slot:virtualScroll>
        <NewsList :year="evYear" :limit="100" :category="category" ref="listRef"></NewsList>
    </template>
  </PageShell>
</template>

<style scoped>

</style>
