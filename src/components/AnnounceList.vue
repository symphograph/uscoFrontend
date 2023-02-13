<template>
  <AnnounceCard
    v-for="poster in sortedList"
    :key="poster.ev_id"
    :evData="poster"
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


const apiUrl = String(process.env.API)
const q = useQuasar()
const token = inject('token')
const lvl = inject('lvl')
const route = useRoute()
const router = useRouter()
const editMode = inject('editMode')

const announceList = ref(null)
const Halls = inject('Halls')

const props = defineProps({
  sort: ref(null),
  evYear: ref(null),
  onlyNew: ref(0)
})



    function loadData () {
      api.post(apiUrl + 'api/get/announces/announces.php', {
        params: {
          sort: props.sort,
          year: props.evYear,
          new: props.onlyNew,
          token: token.value
        }
      })
        .then((response) => {
          announceList.value = response.data.data
        })
        .catch(() => {
          q.notify({
            color: 'negative',
            position: 'center',
            message: 'Сервер не отвечает',
            icon: 'report_problem'
          })
          announceList.value = []
        })
    }
onMounted(()=>{
  loadData()
})

watch(() => props.evYear,()=>{
    loadData()
})

watch(() => props.sort,()=>{
    //loadData()
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
