<script setup>
import {copyToClipboard} from 'quasar'
import {useQuasar} from 'quasar'
import {api} from 'boot/axios'
import {inject, provide, ref} from 'vue'
import {useRoute, useRouter} from 'vue-router'
import {notifyError, notifyOK} from "src/myFuncts";
import SketchUploader from "components/announses/SketchUploader.vue";


const newDataE = inject('newData')

const apiUrl = String(process.env.API)
const q = useQuasar()
const route = useRoute()
const router = useRouter()
const emit = defineEmits(['uploaded'])
const uploader = ref(null)
const AccessToken = inject('AccessToken')

const categs = ref([
  {
    id: 1,
    name: 'Новости ЮССО',
    caption: 'Новости оркестра',
    url: '/news/usco',
    ava: '/img/logo/logo_init.svg',
    icon: '',
    checked: false
  },
  {
    id: 2,
    name: 'Звезды Эвтерпы',
    caption: 'Международный фестиваль',
    url: '/news/euterpe',
    ava: '/img/logo/logo_init.svg',
    icon: '',
    checked: false
  },
  {
    id: 3,
    name: 'Новости партнеров',
    caption: 'Прочие новости',
    url: '/news/other',
    ava: '',
    icon: 'volunteer_activism',
    checked: false
  }
])

const pwUrl = ref('')
provide('pwUrl', pwUrl)

function sketchUrl() {
  if (pwUrl.value) {
    return pwUrl.value
  }
  let size = q.platform.is.mobile ? 1080 : 260

  return apiUrl
    + '/img/entry/sketch'
    + '/' + size
    + '/entry_'
    + newDataE.value.id
    + '.jpg'
    + '?ver='
    + (newDataE.value?.verString ?? 'jhj')
}

function copy(val) {
  val = '![](' + val + ')'
  copyToClipboard(val)
    .then(() => {
      q.notify({
        color: 'positive',
        position: 'center',
        message: 'Скопировано',
        icon: 'content_copy',
        timeout: 1
      })
    })
    .catch(() => {
      // fail
    })
}

function delImg(fileName, key) {

  api.post(apiUrl + 'api/news/photo.php', {
    params: {
      entryId: route.params.id,
      fileName: fileName,
      method: 'del'
    }
  })
    .then((response) => {
      if (!!!response?.data?.result) {
        throw new Error();
      }
      q.notify(notifyOK(response?.data?.result ?? ''))
      newDataE.value.Images.splice(key, 1)
      emit('uploaded')
    })
    .catch((error) => {
      q.notify(notifyError(error))
    })
}

function delPw() {

  api.post(apiUrl + 'api/news/sketch.php', {
    params: {
      method: 'del',
      entryId: route.params.id
    }
  })
    .then((response) => {
      if (!!!response?.data?.result) {
        throw new Error();
      }
      emit('uploaded')
    })
    .catch((error) => {
      q.notify(notifyError(error))
    })
}

function addPhoto() {
  return {
    url: apiUrl + 'api/news/photo.php',
    headers: [
      {
        name: 'ACCESSTOKEN',
        value: AccessToken.value
      }
    ],
    formFields: [{
      name: 'entryId',
      value: newDataE.value.id
    }, {
      name: 'method',
      value: 'add'
    }]
  }
}

function uploaded() {
  uploader.value.reset()
  save()
}

function failed(info) {
  let msg = JSON.parse(info?.xhr?.response)?.error ?? ''
  q.notify(notifyError(null, msg))
}

function categsFilter() {
  const categsF = Object.keys(categs.value)
  let arr = []
  categsF.forEach(key => {
    arr[categs.value[key].id] = categs.value[key].checked
  })
  return arr
}

function save(addNew = 0) {

  api.post(apiUrl + 'api/news/entry.php', {
    params: {
      method: 'update',
      entry: newDataE.value,
      addNew: addNew,
      categs: categsFilter()
    }
  })
    .then((response) => {
      q.notify(notifyOK(response?.data?.result ?? ''))
      emit('uploaded')
    })
    .catch((error) => {
      q.notify(notifyError(error))
    })
}

function delEntry() {

  api.post(apiUrl + 'api/news/entry.php', {
    params: {
      method: 'del',
      entryId: newDataE.value.id,
    }
  })
    .then((response) => {
      if (!!!response?.data?.result) {
        throw new Error();
      }
      router.push({path: '/news/all'})
    })
    .catch((error) => {
      q.notify(notifyError(error))
    })
}

function hideOrShow() {
  api.post(apiUrl + 'api/news/entry.php', {
    params: {
      method: newDataE.value.isShow ? 'hide' : 'show',
      entryId: newDataE.value.id,
    }
  })
    .then((response) => {
      if (!!!response?.data?.result) {
        throw new Error();
      }
      newDataE.value.isShow = !newDataE.value.isShow
    })
    .catch((error) => {
      q.notify(notifyError(error))
    })
    .finally(() => {
    })
}
</script>

