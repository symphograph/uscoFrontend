<script setup>
import 'src/css/dialog.css'
import DateTime from 'components/announses/DateTime.vue'
import {useQuasar} from 'quasar'
import {api} from 'boot/axios'
import AnnounceCard from 'components/announses/AnnounceCard.vue'
import {inject, onMounted, onUnmounted, provide, ref, watch} from 'vue'
import {useRoute, useRouter} from 'vue-router'
import {notifyError, notifyOK} from "src/js/myFuncts";
import SketchUploader from "components/announses/SketchUploader.vue";
import {myUser} from "src/js/myAuth";
import AddWorkDialog from 'components/announses/AddWorkDialog.vue';
import HallSelect from 'components/hall/HallSelect.vue';

const apiStaff = String(process.env.apiStaff)
const apiUrl = String(process.env.API)
const q = useQuasar()
const route = useRoute()
const router = useRouter()

const Announce = inject('Announce')
const selectedHall = ref(Announce.value.Hall)
provide('selectedHall', selectedHall)

function onHallSelect(hall) {
  console.log(hall)
  Announce.value.hallId = hall.id
  Announce.value.Hall = hall
}

const pwUrl = ref('')
provide('pwUrl', pwUrl)

const emit = defineEmits(['reload', 'posterUploaded'])

const model = {}

function test() {
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

const posterUploader = ref(null)
const rAnnounceCard = ref(null)

const isOpenAddWorkDialog = ref(false)
provide('isOpenAddWorkDialog', isOpenAddWorkDialog)

const AuthorSelectList = ref([])
provide('AuthorSelectList', AuthorSelectList)

const loadingAuthors = ref(false)
provide('loadingAuthors', loadingAuthors)

const selectedAuthorId = ref(0)
provide('selectedAuthorId', selectedAuthorId)

const selectedAuthor = ref(null)
provide('selectedAuthor', selectedAuthor)

watch(selectedAuthorId, () => {
  selectedAuthor.value = AuthorSelectList.value.find(el => el.id === selectedAuthorId.value)
})

function loadAuthors() {
  loadingAuthors.value = true
  api.post(apiStaff + '/api/lib/author.php',{
    params: {
      method: 'all'
    }
  })
    .then((response) => {
      AuthorSelectList.value = response?.data?.data ?? []
    })
    .catch((error) => {
      AuthorSelectList.value = []
      q.notify(notifyError(error))
    })
    .finally(() => {
      loadingAuthors.value = false
    })
}

function openAddWorkDialog() {
  isOpenAddWorkDialog.value = true
}

function addPoster(files) {
  return {
    url: apiUrl + 'api/event/poster.php',
    headers: [
      {
        name: 'ACCESSTOKEN',
        value: myUser.self.AccessToken
      }
    ],
    formFields: [
      {
        name: 'id',
        value: Announce.value.id
      },{
        name: 'method',
        value: 'add',
      }
    ]
  }
}

function sketchUploaded(info) {
  q.notify(notifyOK('Загружено'))
  emit('posterUploaded')
}

function posterUploaded(info) {
  q.notify(notifyOK('Загружено'))
  emit('posterUploaded')
  posterUploader.value.reset()
  photoWatcher.value = true
}

const photoWatcher = ref(false)
let intervalId = null;
watch(photoWatcher, (newValue) => {
  console.log('photoWatcher')
  if (newValue && !intervalId) {
    intervalId = setInterval(loadPoster, 3000);
  } else if (!newValue && intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
});

function failed(info) {
  let msg = JSON.parse(info?.xhr?.response)?.error ?? ''
  q.notify(notifyError(null, msg))
}

function save() {
  rAnnounceCard.value.saveData()
}

function IamDeleted() {
  router.push({path: '/announces'})
}

function reload() {
  emit('reload')
}

function onDelSketch() {
  delete Announce.value.sketch
  delete Announce.value.sketchId
}

function updateMarkdown() {
  api.post(apiUrl + 'api/event/announce.php', {
    params: {
      method: 'updateMarkdown',
      id: Announce.value.id,
      markdown: Announce.value.description,
    }
  })
    .then((response) => {
      if (!!!response?.data?.result) {
        throw new Error();
      }
      Announce.value.parsedMD = response?.data.data

    })
    .catch((error) => {
      // q.notify(notifyError(error, 'hhhh'))
    })
}





function loadPoster() {
  api.post(apiUrl + 'api/event/poster.php', {
    params: {
      method: 'get',
      announceId: route.params.evid
    }
  })
    .then((response) => {
      if (!!!response?.data?.result) {
        throw new Error();
      }

      Announce.value.poster = response?.data?.data ?? null
      if (Announce.value?.poster?.status !== 'process') {
        photoWatcher.value = false
      }
    })
    .catch((error) => {
      photoWatcher.value = false
      q.notify(notifyError(error))
    })
    .finally(() => {

    })
}

defineExpose({

})

onMounted(() => {
  loadAuthors()
  //photoWatcher.value = true
})

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId);
  }

})
</script>

