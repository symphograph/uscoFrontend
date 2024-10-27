<script setup lang="ts">
import 'src/css/dialog.css'
import { useQuasar } from 'quasar';
import {inject, provide, Ref, ref} from 'vue';
import SelectComposer from 'components/lib/SelectComposer.vue';
import WorkSelectItem from 'components/announсes/WorkSelectItem.vue';
import {Partition, Work} from "src/js/lib";

const q = useQuasar()
const isOpenDialog = inject('isOpenAddWorkDialog') as Ref<boolean>
const loading = ref(false)

const selectedAuthor = ref()
const selectedWork = ref()

const emit = defineEmits(['workSelected', 'onAddWork'])

const props = defineProps({
  announce: {
    type: Object,
    required: true
  }
})

const worksList = ref([]) as Ref<any[]>
const partitionList = ref([]) as Ref<any[]>
const checkedPartitions = ref([])

function onSelectWork(work: any) {
  selectedWork.value = work
  emit('workSelected', work)
  loadPartitions(work.id)
}



function onSelectAuthor(author: any) {
  selectedAuthor.value = author
  selectedWork.value = undefined
  if(!selectedAuthor.value?.id) return
  loadWorks(selectedAuthor.value.id)
}

async function loadWorks(authorId: number) {
  loading.value = true;
  worksList.value = await Work.getListByAuthor(q, authorId)
  loading.value = false;
}

async function loadPartitions(workId: number) {
  loading.value = true;
  partitionList.value = await Partition.getList(q, workId)
  loading.value = false;
}

async function addWork() {
  loading.value = true;
  const result = await Work.linkToAnnounce(q, props.announce.id, selectedWork.value.id, checkedPartitions.value)
  if(result) {
    emit('onAddWork', selectedWork.value)
    close()
  }
  loading.value = false;
}

function close() {
  isOpenDialog.value = false
}

function onHide() {
  selectedAuthor.value = undefined
  selectedWork.value = undefined
  loading.value = false
}
</script>

<template>
  <q-dialog v-model="isOpenDialog" @before-hide="onHide">
    <q-card bordered class="dialogArea">
      <q-card-section>
        <SelectComposer @it-sel="onSelectAuthor"></SelectComposer>
      </q-card-section>
      <q-card-section v-if="selectedAuthor">
        <q-select
          v-model="selectedWork"
          :options="worksList"
          option-label="titleRu"
          option-value="id"
          map-options
          clearable
          label="Произведение"
          @update:model-value="onSelectWork"
        >
          <template v-slot:option="scope">
            <WorkSelectItem v-bind="scope.itemProps" :work="scope.opt"></WorkSelectItem>
          </template>
        </q-select>
      </q-card-section>
      <q-card-section v-if="selectedWork">
        <q-list separator v-if="partitionList.length">
          <q-item v-for="partition in partitionList"
                  :key="`part_${partition.id}`"
                  tag="label"
          >
            <q-item-section>
              <q-item-label>{{partition.title}}</q-item-label>
              <q-item-label caption>{{partition.caption}}</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-checkbox v-model="checkedPartitions"
                          :val="partition.id"
                          @update:model-value="() => {console.log(checkedPartitions)}"
              ></q-checkbox>
            </q-item-section>
          </q-item>
        </q-list>
        <q-item v-else>
          <q-item-section>
            <q-item-label>
              Части не найдены
            </q-item-label>
            <q-item-label caption>
              Их можно добавить в библиотеке
            </q-item-label>
          </q-item-section>
        </q-item>
        <template >

        </template>
      </q-card-section>
      <q-card-actions align="between">
        <q-space></q-space>
        <q-btn icon-right="save"
               color="green"
               :loading="loading"
               @click="addWork"
               label="сохранить" flat></q-btn>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<style scoped>

</style>
