<template>
  <div v-if="evData" class="eventsarea">
    <div class="editArea">
      <div class="card">
        <AnnounceCard
          v-if="evData.map"
          :editMode="$attrs.editMode"
          @IamDeleted="IamDeleted"
          @newAnnounce="reload"
          ref="rAnnounceCard"
          :evData="evData" >
        </AnnounceCard>
      </div>
      <div class="editor">
        <div style="display: flex; justify-content: space-between">
          <DateTime v-model:date="evDataEditable.datetime"></DateTime>
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
            />
          </div>
        </div>
        <div style="display: flex; justify-content: space-between; flex-wrap: wrap">
          <q-btn label="Удалить эскиз" icon="delete" @click="delImg('top')"></q-btn>
          <q-btn label="Удалить афишу" icon="delete" @click="delImg('poster')"></q-btn>
        </div>


        <q-input name="progName"
                 v-model="evDataEditable.prog_name"
                 label="Название"
        ></q-input>
        <q-select
          v-model="evDataEditable.hall_id"
          label="Место проведения"
          emit-value
          map-options
          option-label="name"
          option-value="id"
          :options="Halls"
        ></q-select>
        <q-select
          v-model="evDataEditable.pay"
          emit-value
          map-options
          label="Условия входа"
          :options="paySelect"
        ></q-select>
        <br>
        <q-input v-if="evData.pay == 3" type="text" v-model="evDataEditable.ticket_link" label="Ссылка на продажу билетов"></q-input>
        <br>
        <q-input type="number" v-model="evDataEditable.age" label="Возрастные ограничения"></q-input>
        <br>
        <q-input name="evDescr" v-model="evDataEditable.sdescr"
                 type="textarea"
                 label="Краткое описание"
        ></q-input>
        <br>
        <q-input name="evText" v-model="evDataEditable.description"
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
import DateTime from 'components/DateTime.vue'
import { useQuasar } from 'quasar'
import { api } from 'boot/axios'
import AnnounceCard from 'components/AnnounceCard.vue'
import { inject, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const apiUrl = String(process.env.API)
const q = useQuasar()
const token = inject('token')
const lvl = inject('lvl')
const route = useRoute()
const router = useRouter()
const editMode = inject('editMode')
const Halls = inject('Halls')

const emit = defineEmits(['reload', 'posterUploaded'])


const model = {}
const ttt = {}

const props = defineProps({
  evData: ref(false)
})

const evDataEditable = ref(props.evData)

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
        name: 'X-CSRF-TOKEN',
        value: token.value
      }
    ],
    formFields: [{
      name: 'id',
      value: props.evData.ev_id
    }]
  }
}

function factoryFnMini (files) {
  return {
    url: apiUrl + 'api/upload/postertop.php',
    headers: [
      {
        name: 'X-CSRF-TOKEN',
        value: token.value
      }
    ],
    formFields: [{
      name: 'id',
      value: props.evData.ev_id
    }]
  }
}

function uploaded (info) {
  let data = info.xhr.responseText
  let jsonResponse = JSON.parse(data)
  if (jsonResponse.error) {
    q.notify({
      type: 'negative',
      position: 'center',
      message: jsonResponse.error,
      closeBtn: 'Закрыть'
    })
    uploader.value.reset()
    uploader2.value.reset()
    return
  }
  q.notify({
    type: 'positive',
    position: 'center',
    message: 'Загружено',
    closeBtn: 'Ок'
  })
  emit('posterUploaded')
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
  api.post(apiUrl + 'api/set/announces/delposter.php', {
    params: {
      id: props.evData.ev_id,
      token: token.value,
      istop: istop
    }
  })
    .then((response) => {
      if (response.data.result) {
        q.notify({
          timeout: 100,
          color: 'positive',
          position: 'center',
          message: 'Готово',
          closeBtn: 'Закрыть'
        })
        emit('posterUploaded')
        return true
      }

      let msg = 'Ой! Какая досада!'
      if (response.data.error) {
        msg = response.data.error
      }

      q.notify({
        color: 'negative',
        position: 'center',
        message: msg,
        icon: 'report_problem',
        closeBtn: 'Закрыть'
      })
    })
    .catch(() => {
      q.notify({
        color: 'negative',
        position: 'center',
        message: 'Сервер не отвечает',
        icon: 'report_problem'
      })
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
