<script setup>
import 'src/css/dialog.css'
import {inject} from "vue";
import {api} from "boot/axios";
import {notifyError, notifyOK} from "src/js/myFuncts";
import {useQuasar} from "quasar";

const q = useQuasar()
const apiUrl = String(process.env.API)
const apiStaff = String(process.env.apiStaff)

const showStatusDialog = inject('showStatusDialog')
const selectedPers = inject('selectedPers')
const statusNames = inject('statusNames')
const condDate = inject('condDate')

function closeDialog() {
  showStatusDialog.value = false
}

function onHide() {
  selectedPers.value = {}
}

function setStatuses() {
  api.post(apiStaff + 'epoint/staff.php', {
    params: {
      method: 'setStatuses',
      date: condDate.value,
      statuses: selectedPers.value.statuses,
      persId: selectedPers.value.persId
    }
  })
    .then((response) => {
      if (!!!response?.data?.result) {
        throw new Error();
      }
      q.notify(notifyOK(response?.data?.result ?? ''))
    })
    .catch((error) => {
      q.notify(notifyError(error))
    })
}
</script>

<template>
<q-dialog v-model="showStatusDialog" @hide="onHide()">
  <q-card bordered class="dialogArea">
    <q-btn flat
           round
           size="0.7em"
           icon="close"
           ref="closeRef"
           @click="closeDialog()"
           style="position: absolute; top: 0.7em; right: 0.7em">
      <q-tooltip anchor="top middle" :offset="[30, 30]">Закрыть</q-tooltip>
    </q-btn>
    <q-list>
      <q-item-label header>{{condDate}}</q-item-label>
      <template v-for="status in statusNames" :key="status.id">
        <q-item>
          <q-item-section avatar>
            <q-item-label>{{status.name}}</q-item-label>
          </q-item-section>
          <q-space></q-space>
          <q-item-section side>
            <q-checkbox v-model="selectedPers.statuses" :val="status.id"></q-checkbox>
          </q-item-section>
        </q-item>
      </template>
    </q-list>
    <q-card-actions align="right">
      <q-btn label="сохранить" @click="setStatuses()"></q-btn>
    </q-card-actions>
  </q-card>
</q-dialog>
</template>

<style scoped>

</style>