<template>
  <div v-if="newDataE" class="newsarea">
    <q-input label="Заголовок"
             type="text"
             v-model="newDataE.title"
    ></q-input>
    <br>
    <div id="descr" style="
      padding: 1em;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap">
      <div class="nimg_block" style="position: relative">
        <q-img :ratio="1920/1080"
               :src="sketchUrl()"
               fit="fill"
               :pwUrl="pwUrl"
        ></q-img>
        <q-btn
          v-if="!pwUrl"
          size="0.7em"
          round
          color="red"
          icon="delete"
          style="transform: translateY(-50%); right: 1em; z-index: 100; position: absolute; top: 2em"
          @click="delPw(newDataE.img)"
        ></q-btn>
      </div>

      <div style="
        width: calc(100% - 260px);
        padding: 0 1em;
        margin: 1em auto 0;
        min-width: 300px;">
        <SketchUploader :id="newDataE.id"
                        :type="'news'"
                        @onUploaded="uploaded"></SketchUploader>

      </div>
    </div>
    <div class="inputArea">
      <q-input label="Краткое описание"
               style="width: 100%"
               type="textarea"
               v-model="newDataE.descr"
               outlined
      ></q-input>
    </div>

    <div class="inputArea">
      <div class="input">
        <q-input type="date"
                 v-model="newDataE.date"
                 label="Дата публикации"
        ></q-input>
        <q-input v-model="newDataE.refName"
                 label="Текст ссылки на источник"
                 type="text"
        ></q-input>
        <q-input v-model="newDataE.refLink"
                 label="Адрес ссылки на источник"
                 type="text"
                 placeholder="https://example.com"
        ></q-input>
      </div>
      <div id="categs"
           class="input">
        <q-list bordered padding>
          <q-item-label header>Показывать в категориях</q-item-label>
          <template v-for="categ in newDataE.categs" :key="categ.id">
            <q-item tag="label" v-ripple>
              <q-item-section>
                <q-item-label>{{ categ.label }}</q-item-label>
                <q-item-label caption>{{ categ.caption }}</q-item-label>
              </q-item-section>
              <q-item-section side top>
                <q-toggle color="green" v-model="categ.checked" val="friend"/>
              </q-item-section>
            </q-item>
          </template>
        </q-list>
      </div>
      <div id="uploaderArea2"
           class="input">
        <div class="uploaderArea">
          <q-uploader
            input-style="max-width: 300px; padding: 0"
            label="Загрузить фотографии"
            :factory="addPhoto"
            max-file-size="50000000"
            ref="uploader"
            @uploaded="uploaded"
            @failed="failed"
            multiple
            batch
            padding="0"
            margin="0"
            bordered

          />
        </div>
      </div>
    </div>
    <div class="imagesArea">
      <template v-for="(img, key) in newDataE.Images" :key="key">
        <q-card>
          <q-img
            :ratio="96/54"
            :src="apiUrl + '/img/entry/photo/' + newDataE.id + '/260/'  + img"
          >
          </q-img>
          <q-card-section>
            <q-btn
              size="0.7em"
              round
              color="red"
              icon="delete"
              class="absolute"
              style="top: 0; right: 0.5em; transform: translateY(-50%);"
              @click="delImg(img,key)"
            ></q-btn>
            <div class="row no-wrap">
              <q-btn
                padding="0.5em 1em"
                icon="content_copy"
                label="Код"
                @click="copy(img)"
              >
              </q-btn>
            </div>
          </q-card-section>
        </q-card>
      </template>
    </div>
    <q-input label="Текст новости"
             type="textarea"
             outlined
             input-style="{padding: 5em}"
             padding="1em"
             v-model="newDataE.markdown"
             dense
    ></q-input>
    <div style="display: flex; justify-content: flex-end; grid-gap:1em; padding: 1em;">
      <q-btn label="Удалить" color="red" @click="delEntry()"></q-btn>
      <q-btn label="Скрыть" color="orange" v-if="newDataE.isShow" outline @click="hideOrShow()">
      </q-btn>
      <q-btn label="Опубликовать" color="green" outline v-else @click="hideOrShow()"></q-btn>
      <q-btn label="Сохранить" color="green" @click="save(0)"></q-btn>
    </div>
    <br><br>

    <br><br>
  </div>
  <br><br>

</template>

<style scoped>
.uploaderArea {
  padding: 1em;
}

.input {
  width: 100%;
  max-width: 360px;
}

.inputArea {
  width: 100%;
  padding: 1em;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  border: 1px lightgray solid;
  border-radius: 0.5em;
  margin: 2em 0;
}

.nimg_block {
  width: 260px;
  height: 146px;
  overflow: hidden;
  box-shadow: 1px 2px 2px #555353;
  margin: 0 auto;
}

.nimg_block:hover {
  box-shadow: 1px 2px 5px #000000;
}
</style>
