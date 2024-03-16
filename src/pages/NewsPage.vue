<script setup>
import {computed, inject, nextTick, ref} from 'vue'
import NewsList from 'components/news/NewsList.vue'
import {useMeta, useQuasar} from 'quasar'
import {api} from 'boot/axios'
import {useRoute, useRouter} from 'vue-router'
import {getMeta, notifyError} from "src/myFuncts";

const apiUrl = String(process.env.API)
const route = useRoute()
const router = useRouter()
const q = useQuasar()
const progress = inject('progress')
const editMode = inject('editMode')

const evYear = ref(new Date().getFullYear())
const listRef = ref()

function onSetYear() {
  console.log(evYear)
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

  api.post(apiUrl + 'api/news/entry.php', {
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
  <div class="pageToolbar" :class="$q.platform.is.desktop ? 'no-wrap' : 'wrap'">
    <q-toolbar>
      <q-toolbar-title>
        {{ title }}
      </q-toolbar-title>
    </q-toolbar>
    <q-toolbar>
      <q-space></q-space>
      <div class="selectors">
        <q-btn
          v-if="editMode"
          label="Добавить"
          @click="addEntry"
        ></q-btn>
        <q-select v-model="evYear"
                  :options="Years()"
                  emit-value
                  borderless
                  @update:model-value="onSetYear()">
        </q-select>
      </div>
    </q-toolbar>
  </div>
  <q-linear-progress v-if="progress" indeterminate color="secondary"/>

  <NewsList :year="evYear" :limit="100" :category="category" ref="listRef"></NewsList>
</template>

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
