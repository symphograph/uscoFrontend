<script setup>

import {delElement, fDate, getMD5Path, notifyError, notifyOK} from "src/js/myFuncts";
import {useQuasar} from "quasar";
import {inject} from "vue";
import BtnDelete from "components/main/BtnDelete.vue";
import {api} from "boot/axios";

const q = useQuasar()
const apiUrl = String(process.env.API)
const editMode = inject('editMode')
const emit = defineEmits(['deleted', 'moved'])

const props = defineProps({
  doc: Object
})
const loadList = inject('loadList')

function onDragStart() {
  console.log('drag')
}

function delDoc() {
  const formData = {
    params: {
      method: 'del',
      id: props.doc.id
    }
  }
  api.post(apiUrl + 'api/docs/doc.php', formData)
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

function moveToFolder(id) {
  const formData = {
    params: {
      method: 'moveToFolder',
      docId: props.doc.id,
      folderId: id
    }
  }
  api.post(apiUrl + 'api/docs/doc.php', formData)
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

function setAsTrash() {
  const formData = {
    params: {
      method: 'setAsTrash',
      id: props.doc.id
    }
  }
  api.post(apiUrl + 'api/docs/doc.php', formData)
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

function resFromTrash() {

  const formData = {
    params: {
      method: 'resFromTrash',
      id: props.doc.id
    }
  }
  api.post(apiUrl + 'api/docs/doc.php', formData)
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

</script>

<template>
  <q-item :disable="!doc.fileName"
          :draggable="false"
          @dragstart="onDragStart"
          clickable
          target="_blank"
          :href="`${apiUrl}documents/${getMD5Path(doc.file.md5)}/${doc.fileName}`">
    <q-item-section>
      <q-item-label class="docItem">
        {{ doc.title }}
      </q-item-label>
      <q-item-label caption>от {{ fDate(doc.atDate) }}</q-item-label>
      <template v-if="editMode">
        <q-item-label caption v-if="editMode">{{ doc.fileName }}</q-item-label>
        <q-item-label caption v-if="editMode">Загружен: {{ fDate(doc.file.createdAt) }}</q-item-label>
      </template>
    </q-item-section>
    <q-item-section side v-if="doc.isTrash">
      <q-btn icon="settings_backup_restore"
             color="green"
             @click.stop.prevent="resFromTrash()"
             flat>
        <q-tooltip>Восстановить</q-tooltip>
      </q-btn>
    </q-item-section>
    <q-item-section side v-if="editMode">

      <BtnDelete tooltip="Удалить из корзины"
                 v-if="doc.isTrash"
                 title="Удалить из корзины"
                 @onOk="delDoc()"
                 throwConfirm
                 danger
                 flat></BtnDelete>
      <BtnDelete tooltip="Удалить документ"
                 v-else
                 title="Удалить документ"
                 @onOk="setAsTrash()"
                 throwConfirm
                 flat></BtnDelete>
    </q-item-section>
  </q-item>
</template>

<style scoped>
.docItem {
  color: var(--docTitle);
  font-size: 18px;
}
</style>
