<script setup lang="ts">

import {inject, onBeforeMount, provide, Ref, ref} from "vue";
import PartitionDialog from "components/lib/PartitionDialog.vue";
import {Partition} from "src/js/lib";
import {useQuasar} from "quasar";
import PartitionItem from "components/lib/work/PartitionItem.vue";

const q = useQuasar()
const editMode = inject('editMode')
const loading = ref(false)

const props = defineProps<{
  workId: number
}>()

const partitions = ref([]) as Ref<Record<string, any>[]>

const selectedPartition = ref({}) as Ref<Record<string, any>>
provide('selectedPartition', selectedPartition)

const isOpenPartitionDialog = ref(false)
provide('isOpenPartitionDialog', isOpenPartitionDialog)


function defaultPartition() {
  return {
    id: undefined,
    num: partitions.value.length + 1,
    title: '',
    workId: props.workId
  }
}

function createPartition() {
  selectedPartition.value = defaultPartition()
  isOpenPartitionDialog.value = true
}

function editPartition(partition: any) {
  selectedPartition.value = partition
  isOpenPartitionDialog.value = true
}



async function loadPartitions() {
  //partitions.value = []
  const list = await Partition.getList(q, props.workId)
  if(list.length) {
    partitions.value = []
    partitions.value = list
  }
}
provide('loadPartitions', loadPartitions)

onBeforeMount(() => {
  loadPartitions()
})
</script>

<template>
  <q-card>
    <q-card-section>Части произведения

    </q-card-section>
    <q-card-section>
      <q-list>
        <template v-for="(partition, idx) in partitions" :key="partition.id">
          <PartitionItem :partition="partition"
                         @onEdit="editPartition"
                         @onDel="loadPartitions"
                         @on-sort="loadPartitions"
                         :idx="idx"
                         :length="partitions.length"
          ></PartitionItem>
        </template>
      </q-list>
    </q-card-section>
    <q-card-actions align="right">
      <q-btn icon="add" label="Добавить часть" flat v-if="editMode" @click="createPartition">
        <q-tooltip>Добавить часть</q-tooltip>
      </q-btn>
    </q-card-actions>
  </q-card>
  <PartitionDialog></PartitionDialog>
</template>

<style scoped>

</style>
