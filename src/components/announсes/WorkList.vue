<script setup lang="ts">

import AddWorkDialog from "components/announсes/AddWorkDialog.vue";
import {computed, onBeforeMount, provide, Ref, ref, watch} from "vue";
import {Partition, Work} from "src/js/lib";
import {useQuasar} from "quasar";
import BtnDelete from "components/main/BtnDelete.vue";
import BtnMoveSort from "components/main/buttons/BtnMoveSort.vue";

const q = useQuasar()

const props = defineProps({
  announce: {
    type: Object,
    required: true
  }
})

const loading = ref(false)

const isOpenAddWorkDialog = ref(false)
provide('isOpenAddWorkDialog', isOpenAddWorkDialog)

function openAddWorkDialog() {
  isOpenAddWorkDialog.value = true
}

function onSelectWork(work: any) {
  console.log(work)
}

const usedWorks = ref([]) as Ref<any[]>
const usedPartitions = ref([]) as Ref<any[]>
const checkedPartitions = ref([]) as Ref<number[]>
const worksEditMode = ref(false)

// CheckBox------------------------------------------------------------------

function checkAll(children: any[]) {
  const childrenIds = children.map(child => child.id);
  checkedPartitions.value = Array.from(new Set([...checkedPartitions.value, ...childrenIds]));
}

function uncheckAll(children: any[]) {
  const childrenIds = children.map(child => child.id);
  checkedPartitions.value = checkedPartitions.value.filter(id => !childrenIds.includes(id));
}

function areAllChildrenChecked(children: any[]): boolean {
  return children.every(child => checkedPartitions.value.includes(child.id));
}

function toggleCheckAll(children: any[]) {
  if (areAllChildrenChecked(children)) {
    uncheckAll(children);
  } else {
    checkAll(children);
  }
}

const mainCheckBoxes = ref<{ [key: number]: any }>({});



function setupMainCheckBox(work: any) {
  mainCheckBoxes.value[work.id] = computed({
    get() {
      return areAllChildrenChecked(work.children);
    },
    set(value) {
      toggleCheckAll(work.children);
    }
  });
}

//-------------------------------------------------------------------------------------

async function loadUsedWorks() {
  loading.value = true
  const id = props.announce.id
  usedWorks.value = await Work.getListByAnnounce(q, id)
  if (usedWorks.value.length) {
    await loadUsedPartitions()
    usedWorks.value.forEach(work => setupMainCheckBox(work));
  }
  loading.value = false
}

async function loadUsedPartitions() {
  loading.value = true
  const id = props.announce.id
  usedPartitions.value = await Partition.getListByAnnounce(q, id)
  checkedPartitions.value = usedPartitions.value.map((el) => (el.id));
  loading.value = false
}



async function savePartitions() {
  loading.value = true
  await Partition.linkListToAnnounce(q, props.announce.id, checkedPartitions.value)
  loading.value = false
}

async function delWork(workId: number) {
  loading.value = true
  const result = await Work.unlinkFromAnnounce(q, props.announce.id, workId)
  if(result) {
    await loadUsedWorks()
  }
  loading.value = false
}

async function moveSort(direction: 'up' | 'down', workId: number) {
  loading.value = true
  const result = await Work.moveSortInAnnounce(q, direction, workId, props.announce.id)
  if (result) {
    await loadUsedWorks()
  }
  loading.value = false
}


onBeforeMount(async () => {
  await loadUsedWorks()

})
</script>

<template>
  <q-card>
    <q-card-actions align="between">
      <q-btn icon="add"
             v-if="worksEditMode"
             label="добавить"
             @click="openAddWorkDialog"
             :loading="loading"></q-btn>
      <q-space></q-space>
      <q-btn icon="edit"
             flat round
             @click.stop.prevent="worksEditMode = !worksEditMode"
             :color="worksEditMode ? 'red' : 'gray'"></q-btn>
    </q-card-actions>

    <q-card-section>
      <q-list>
        <template v-for="(work, idx) in usedWorks" :key="`w${work.id}`">
          <q-expansion-item v-if="work?.children?.length"
                            :content-inset-level="0.1"
                            expand-separator
          >
            <template v-slot:header>
              <q-item style="width: 100%" class="no-padding">
                <q-item-section avatar>
                  <q-item-label caption>{{ work.author.fioRu }}</q-item-label>
                  <q-item-label>{{ work.titleRu }}</q-item-label>
                </q-item-section>
              </q-item>
            </template>
            <q-list>
              <q-item tag="label" v-if="worksEditMode">
                <q-item-section>
                  <q-item-label>
                    {{ areAllChildrenChecked(work.children) ? 'Снять все' : 'Отметить все' }}
                  </q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-checkbox v-model="mainCheckBoxes[work.id]"
                              @update:model-value="savePartitions"
                              :disable="loading"
                              keep-color
                              color="green"></q-checkbox>
                </q-item-section>
              </q-item>
              <q-item v-for="child in work.children" :key="`ch${child.id}`" tag="label">
                <q-item-section avatar>
                  <q-item-label>{{ child.num }}</q-item-label>
                </q-item-section>
                <q-item-section>
                  <q-item-label>
                    {{ child.title }}
                  </q-item-label>
                  <q-item-label caption>
                    {{ child.caption }}
                  </q-item-label>
                </q-item-section>

                <q-item-section side>
                  <q-checkbox v-model="checkedPartitions"
                              :disable="!worksEditMode"
                              :val="child.id"
                              @update:model-value="savePartitions"
                  ></q-checkbox>
                </q-item-section>

              </q-item>
            </q-list>

          </q-expansion-item>
          <q-item v-else>
            <q-item-section>
              <q-item-label caption>
                {{ work.author.fioRu }}
              </q-item-label>
              <q-item-label>
                {{ work.titleRu }}
              </q-item-label>
            </q-item-section>
          </q-item>
          <template v-if="worksEditMode">
            <q-item>
              <q-item-section avatar>
                <BtnMoveSort :disable="idx < 1"
                             @onClick="moveSort('up', work.id)"
                             direction="up"></BtnMoveSort>
              </q-item-section>
              <q-item-section avatar>
                <BtnMoveSort :disable="idx >= usedWorks.length - 1"
                             @onClick="moveSort('down', work.id)"
                             direction="down"></BtnMoveSort>
              </q-item-section>
              <q-item-section></q-item-section>
              <q-item-section side>
                <BtnDelete flat throw-confirm danger
                           @onOk="delWork(work.id)"
                           :loading="loading"
                           :title="`Удалить: ${work.titleRu}`"
                ></BtnDelete>
              </q-item-section>
            </q-item>
            <q-separator></q-separator>
          </template>

        </template>

      </q-list>
    </q-card-section>
  </q-card>
  <AddWorkDialog :announce="announce" @workSelected="onSelectWork" @onAddWork="loadUsedWorks"></AddWorkDialog>
</template>

<style scoped>

</style>
