<script setup lang="ts">
import {useQuasar} from 'quasar'
import AnnounceCard from './AnnounceCard.vue'
import {computed, inject, onMounted, Ref, ref, watch} from 'vue'
import {myAnnounce} from "src/js/entry";

const q = useQuasar()

const compactCard = inject('compactCard') as Ref<boolean>

const announceList = inject('announceList') as Ref<Record<string, any>[]>
const progress = inject('progress') as Ref<boolean>

const props = defineProps<{
  method: string;
  year?: number;
  sort: string;
}>();



async function loadAnnounces() {
  progress.value = true
  let result
  const year = props.year ?? new Date().getFullYear()

  switch (props.method) {
    case 'futureList':
      result = await myAnnounce.listFuture(q)
      break
    case 'listByYear':
      result = await myAnnounce.listByYear(q, year)
      break
    case 'listByHall':
      result = await myAnnounce.listByHall(q, year)
      break
    default:
      result = undefined
  }

  announceList.value = result ?? []
  progress.value = false
}

onMounted(() => {
  loadAnnounces()
})

watch(() => props.year, () => {
  loadAnnounces()
})

const sortFromOld = (d1: any, d2: any) => (d1.eventTime < d2.eventTime) ? 1 : -1
const sortFromNew = (d1: any, d2: any) => (d1.eventTime > d2.eventTime) ? 1 : -1
const sortedList = computed(() => {
  if (!announceList.value || !announceList.value.length) {
    return []
  }
  switch (props.sort) {
    case 'dateDesc':
      return [...announceList.value].sort(sortFromOld)
    case 'dateAsc':
      return [...announceList.value].sort(sortFromNew)
    default:
      return announceList.value
  }
})


</script>

<template>
  <AnnounceCard
    v-for="announce in sortedList"
    :key="announce.id"
    :announce="announce"
    @IamDeleted="loadAnnounces()"
    :compact="compactCard"
  ></AnnounceCard>
</template>

<style scoped>

</style>