<template>
  <div v-if="Announce" class="eventsarea">
    <div class="editArea">
      <div class="card" v-if="q.platform.is.desktop">
        <AnnounceCard
          v-if="Announce.Hall"
          @IamDeleted="IamDeleted"
          @newAnnounce="reload"
          @delSketch="onDelSketch"
          ref="rAnnounceCard"
          :Announce="Announce"
          :pwUrl="pwUrl"
        >
        </AnnounceCard>
      </div>
      <div class="editor">
        <div style="display: flex; justify-content: space-between">
          <DateTime v-model:date="Announce.eventTime" @update:date="test()"></DateTime>
        </div>
        <br><hr>
        <div class="uploads" v-if="q.platform.is.desktop">
          <div style="width: 100%">
            <SketchUploader :id="Announce.id"
                            :type="'event'"
                            @onUploaded="sketchUploaded"></SketchUploader>
          </div>

        </div>
        <q-item v-else>
          <q-item-section>
            <q-item-label caption>
              Загрузка эскиза не поддерживает мобильные устройства
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-separator spaced="1em"></q-separator>
        <q-input name="progName"
                 v-model="Announce.progName"
                 label="Название"
        ></q-input>
        <HallSelect @selected="onHallSelect"></HallSelect>
        <q-select
          v-model="Announce.pay"
          emit-value
          map-options
          label="Условия входа"
          :options="paySelect"
        >
        </q-select>
        <br>
        <template v-if="[3,4].includes(Announce.pay)">
          <q-input  type="text" v-model="Announce.ticketLink"
                    label="Ссылка на приобретение билетов"></q-input>
          <br>
          <q-input v-model="Announce.radarioEventId"
                   type="number"
                   stack-label
                   placeholder="1234567"
                   label="ID мероприятия на Radario">
            <q-tooltip>Цифры в конце ссылки на покупку билетов</q-tooltip>
          </q-input>
          <br>
          <q-card-actions>
            <q-toggle v-model="Announce.isPushkin" label="Пушкинская карта" color="green"></q-toggle>
            <q-space></q-space>
            <q-toggle v-model="Announce.isShowTicketCount" color="green" label="Остаток билетов"></q-toggle>
          </q-card-actions>

          <br>
        </template>

        <q-input type="number" v-model="Announce.age" label="Возрастные ограничения"></q-input>

        <br>
        <q-separator spaced></q-separator>
        <q-input name="evDescr" v-model="Announce.sdescr"
                 type="textarea"
                 autogrow
                 label="Краткое описание"
        ></q-input>
        <br>
        <q-input name="evText" v-model="Announce.description"
                 type="textarea"
                 autogrow
                 :debounce="300"
                 @update:model-value="updateMarkdown()"
                 label="Описание"
        ></q-input>
        <q-separator spaced="1em"></q-separator>
        <div class="uploads">
          <q-uploader
            v-model="model"
            style="width: 100%"
            label="Загрузить афишу"
            :factory="addPoster"
            ref="posterUploader"
            @uploaded="posterUploaded"
            @failed="failed"
            no-thumbnails
          />
        </div>
        <q-card-actions align="right">
          <q-btn label="Сохранить" @click="save" color="green"></q-btn>
        </q-card-actions>
      </div>
      <q-separator spaced="1em"></q-separator>
    </div>


  </div>
  <br>
  <hr>
  <br>
  <q-card v-if="false">
    <q-card-section>Список произведений:</q-card-section>
    <q-card-section>
      <q-btn icon="add" label="добавить" @click="openAddWorkDialog"></q-btn>
    </q-card-section>
  </q-card>
  <AddWorkDialog></AddWorkDialog>
</template>

<style scoped>
.btns {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.editArea {
  max-width: 1200px;
  margin: 0 auto;
  padding: 3em 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.editor {
  width: 100%;
  max-width: 700px;
}

.card {
  max-width: 270px;
}

.uploads {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  /*width: 100%;*/
}

.eventsarea {
  margin: 0 auto;
  padding: 2em;
  /*max-width: 100vw;*/
}
</style>
