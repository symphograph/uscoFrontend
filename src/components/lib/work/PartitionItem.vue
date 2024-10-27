<script setup lang="ts">
import {copy} from "src/js/myFuncts";
import {inject, provide, ref} from "vue";
import {Partition} from "src/js/lib";
import {useQuasar} from "quasar";
import BtnMoveSort from "components/main/buttons/BtnMoveSort.vue";
import BtnDelete from "components/main/BtnDelete.vue";

const q = useQuasar()

const props = defineProps<{
  partition: Record<string, any>
  idx: number,
  length: number
}>()

const emit = defineEmits(['onDel', 'onSort', 'onEdit'])

const loading = ref(false)

const editMode = inject('editMode')

const isOpenDialog = inject('isOpenPartitionDialog')
provide('isOpenPartitionDialog', isOpenDialog)

async function delPartition(partitionId: number) {
  if (await Partition.del(q, partitionId)) {
    emit('onDel')
  }
}

async function moveSort(direction: 'up' | 'down', partitionId: number) {
  loading.value = true
  if (await Partition.moveSort(q, direction, partitionId)) {
    emit('onSort')
  }
  loading.value = false
}


</script>

<template>
  <q-item>
    <q-item-section avatar>
      <q-item-label>{{ partition.sortVal }}</q-item-label>
    </q-item-section>
    <q-item-section avatar>
      <q-item-label>№{{ partition.num }}</q-item-label>
    </q-item-section>
    <q-item-section>
      <q-item-label>{{ partition.title }}</q-item-label>
      <q-item-label caption>{{ partition.caption }}</q-item-label>
    </q-item-section>
    <q-item-section side>
      <q-item-label>
        <q-btn :label="`ID: ${partition.id}`" flat @click="copy(partition.id, q)" icon-right="content_copy"></q-btn>
      </q-item-label>
    </q-item-section>
  </q-item>
  <template v-if="editMode">
    <q-item>
      <q-item-section></q-item-section>
      <q-item-section side>
        <q-btn icon="edit" dense round flat @click="emit('onEdit', partition)">
          <q-tooltip>Редактировать</q-tooltip>
        </q-btn>
      </q-item-section>
      <q-item-section side>
        <BtnDelete throw-confirm
                   danger flat
                   @onOk="delPartition(partition.id)"
                   tooltip="Удалить часть"
                   title="Удалить часть"></BtnDelete>
      </q-item-section>
      <q-item-section side>
        <BtnMoveSort :disable="idx < 1"
                     :loading="loading"
                     @onClick="moveSort('up', partition.id)"
                     direction="up"></BtnMoveSort>
      </q-item-section>
      <q-item-section side>
        <BtnMoveSort :disable="idx >= length - 1"
                     :loading="loading"
                     @onClick="moveSort('down', partition.id)"
                     direction="down"></BtnMoveSort>
      </q-item-section>
    </q-item>
    <q-separator></q-separator>

  </template>
</template>

<style scoped>

</style>
