<script setup>

import {computed, inject, onMounted, ref} from "vue";
import 'src/css/dialog.css'
import {api} from "boot/axios";
import {notifyError} from "src/js/myFuncts";
import {useQuasar} from "quasar";

const q = useQuasar()
const apiUrl = String(process.env.API)

const folderNameDialog = inject('folderNameDialog')
const folderId = inject('folderId')
const folderList = inject('folderList')
const loadList = inject('loadList')
const folderName = ref('')

function initFolder() {
  const folder = folderList.value.find(el => el.id === folderId.value)
  if(folder){
    folderName.value = folder.title
  }
}

function rename() {
  const formData = {
    params: {
      method: 'rename',
      id: folderId.value,
      title: folderName.value
    }
  }
  api.post(apiUrl + 'api/docs/folder.php', formData)
    .then((response) => {
      if (!!!response?.data?.result) {
        throw new Error();
      }

      loadList()
      folderNameDialog.value = false

    })
    .catch((error) => {
      q.notify(notifyError(error))
    })
}


onMounted(() => {
  //console.log('RenameFolderDialog mounted')
})
</script>

<template>
<q-dialog v-model="folderNameDialog" @beforeShow="initFolder()">
  <q-card dark class="dialogArea">
    <q-card-section>
      <q-input v-model="folderName"
               dark
               clearable
               outlined
               label="Имя папки"
               color="amber">
        <template v-slot:append>
          <q-btn label="ok"
                 class="goldBtn"
                 v-if="folderName && folderName.length"
                 @click="rename()">

          </q-btn>
        </template>
      </q-input>
    </q-card-section>
  </q-card>
</q-dialog>
</template>

<style scoped>

</style>
