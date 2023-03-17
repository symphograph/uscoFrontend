<template>
  <div class="content">
    <AnnounceEditor v-if="editMode && evData"
                  @posterUploaded="loadData"
                  @reload="loadData"
                  :editMode="editMode"
    ></AnnounceEditor>
    <div class="eventboxl">
      <AnnounceDescr v-if="evData" :evData="evData"></AnnounceDescr>
    </div>
  </div>

</template>

<script setup>
import { useMeta, useQuasar } from 'quasar'
import { api } from 'boot/axios'
import AnnounceDescr from 'components/AnnounceDescr.vue'
import AnnounceEditor from 'components/AnnounceEditor.vue'
import {ref, inject, onMounted, provide} from 'vue'
import { useRoute } from 'vue-router'
import {notifyError} from "src/myFuncts";

const metaData = {
  title: 'Анонс'
}
useMeta(metaData)

const q = useQuasar()
const editMode = inject('editMode')
const apiUrl = String(process.env.API)
const route = useRoute()
const token = inject('token')

const evData = ref(null)
provide('evData', evData)

function loadData () {

  api.post(apiUrl + 'api/get/announces/announce.php', {
    params: {
      id: route.params.evid
    }
  })
    .then((response) => {
      evData.value = response?.data?.data ?? null
    })
    .catch((error) => {
      q.notify(notifyError(error))
    })
}

onMounted(() => {
  loadData()
})
</script>

<style scoped>
* {
  margin: 0;
}

.eventboxl {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0 auto;
  max-width: 1200px;
}
</style>
