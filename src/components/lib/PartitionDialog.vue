<script setup>
import 'src/css/dialog.css'
import {inject, ref} from "vue";
import {api} from "boot/axios";
import {notifyError, notifyOK} from "src/js/myFuncts";
import {useQuasar} from "quasar";

const q = useQuasar()
const apiStaff = String(process.env.apiStaff)


const isOpenPartitionDialog = inject('isOpenPartitionDialog')
const partition = inject('selectedPartition')

const loadPartitions = inject('loadPartitions')
const loading = ref(false)

function save() {
  loading.value = true
  api.post(apiStaff + 'epoint/lib/partition.php', {
    params: {
      method: partition.value.id ? 'update' : 'add',
      workId: partition.value.workId,
      title: partition.value.title,
      caption: partition.value.caption,
      num: partition.value.num,
      id: partition.value.id ?? undefined
    }
  })
    .then((response) => {
      if (!!!response?.data?.result) {
        throw new Error();
      }
      q.notify(notifyOK(response?.data?.result ?? null))
      loadPartitions()
      isOpenPartitionDialog.value = false
    })
    .catch((error) => {
      q.notify(notifyError(error))
    })
    .finally(() => {
      loading.value = false
    })
}

function onHide() {
  loading.value = false
}

const titleRules = [val => !!val || 'Пустое название!']
const numRules = [val => (val > 0 & val < 1000) || '№?']
const refTitle = ref()
const refNum = ref()

function onSubmit() {
  if (!isValid()) {
    return
  }

  save()
}

function isValid() {
  return refTitle.value.validate() && refNum.value.validate()
}
</script>

<template>
  <q-dialog v-model="isOpenPartitionDialog" @before-hide="onHide">
    <q-card bordered class="dialogArea">
      <q-form @submit.prevent.stop="onSubmit">
        <q-card-actions>
          <q-input type="number"
                   :rules="numRules"
                   ref="refNum"
                   prefix="№"
                   v-model="partition.num"
                   style="width: 5em"></q-input>

          <q-input v-model="partition.title"
                   filled
                   label="Название части"
                   :rules="titleRules"
                   style="width: 100%"
                   ref="refTitle"></q-input>

          <q-input v-model="partition.caption"
                   filled
                   label="Дополнительное название"
                   style="width: 100%"></q-input>
        </q-card-actions>
        <q-card-actions align="right">
          <q-btn class="goldBtn"
                 label="Отмена"
                 @click="isOpenPartitionDialog = false"
          ></q-btn>
          <q-btn color="green" type="submit" label="сохранить" :loading="loading"></q-btn>
        </q-card-actions>
      </q-form>
    </q-card>
  </q-dialog>
</template>

<style scoped>

</style>
