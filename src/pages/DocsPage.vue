<script setup>
import {useMeta, useQuasar} from 'quasar'
import {computed, inject, onBeforeMount, provide, ref, watch} from "vue";
import DocFolder from "components/docs/DocFolder.vue";
import UploadDialog from "components/docs/UploadDialog.vue";
import {delElement, getMeta, keyTranslit, notifyError, notifyOK} from "src/js/myFuncts";
import {api} from "boot/axios";
import SelectSort from "components/docs/SelectSort.vue";
import AddFolderDialog from "components/docs/AddFolderDialog.vue";
import TrashFolder from "components/docs/TrashFolder.vue";
import FilteredList from "components/docs/FilteredList.vue";
import RenameFolderDialog from "components/docs/RenameFolderDialog.vue";
import PaidServices from "components/docs/PaidServices.vue";
import MatTechBase from "components/docs/MatTechBase.vue";
import PageShell from "components/main/PageShell.vue";

const title = 'Документы';
const metaData = getMeta(title, 0.6)
useMeta(metaData)

const q = useQuasar()
const apiUrl = String(process.env.API)

const editMode = inject('docEditMode')
provide('editMode', editMode)

const trashRef = ref()
const filterInput = ref(null)

const translatedFilterInput = computed(() =>
  keyTranslit(filterInput.value)
)
provide('filterInput', translatedFilterInput)

const folderId = ref()
provide('folderId', folderId)

const folderList = ref([])
provide('folderList', folderList)

const sortType = ref()
provide('sortType', sortType)

const sortFolderFn = (a, b) => a.sortPos - b.sortPos
const sortedFolders = computed(() =>
  folderList.value.slice().sort(sortFolderFn)
)
provide('sortedFolders', sortedFolders)


const dialog = ref(false)
provide('dialog', dialog)

const folderNameDialog = ref(false)
provide('folderNameDialog', folderNameDialog)

const createFolderDialog = ref(false)
provide('createFolderDialog', createFolderDialog)


const collapseTrigger = ref(false)
provide('collapseTrigger', collapseTrigger)

function collapseFolders() {
  collapseTrigger.value = !collapseTrigger.value
}

function onUploaded() {
  loadList()
}

function loadList() {
  const formData = {
    params: {
      method: 'list'
    }
  }
  api.post(apiUrl + 'api/docs/folder.php', formData)
    .then((response) => {
      if (!!!response?.data?.result) {
        throw new Error();
      }

      if (folderList.value.length) {
        folderList.value.push({sortPos: 0})
      }

      folderList.value = response.data.data.list

      if (editMode.value) {
        trashRef.value.loadTrash()
      }


    })
    .catch((error) => {
      console.log(error)
      q.notify(notifyError(error))
    })
}

provide('loadList', loadList)

function onDelDoc(evt) {
  //const folder = folderList.value.find(el => el.id === evt.folderId);
  //delElement(folder.docs, 'id', evt.docId)
  loadList()
  q.notify(notifyOK('Готово'))
}

function onDelFolder(id) {
  delElement(folderList.value, 'id', id)
  trashRef.value.loadTrash()
  q.notify(notifyOK('Готово'))
}

function onCreateDialog() {
  loadList()
}

watch(() => editMode.value, () => {
  filterInput.value = null
  loadList()
});

onBeforeMount(() => {
  loadList()
  sortType.value = 'title'
})
</script>

<template>
  <PageShell :page-title="title">
    <template v-slot:ToolPanel>
      <q-btn label="Новая папка"
             v-if="editMode"
             flat stretch
             class="toolBtn"
             style="width: max-content"
             icon="folder"
             @click="createFolderDialog = true">
      </q-btn>

      <SelectSort></SelectSort>

      <q-input v-model="filterInput" type="search" borderless filled dense clearable style="width: 10em">
        <template v-slot:append>
          <q-icon name="search"></q-icon>
        </template>
      </q-input>

      <q-btn icon="unfold_less" stretch flat
             class="toolBtn"
             @click="() => { collapseFolders() }">
        <q-tooltip>Свернуть все папки</q-tooltip>
      </q-btn>
    </template>
    <template v-slot:PageContent>
      <div class="filesArea">
        <template v-if="folderList.length">
          <q-list v-if="!filterInput">
            <template v-for="(folder, idx) in sortedFolders" :key="folder.id">
              <DocFolder :folder="folder"
                         :idx="idx"
                         :folderId="folder.id"
                         @onDelFolder="(id) => onDelFolder(id)"
                         @onDelete="(evt) => onDelDoc(evt)">

              </DocFolder>
            </template>

            <template v-if="editMode">
              <TrashFolder
                ref="trashRef"
                @cleared="loadList()"
              ></TrashFolder>
            </template>
          </q-list>
          <template v-else>
            <FilteredList></FilteredList>
          </template>

        </template>

        <br>
        <hr>
        <br>
        <PaidServices></PaidServices>
        <br>
        <hr>
        <br>

        <MatTechBase></MatTechBase>
      </div>
    </template>
  </PageShell>

  <UploadDialog @fileUploaded="onUploaded()"></UploadDialog>
  <AddFolderDialog @created="onCreateDialog()"></AddFolderDialog>
  <RenameFolderDialog></RenameFolderDialog>
</template>

<style>
* {
  margin: 0;
}

.q-expansion-item--popup > .q-expansion-item__container {
  /*border: 1px solid rgba(0, 0, 0, 0.12);*/
  border-radius: 4px;
}

.toolBtn {
  color: var(--btnColor);
}

.filesArea {
  max-width: 1200px;
  margin: auto;
  padding: 1em;
}

summary {
  font-size: 25px;
  /* font-weight: bold; */
  cursor: pointer;
  color: #ba892f;
}


.flink {
  vertical-align: middle;
  text-decoration: none;
  font-size: 18px;
  color: #2f2e2e;
  transition: 300ms;
}

.table {
  color: black;
}

ol li {
  margin: 1em;
  font-size: 18px;
  color: black;
}

ol span {
  font-size: 14px;
  color: dimgray;
}

@media (max-width: 600px) {

  summary {
    font-size: 18px;

  }

  .flink, li {
    font-size: 15px;

  }

  .table div {
    font-size: 14px;
  }

}

th {
  font-weight: bold;
}

</style>
