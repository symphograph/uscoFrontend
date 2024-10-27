<script setup>
import 'src/css/dialog.css'
import {inject, ref} from "vue";
import {useQuasar} from "quasar";
import {Partition} from "src/js/lib";

const q = useQuasar()
const emit = defineEmits(['onSave'])


const isOpenPartitionDialog = inject('isOpenPartitionDialog')
const partition = inject('selectedPartition')

const loadPartitions = inject('loadPartitions')
const loading = ref(false)

function close() {
  isOpenPartitionDialog.value = false
}

async function save() {
  loading.value = true
  const result = await Partition.save(q, partition.value)
  if(result){
    await loadPartitions()
    close()
  }
  loading.value = false
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
      <q-form @submit.stop.prevent="onSubmit">
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
          <q-btn
                 label="Отмена"
                 flat
                 @click="isOpenPartitionDialog = false"
          ></q-btn>
          <q-btn color="green" type="submit" label="сохранить" flat :loading="loading"></q-btn>
        </q-card-actions>
      </q-form>
    </q-card>
  </q-dialog>
</template>

<style scoped>

</style>
