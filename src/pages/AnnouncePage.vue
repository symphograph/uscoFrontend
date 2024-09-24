<script setup>
import {useMeta, useQuasar} from 'quasar'
import {api} from 'boot/axios'
import AnnounceEditor from 'components/announses/AnnounceEditor.vue'
import AnnounceDescr from 'components/announses/AnnounceDescr.vue';
import {ref, inject, onMounted, provide} from 'vue'
import {useRoute} from 'vue-router'
import {getMeta, notifyError} from 'src/js/myFuncts';
import PageTitle from "components/main/PageTitle.vue";
import MainFooter from "components/main/footer/MainFooter.vue";


const metaData = getMeta('Анонс')
useMeta(metaData)

const q = useQuasar()
const editMode = inject('announceEditMode')
const apiUrl = String(process.env.API)
const route = useRoute()
const editorRef = ref()

const Announce = ref(null)
provide('Announce', Announce)

function loadData() {

  api.post(apiUrl + 'api/event/announce.php', {
    params: {
      method: 'get',
      id: route.params.evid
    }
  })
    .then((response) => {
      Announce.value = response?.data?.data ?? null
      console.log('Announce loaded')
    })
    .catch((error) => {
      q.notify(notifyError(error))
    })
}

onMounted(() => {
  loadData()
})
</script>

<template>
  <q-scroll-area class="col myScrollArea">
    <div class="centralCol">
      <AnnounceEditor v-if="editMode && Announce"
                      @posterUploaded="loadData"
                      @reload="loadData"
                      ref="editorRef"
      ></AnnounceEditor>
      <div class="eventboxl">
        <AnnounceDescr v-if="Announce" @delPoster="() => { editorRef.delPoster() }"></AnnounceDescr>
      </div>
    </div>
    <MainFooter></MainFooter>
  </q-scroll-area>
</template>

<style scoped>


.eventboxl {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0 auto;
  /*max-width: 1200px;*/
  padding: 1em 0;
}


</style>
