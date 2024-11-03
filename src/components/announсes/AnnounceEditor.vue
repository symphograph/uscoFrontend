<script setup>
import 'src/css/dialog.css'
import DateTime from 'components/announсes/DateTime.vue'
import {useQuasar} from 'quasar'
import {api} from 'boot/axios'
import AnnounceCard from 'components/announсes/AnnounceCard.vue'
import {inject, onMounted, onUnmounted, provide, ref, watch} from 'vue'
import {useRoute, useRouter} from 'vue-router'
import {notifyError, notifyOK} from "src/js/myFuncts";
import SketchUploader from "components/announсes/SketchUploader.vue";
import {myUser} from "src/js/myAuth";
import AddWorkDialog from 'components/announсes/AddWorkDialog.vue';
import HallSelect from 'components/hall/HallSelect.vue';
import {myAnnounce} from "src/js/entry";
import WorkList from "components/announсes/WorkList.vue";

const apiUrl = String(process.env.API)
const q = useQuasar()
const route = useRoute()
const router = useRouter()

const announce = inject('Announce')
const selectedHall = ref(announce.value.Hall)
provide('selectedHall', selectedHall)

function onHallSelect(hall) {
  console.log(hall)
  announce.value.hallId = hall.id
  announce.value.Hall = hall
}

const pwUrl = ref('')
provide('pwUrl', pwUrl)

const emit = defineEmits(['reload', 'posterUploaded'])

const model = {}

function test() {
  //console.log(announce)
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

const loadingAuthors = ref(false)
provide('loadingAuthors', loadingAuthors)

const selectedAuthorId = ref(0)
provide('selectedAuthorId', selectedAuthorId)

const selectedAuthor = ref(null)
provide('selectedAuthor', selectedAuthor)

watch(selectedAuthorId, () => {
  selectedAuthor.value = AuthorSelectList.value.find(el => el.id === selectedAuthorId.value)
})


function addPoster(files) {
  return {
    url: apiUrl + 'epoint/event/poster.php',
    headers: [
      {
        name: 'ACCESSTOKEN',
        value: myUser.self.AccessToken
      }
    ],
    formFields: [
      {
        name: 'id',
        value: announce.value.id
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
  myAnnounce.save(q, announce.value)
  //rAnnounceCard.value.saveData()
}

function IamDeleted() {
  router.push({path: '/announces'})
}

function reload() {
  emit('reload')
}

function onDelSketch() {
  delete announce.value.sketch
  delete announce.value.sketchId
}

async function updateMarkdown() {
  const result = await myAnnounce.updateMarkdown(q, announce.value.id, announce.value.description)
  if(result) {
    announce.value.parsedMD = result
  }
}

function loadPoster() {
  api.post(apiUrl + 'epoint/event/poster.php', {
    params: {
      method: 'get',
      announceId: route.params.evid
    }
  })
    .then((response) => {
      if (!!!response?.data?.result) {
        throw new Error();
      }

      announce.value.poster = response?.data?.data ?? null
      if (announce.value?.poster?.status !== 'process') {
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

const toggleWorks = ref(false)

defineExpose({

})

onMounted(() => {
  //photoWatcher.value = true
})

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId);
  }

})
</script>

<template>
  <div v-if="announce" class="eventsarea">
    <div class="editArea">
      <div class="card" v-if="q.platform.is.desktop">
        <AnnounceCard
          v-if="announce.Hall"
          @IamDeleted="IamDeleted"
          @newAnnounce="reload"
          @delSketch="onDelSketch"
          ref="rAnnounceCard"
          :announce="announce"
          :pwUrl="pwUrl"
        >
        </AnnounceCard>
      </div>
      <div class="editor">
        <div style="display: flex; justify-content: space-between">
          <DateTime v-model:date="announce.eventTime" @update:date="test()"></DateTime>
        </div>
        <br><hr>
        <div class="uploads" v-if="q.platform.is.desktop">
          <div style="width: 100%">
            <SketchUploader :id="announce.id"
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
                 v-model="announce.progName"
                 label="Название"
        ></q-input>
        <HallSelect @selected="onHallSelect"></HallSelect>
        <q-select
          v-model="announce.pay"
          emit-value
          map-options
          label="Условия входа"
          :options="paySelect"
        >
        </q-select>
        <br>
        <template v-if="[3,4].includes(announce.pay)">
          <q-input  type="text" v-model="announce.ticketLink"
                    label="Ссылка на приобретение билетов"></q-input>
          <br>
          <q-input v-model="announce.radarioEventId"
                   type="number"
                   stack-label
                   placeholder="1234567"
                   label="ID мероприятия на Radario">
            <q-tooltip>Цифры в конце ссылки на покупку билетов</q-tooltip>
          </q-input>
          <br>
          <q-card-actions>
            <q-toggle v-model="announce.isPushkin" label="Пушкинская карта" color="green"></q-toggle>
            <q-space></q-space>
            <q-toggle v-model="announce.isShowTicketCount" color="green" label="Остаток билетов"></q-toggle>
          </q-card-actions>

          <br>
        </template>

        <q-input type="number" v-model="announce.age" label="Возрастные ограничения"></q-input>

        <br>
        <q-separator spaced></q-separator>
        <q-input name="evDescr" v-model="announce.sdescr"
                 type="textarea"
                 autogrow
                 label="Краткое описание"
        ></q-input>
        <br>
        <q-input name="evText" v-model="announce.description"
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
          <q-btn label="Сохранить" @click="save" color="green" icon-right="save" flat></q-btn>
        </q-card-actions>
      </div>
      <q-separator spaced="1em"></q-separator>
    </div>


  </div>

  <q-separator></q-separator>
  <q-expansion-item label="Список произведений" v-model="toggleWorks">
    <WorkList :announce="announce" v-if="toggleWorks"></WorkList>
  </q-expansion-item>
  <q-separator></q-separator>
  <br>
  <hr>
  <br>

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
