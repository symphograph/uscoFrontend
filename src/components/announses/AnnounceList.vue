<template>
  <AnnounceCard
    v-for="announce in sortedList"
    :key="announce.id"
    :Announce="announce"
    :editMode="editMode"
    @IamDeleted="loadData"
  ></AnnounceCard>
</template>

<script setup>
import { useQuasar } from 'quasar'
import { api } from 'boot/axios'
import AnnounceCard from './AnnounceCard.vue'
import { computed, inject, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import {notifyError} from "src/myFuncts";


const apiUrl = String(process.env.API)
const q = useQuasar()
const route = useRoute()
const router = useRouter()
const editMode = inject('editMode')
const progress = inject('progress')

const announceList = inject('announceList')
const Halls = inject('Halls')

const props = defineProps({
  sort: ref(null),
  evYear: ref(null),
  onlyNew: ref(0)
})



    function loadData () {
      progress.value = true
      api.post(apiUrl + 'api/get/announces/announces.php', {
        params: {
          sort: props.sort,
          year: props.evYear,
          new: props.onlyNew
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
onMounted(()=>{
  loadData()
})

watch(() => props.evYear,()=>{
    loadData()
})

const sortFromOld = (d1, d2) => (d1.datetime < d2.datetime) ? 1 : -1
const sortFromNew = (d1, d2) => (d1.datetime > d2.datetime) ? 1 : -1
const sortedList = computed(()=> {
  if (!announceList.value || !announceList.value.length) {
    return []
  }
  switch (props.sort) {
    case 0:
      return [...announceList.value].sort(sortFromOld)
    case 1:
      return [...announceList.value].sort(sortFromNew)
    default:
      return announceList.value
  }
})


</script>

<style scoped>

</style>
