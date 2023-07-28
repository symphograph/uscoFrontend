<template>
  <div class="content">
    <AnnounceEditor v-if="editMode && Announce"
                  @posterUploaded="loadData"
                  @reload="loadData"
    ></AnnounceEditor>
    <div class="eventboxl">
      <AnnounceDescr v-if="Announce" :Announce="Announce"></AnnounceDescr>
    </div>
  </div>

</template>

<script setup>
import { useMeta, useQuasar } from 'quasar'
import { api } from 'boot/axios'
import AnnounceDescr from 'components/announses/AnnounceDescr.vue'
import AnnounceEditor from 'components/announses/AnnounceEditor.vue'
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

const Announce = ref(null)
provide('Announce', Announce)

function loadData () {

  api.post(apiUrl + 'api/event/announce/get.php', {
    params: {
      id: route.params.evid
    }
  })
    .then((response) => {
      Announce.value = response?.data?.data ?? null
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
