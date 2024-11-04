<script setup lang="ts">
import {computed, inject, nextTick, provide, Ref, ref} from 'vue'
import NewsList from 'components/news/NewsList.vue'
import {useMeta, useQuasar} from 'quasar'
import {useRoute, useRouter} from 'vue-router'
import {getMeta} from "src/js/myFuncts";
import PageShell from "components/main/PageShell.vue";
import {Entry} from "src/js/entry";

const route = useRoute()
const router = useRouter()
const q = useQuasar()
const progress = inject('progress') as Ref<boolean>

const editModes = inject('editModes') as Record<string, any>;
const editMode = editModes.entry;
provide('editMode', editMode)

const evYear = ref(new Date().getFullYear())
const listRef = ref()

function onSetYear() {
  nextTick(() => {
    listRef.value.loadData()
  })
}



async function addEntry() {
  progress.value = true
  const result = await Entry.create(q)
  if (result) {
    route.params.id = result.id
    router.push({path: '/new/' + result.id})
  }
}

function Years() {
  let arr = []
  for (let year = 2018; year <= new Date().getFullYear(); year++) {
    arr.push(year)
  }
  return arr.reverse()
}

const titles = ref<Record<string, string>>({
  all: 'Все новости',
  euterpe: 'Новости Эвтерпы',
  other: 'Новости партнеров',
  usso: 'Новости оркестра'
})

const title = computed(() => {
  const category = route.params.category as string;
  return titles.value[category] || 'Неизвестная категория';
});

const metaData = getMeta(title.value)
useMeta(metaData)

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
        <NewsList :year="evYear" :limit="100" :category="String(route.params.category)" ref="listRef"></NewsList>
    </template>
  </PageShell>
</template>

<style scoped>

</style>
