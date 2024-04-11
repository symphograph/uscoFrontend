<script setup>

import 'src/css/dialog.css'
import {inject, ref} from "vue";
import {api} from "boot/axios";
import {notifyError, notifyOK} from "src/js/myFuncts";
import {useQuasar} from "quasar";

const q = useQuasar()
const apiUrl = String(process.env.API)
const emit = defineEmits(['created'])

const createFolderDialog = inject('createFolderDialog')
const title = ref()

function validTitle() {
  if(!title.value) {
    return false
  }
  if(!title.value.length) {
    return false
  }
  return true
}

function addFolder() {
  const data = {
    params: {
      method: 'add',
      title: title.value
    }
  }
  api.post(apiUrl + 'api/docs/folder.php', data)
    .then((response) => {
      if (!!!response?.data?.result) {
        throw new Error();
      }
      q.notify(notifyOK(response?.data?.result ?? ''))
      emit('created')
      closeDialog()
    })
    .catch((error) => {
      q.notify(notifyError(error))
    })
}

function closeDialog() {
  title.value = null
  createFolderDialog.value = false
}
</script>

<template>
  <q-dialog v-model="createFolderDialog">
    <q-card bordered class="dialogArea">
      <q-card-section>
        <q-item-label class="cardTitle">Новая папка</q-item-label>

      </q-card-section>
      <q-input v-model="title"
               label="Имя папки"
               color="amber"
               outlined
               clearable
               stack-label>
        <template v-slot:prepend>
          <q-icon name="folder" style="color: goldenrod"></q-icon>
        </template>
        <template v-slot:append v-if="validTitle()">
          <q-btn label="ok" class="goldBtn" @click="addFolder()"></q-btn>
        </template>
      </q-input>


    </q-card>
  </q-dialog>
</template>

<style scoped>

</style>
