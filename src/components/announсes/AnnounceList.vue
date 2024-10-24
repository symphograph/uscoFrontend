<script setup>
import {useQuasar} from 'quasar'
import {api} from 'boot/axios'
import AnnounceCard from './AnnounceCard.vue'
import {computed, inject, onMounted, ref, watch} from 'vue'
import {useRoute, useRouter} from 'vue-router'
import {notifyError} from "src/js/myFuncts";


const apiUrl = String(process.env.API)
const q = useQuasar()

const compactCard = inject('compactCard')

const announceList = inject('announceList')
const progress = inject('progress')

const props = defineProps({
  method: String,
  evYear: Number,
  sort: ref({})
})


function loadAnnounces() {
  progress.value = true
  api.post(apiUrl + 'epoint/event/announce.php', {
    params: {
      method: props.method,
      year: props.evYear
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

onMounted(() => {
  loadAnnounces()
})

watch(() => props.evYear, () => {
  loadAnnounces()
})

const sortFromOld = (d1, d2) => (d1.eventTime < d2.eventTime) ? 1 : -1
const sortFromNew = (d1, d2) => (d1.eventTime > d2.eventTime) ? 1 : -1
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
    :Announce="announce"
    @IamDeleted="loadAnnounces()"
    :compact="compactCard"
  ></AnnounceCard>
</template>

<style scoped>

</style>
