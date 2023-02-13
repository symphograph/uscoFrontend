<template>
  <div class="content">
    <AnnounceEditor v-if="editMode && evData"
                  v-model:evData="evData"
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
import { ref, inject, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const metaData = {
  title: 'Анонс'
}
useMeta(metaData)

const q = useQuasar()
const editMode = inject('editMode')
const apiUrl = String(process.env.API)
const route = useRoute()
const token = inject('token')

const evid = ref(route.params.evid)
const evData = ref(null)

function loadData () {

  api.post(apiUrl + 'api/get/announces/announce.php', {
    params: {
      id: route.params.evid,
      token: token.value
    }
  })
    .then((response) => {
      if (response.data.error) {
        q.notify({
          color: 'negative',
          position: 'center',
          message: response.data.error,
          icon: 'report_problem',
          closeBtn: 'Закрыть'
        })
        evData.value = false
      } else {
        evData.value = response.data
      }

      // console.log(this.evData)
    })
    .catch(() => {
      q.notify({
        color: 'negative',
        position: 'center',
        message: 'Сервер не отвечает',
        icon: 'report_problem'
      })
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
