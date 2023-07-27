<template>
  <div v-if="Announce" class="eventsarea">
    <div class="editArea">
      <div class="card">
        <AnnounceCard
          v-if="Announce.Hall.map"
          @IamDeleted="IamDeleted"
          @newAnnounce="reload"
          ref="rAnnounceCard"
          :Announce="Announce" >
        </AnnounceCard>
      </div>
      <div class="editor">
        <div style="display: flex; justify-content: space-between">
          <DateTime v-model:date="Announce.datetime" @update:date="test()"></DateTime>
        </div>
        <br>
        <div class="uploads">
          <div>
            <q-uploader
              v-model="model"
              style="max-width: 300px"
              label="Загрузить эскиз 1080:684"
              :factory="factoryFnMini"
              ref="uploader"
              @uploaded="uploaded"
              @failed="failed"
            />
          </div>
          <div>
            <q-uploader
              v-model="model"
              style="max-width: 300px"
              label="Загрузить афишу"
              :factory="factoryFn"
              ref="uploader2"
              @uploaded="uploaded"
              @failed="failed"
            />
          </div>
        </div>
        <div style="display: flex; justify-content: space-between; flex-wrap: wrap">
          <q-btn label="Удалить эскиз" icon="delete" @click="delImg('top')"></q-btn>
          <q-btn label="Удалить афишу" icon="delete" @click="delImg('poster')"></q-btn>
        </div>


        <q-input name="progName"
                 v-model="Announce.prog_name"
                 label="Название"
        ></q-input>
        <q-select
          v-model="Announce.Hall"
          label="Место проведения"
          map-options
          option-label="name"
          option-value="id"
          :options="Halls"
        ></q-select>
        <q-select
          v-model="Announce.pay"
          emit-value
          map-options
          label="Условия входа"
          :options="paySelect"
        ></q-select>
        <br>
        <q-input v-if="Announce.pay == 3" type="text" v-model="Announce.ticket_link" label="Ссылка на продажу билетов"></q-input>
        <br>
        <q-input type="number" v-model="Announce.age" label="Возрастные ограничения"></q-input>
        <br>
        <q-input name="evDescr" v-model="Announce.sdescr"
                 type="textarea"
                 label="Краткое описание"
        ></q-input>
        <br>
        <q-input name="evText" v-model="Announce.description"
                 type="textarea"
                 label="Описание"
        ></q-input>
      </div>
    </div>
    <div class="btns">
      <q-btn label="Сохранить" @click="save"></q-btn>
    </div>
  </div>
  <br><hr><br>
</template>

<script setup>
import DateTime from 'components/announses/DateTime.vue'
import { useQuasar } from 'quasar'
import { api } from 'boot/axios'
import AnnounceCard from 'components/announses/AnnounceCard.vue'
import { inject, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import {notifyError, notifyOK} from "src/myFuncts";

const apiUrl = String(process.env.API)
const q = useQuasar()
const lvl = inject('lvl')
const route = useRoute()
const router = useRouter()
const editMode = inject('editMode')
const Halls = inject('Halls')

const emit = defineEmits(['reload', 'posterUploaded'])

const model = {}
const AccessToken = inject('AccessToken')

const Announce = inject('Announce')

function test () {
  //console.log(Announce)
}

const paySelect = [
  {
    label: 'Вход свободный',
    value: 2
  },
  {
    label: 'Билеты в продаже',
    value: 3
  },
  {
    label: 'Вход по пригласительным',
    value: 4
  },
  {
    label: 'Продажа завершена',
    value: 5
  }
]

const uploader = ref(null)
const uploader2 = ref(null)
const rAnnounceCard = ref(null)


function factoryFn (files) {
  return {
    url: apiUrl + 'api/upload/poster.php',
    headers: [
      {
        name: 'ACCESSTOKEN',
        value: AccessToken.value
      }
    ],
    formFields: [{
      name: 'id',
      value: Announce.value.id
    }]
  }
}

function factoryFnMini (files) {
  return {
    url: apiUrl + 'api/upload/postertop.php',
    headers: [
      {
        name: 'ACCESSTOKEN',
        value: AccessToken.value
      }
    ],
    formFields: [{
      name: 'id',
      value: Announce.value.id
    }]
  }
}

function uploaded (info) {
  q.notify(notifyOK('Загружено'))
  emit('posterUploaded')
}

function failed (info) {
  let msg = JSON.parse(info?.xhr?.response)?.error ?? ''
  q.notify(notifyError(null ,msg))
}

function save () {
  rAnnounceCard.value.saveData()
}

function IamDeleted () {
  router.push({ path: '/announces' })
}

function reload () {
  emit('reload')
}

function delImg (istop) {
  api.post(apiUrl + 'api/set/announce/delposter.php', {
    params: {
      id: Announce.value.id,
      istop: istop
    }
  })
    .then((response) => {
      if(!!!response?.data?.result){
        throw new Error();
      }
      emit('posterUploaded')
      q.notify(notifyOK(response?.data?.result ?? ''))
    })
    .catch((error) => {
      q.notify(notifyError(error))
    })
}

</script>

<style scoped>
.btns {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.editArea {
  max-width: 1200px;
  margin: 0 auto;
  padding: 3em;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.editor {
  width: 100%;
  max-width: 600px;
}

.card {
  max-width: 360px;
}

.uploads {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.eventsarea {
  margin: 0 auto;
  padding: 2em;
}
</style>
