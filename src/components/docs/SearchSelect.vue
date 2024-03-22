<script setup>

import {computed, inject, onBeforeMount, onMounted, ref} from "vue";

import {fDate} from "src/js/myFuncts";
import {useQuasar} from "quasar";
import DocItem from "components/docs/DocItem.vue";

const q = useQuasar()
const apiUrl = String(process.env.API)
const editMode = inject('editMode')
const inputVal = ref('')
const expanded = ref(false)
const expRef = ref()
const folderList = inject('folderList')

const selectedDocId = ref()

const searchRef = ref('')

const docList = computed(() =>
  folderList.value.slice().reduce((acc, folder) => {
    return acc.concat(folder.docs);
  }, [])
)
const filteredList = computed(() =>
  docList.value.slice().filter(v => v.title.toLowerCase().includes(inputVal.value))
)

const docOpts = ref([])

function onInput() {
  console.log('input')
  if(inputVal.value && inputVal.value.length > 0) {
    expRef.value.show()
  }else {
    expRef.value.hide()
  }
}

function openNewTab() {
  const url = getUrl()
  selectedDocId.value = null
  searchRef.value.blur()
  window.open(url, '_blank').focus();
}

function getUrl() {
  const fileName = docList.value.find(el=> el.id === selectedDocId.value).fileName
  return apiUrl + 'documents/' + fileName
}

function filterFn(val, update) {

  update(() => {
    if (!val) {
      docOpts.value = [];
    } else {
      const needle = val.toLowerCase();
      const list = [...docList.value]
      docOpts.value = list.filter(v => v.title.toLowerCase().includes(needle));
    }
  });
  console.log('val', val)
  console.log('fn', docOpts.value)
}

onMounted(() => {

  docOpts.value = docList.value

})

const popupStyle = {
  maxHeight: '40em',
  borderRadius: '1em',
}

</script>

<template>
  <q-list>
    <q-btn label="exp" @click="() => {expanded = !expanded; console.log(expanded)}"></q-btn>
    <q-expansion-item v-model="expanded" ref="expRef">
      <template v-slot:header>
        <q-input v-model="inputVal" @click.stop.prevent="expanded = false" @update:model-value="onInput()"></q-input>
      </template>
      <q-list>
        <template v-for="doc in filteredList" :key="doc.id">
          <DocItem :doc="doc"></DocItem>
        </template>
        <q-item>gfsd</q-item>
      </q-list>
    </q-expansion-item>
    <q-select v-if="folderList.length" v-model="selectedDocId"
              ref="searchRef"
              :options="docOpts"
              clearable
              use-input
              fill-input
              style="color: #a98700"
              color="#a98700"
              autocomplete="off"
              :popup-content-style="popupStyle"
              emit-value
              @filter="filterFn"
              map-options
              option-value="id"
              option-label="title"
              @update:model-value="openNewTab()"
    >
      <template v-slot:append>
        <q-icon name="search" style="color: #a98700"></q-icon>
      </template>
      <template v-slot:option="scope">
        <q-item v-bind="scope.itemProps"
                :key="scope.opt.id"
                :disable="!scope.opt.fileName"
                clickable
                dense
        >
          <q-item-section>
            <q-item-label class="docItem">
              {{ scope.opt.title }}
            </q-item-label>
            <q-item-label caption v-if="false">от {{ fDate(scope.opt.atDate) }}</q-item-label>
          </q-item-section>
        </q-item>
      </template>
    </q-select>
  </q-list>


</template>

<style scoped>
.docItem {
  color: #333366;
  font-size: 14px;
}
</style>
