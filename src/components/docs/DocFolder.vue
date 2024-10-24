<script setup>

import {computed, inject, ref, watch} from "vue";
import {useQuasar} from "quasar";
import {fDate, notifyError} from "src/js/myFuncts";
import DocItem from "components/docs/DocItem.vue";
import BtnDelete from "components/main/BtnDelete.vue";
import {api} from "boot/axios";

const q = useQuasar()
const apiUrl = String(process.env.API)
const editMode = inject('editMode')
const emit = defineEmits(['onDelete', 'onDelFolder'])
const isOpen = ref(true)
const folderList = inject('folderList')


const props = defineProps({
  folder: Object,
  idx: Number
})
const isLast = computed(() => folderList.value.length - 1 === props.idx)
//const docs = props.folder.docs
const sortType = inject('sortType')
const loadList = inject('loadList')


const byTitleFn = (a, b) => a.title.localeCompare(b.title)
const byDateAscFn = (a, b) => a.atDate.localeCompare(b.atDate)
const byDateDescFn = (a, b) => b.atDate.localeCompare(a.atDate);

const byDateAsc = (a, b) => byDateAscFn(a, b) || byTitleFn(a, b)
const byDateDesc = (a, b) => byDateDescFn(a, b) || byTitleFn(a, b)

const sortedByTitle = computed(() =>
  props.folder.docs.slice().sort(byTitleFn)
);

const sortedByDateAsc = computed(() =>
  props.folder.docs.slice().sort(byDateAsc)
)

const sortedByDateDesc = computed(() =>
  props.folder.docs.slice().sort(byDateDesc)
)

const sortedList = computed(() => {

  switch (sortType.value) {
    case "title":
      return sortedByTitle.value
    case "dateAsc":
      return sortedByDateAsc.value
    case "dateDesc":
      return sortedByDateDesc.value
  }
  return []
})

function fileExt(url) {
  const fileName = url.split("/").pop();
  return fileName.split(".").pop();
}


const folderId = inject('folderId')
const dialog = inject('dialog')
function callDialog() {
  folderId.value = props.folder.id
  dialog.value = true
}

const folderNameDialog = inject('folderNameDialog')
function callRenameDialog() {
  folderId.value = props.folder.id
  folderNameDialog.value = true
}

function setAsTrash() {
  const formData = {
    params: {
      method: 'setAsTrash',
      id: props.folder.id
    }
  }
  api.post(apiUrl + 'epoint/docs/folder.php', formData)
    .then((response) => {
      if (!!!response?.data?.result) {
        throw new Error();
      }

      emit('onDelFolder', props.folder.id)

    })
    .catch((error) => {
      q.notify(notifyError(error))
    })
}

function action(method) {
  const formData = {
    params: {
      method: method,
      id: props.folder.id
    }
  }
  api.post(apiUrl + 'epoint/docs/folder.php', formData)
    .then((response) => {
      if (!!!response?.data?.result) {
        throw new Error();
      }

      loadList()

    })
    .catch((error) => {
      q.notify(notifyError(error))
    })
}

const folderRef = ref()
const collapseTrigger = inject('collapseTrigger')

watch(() => collapseTrigger.value, () => {
  folderRef.value.hide()
});
</script>

<template>
    <q-expansion-item default-opened
                      v-model="isOpen"
                      class="overflow-hidden no-padding folderArea"
                      ref="folderRef"
                      icon="folder"
                      :header-style="{color: '#a98700', fontSize: '20px'}"
                      :label="folder.title"
                      popup
                      hide-expand-icon
                      :duration="200"
                      :content-inset-level="1">
      <template v-slot:header>
        <q-item style="width: 100%">
          <q-item-section avatar>
            <q-icon name="folder"></q-icon>
          </q-item-section>
          <q-item-section>{{ folder.title }}</q-item-section>
          <template v-if="editMode">
            <q-item-section side>
              <q-tooltip>Переименовать</q-tooltip>
              <q-btn icon="edit" flat @click.stop.prevent="callRenameDialog()"></q-btn>
            </q-item-section>
            <q-item-section side>
              <q-btn icon="arrow_upward"
                     flat
                     dense
                     :disable="folder.sortPos === 1"
                     @click.prevent.stop="action('posUp')">
                <q-tooltip>Переместить вверх</q-tooltip>
              </q-btn>
            </q-item-section>
            <q-item-section side>
              <q-btn icon="arrow_downward"
                     flat
                     dense
                     :disable="isLast"
                     @click.prevent.stop="action('posDown')">
                <q-tooltip>Переместить вниз</q-tooltip>
              </q-btn>
            </q-item-section>
            <template v-if="isOpen">
              <q-item-section side>
                <BtnDelete title="Удаление папки"
                           @onOk="setAsTrash()"
                           message="Папка будет удалена вместе с содержимым"
                           throwConfirm
                           tooltip="Удалить папку">
                </BtnDelete>
              </q-item-section>
              <q-item-section side>
                <q-btn
                  class="goldBtn"
                  round
                  icon="add"
                  @click.stop="callDialog()"
                >
                  <q-tooltip anchor="top middle" :offset="[30, 30]">Добавить документ</q-tooltip>
                </q-btn>
              </q-item-section>
            </template>
          </template>


        </q-item>
      </template>
      <q-card flat style="background: none; border: none">
        <q-card-section>
          <q-list separator>
            <template v-for="(doc, idx) in sortedList" :key="idx">
              <DocItem :doc="doc" @deleted="(evt) => emit('onDelete', evt)"></DocItem>
            </template>
          </q-list>
        </q-card-section>
        <q-card-actions align="right">

        </q-card-actions>
      </q-card>
    </q-expansion-item>
</template>

<style scoped>
.docarea {
  /*padding: 1em 2em;*/
}
.folderArea {
  border-radius: 4px; margin: 1em 0;
  box-shadow: 0 0 2px var(--cardBorder);
}

</style>
