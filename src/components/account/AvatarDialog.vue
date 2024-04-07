<script setup>

import AvatarUploader from "components/account/AvatarUploader.vue";
import {inject, onMounted, ref} from "vue";
import 'src/css/dialog.css'
import {api} from "boot/axios";
import {imgUrl, notifyError} from "src/js/myFuncts";
import {useQuasar} from "quasar";
import BtnDelete from "components/main/BtnDelete.vue";

const q = useQuasar()
const apiStaff = String(process.env.apiStaff)
const showUploader = inject('showUploader')
const selectedPersId = inject('selectedPersId')
const avaList = ref([])
const emit = defineEmits(['updated'])

function avaUrl(ava) {
  if (!ava) {
    return '/img/avatars/init_ava.png'
  }
  return imgUrl(apiStaff, ava.md5, ava.ext, 50);
}

function loadAvatars() {
  api.post(apiStaff + 'api/avatar.php', {
    params: {
      method: 'list',
      persId: selectedPersId.value
    }
  })
    .then((response) => {
      avaList.value = response?.data?.data ?? []
    })
    .catch((error) => {
      avaList.value = []
      q.notify(notifyError(error))
    })
}

function onUploaded() {
  selectedPersId.value = 0
  avaList.value = []
  emit('updated')
  showUploader.value = false
}

function delAvatar(fileId) {
  api.post(apiStaff + 'api/avatar.php', {
    params: {
      method: 'del',
      persId: selectedPersId.value,
      fileId: fileId
    }
  })
    .then((response) => {
      if (!response?.data?.result) {
        throw new Error('Не удалилось')
      }
      loadAvatars()
      emit('updated')
    })
    .catch((error) => {
      q.notify(notifyError(error))
    })
}

function setAsDefault(fileId) {
  api.post(apiStaff + 'api/avatar.php', {
    params: {
      method: 'set',
      persId: selectedPersId.value,
      fileId: fileId
    }
  })
    .then((response) => {
      if (!response?.data?.result) {
        throw new Error()
      }
      onUploaded()
    })
    .catch((error) => {
      q.notify(notifyError(error))
    })
}

function resetAva() {
  api.post(apiStaff + 'api/avatar.php', {
    params: {
      method: 'reset',
      persId: selectedPersId.value,
    }
  })
    .then((response) => {
      if (!response?.data?.result) {
        throw new Error()
      }
      onUploaded()
    })
    .catch((error) => {
      q.notify(notifyError(error))
    })
}

function downloadSource(fileId) {
  api.post(apiStaff + 'api/avatar.php', {
    params: {
      method: 'getSource',
      persId: selectedPersId.value,
      fileId: fileId
    }
  },
    {
      responseType: 'blob'
    })
    .then((response) => {


      //console.log(response.data); // Вывод информации о response.data
      console.log(typeof response.data); // Проверка типа response.data

      const contentDisposition = response.headers['content-disposition'] || response.headers['Content-Disposition'];
      let filename = 'default_name';

      if (contentDisposition) {
        const filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
        const matches = filenameRegex.exec(contentDisposition);

        if (matches != null && matches[1]) {
          filename = matches[1].replace(/['"]/g, '');
        }
      }

      const contentType = response.headers['content-type'];

      //window.open(url, '_blank'); // Открываем изображение в новом окне


      const url = window.URL.createObjectURL(response.data);

      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', filename);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

    })
    .catch((error) => {
      console.log(error)
      q.notify(notifyError(error))
    })
}

onMounted(() => {

})
</script>

<template>
  <q-dialog v-model="showUploader" @show="loadAvatars">
    <q-card dark bordered class="dialogArea">
      <q-list v-if="avaList.length">
        <q-item v-for="ava in avaList"
                :key="ava.fileId"
                :clickable="!ava.isDefault"
                @click="setAsDefault(ava.fileId)">
          <q-item-section avatar>
            <q-avatar>
              <q-img :src="avaUrl(ava?.file)"></q-img>
            </q-avatar>
          </q-item-section>
          <template v-if="ava.accountType !== 'default'">
            <q-item-section>
              <q-item-label caption>
                <q-icon :name="`img:/img/auth/${ava.accountType}.svg`" style="width: 20px"></q-icon>
                {{ `Взять из ${ava.accountType}` }}
              </q-item-label>
            </q-item-section>
          </template>

          <template v-else>
            <q-item-section>
              <q-item-label>{{ ava.isDefault ? 'Выбрана' : 'Выбрать эту' }}</q-item-label>
              <q-item-label caption>Загружено {{ ava.file.createdAt }}</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-btn icon="download" @click="downloadSource(ava.fileId)"></q-btn>
            </q-item-section>
            <q-item-section side>
              <BtnDelete throw-confirm title="Удалить этот аватар" @onOk="delAvatar(ava.fileId)"></BtnDelete>
            </q-item-section>
          </template>
        </q-item>


        <q-item clickable @click="resetAva()">
          <q-item-section avatar>
            <q-avatar>
              <q-img src="/img/avatars/init_ava.png"></q-img>
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label>Без аватарки</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
      <q-separator spaced="1em"></q-separator>
      <AvatarUploader :persId="selectedPersId" @onUploaded="onUploaded"></AvatarUploader>
    </q-card>
  </q-dialog>
</template>

<style scoped>

</style>
