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
      <div class="nimg_block">
        <q-img :ratio="1080/684"
               :src="apiUrl + newDataE.img"
        ></q-img>
      </div>
      <q-btn
        size="0.7em"
        round
        color="red"
        icon="delete"
        class="absolute"
        style="transform: translateY(-50%);"
        @click="delPw(newDataE.img)"
      ></q-btn>
      <div style="
      width: calc(100% - 260px);
      padding: 0 1em;
      margin: 1em auto 0;
      min-width: 300px;"
      >
        <q-input label="Краткое описание"
                 type="textarea"
                 v-model="newDataE.descr"
                 outlined
        ></q-input>
      </div>
    </div>

    <div class="inputArea">
      <div class="input">
        <q-input
          type="date"
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
          <template v-for="tab in categs" :key="tab.id">
            <q-item tag="label" v-ripple>
              <q-item-section>
                <q-item-label>{{ tab.name }}</q-item-label>
                <q-item-label caption>{{ tab.caption }}</q-item-label>
              </q-item-section>
              <q-item-section side top>
                <q-toggle color="green" v-model="newDataE.categs[tab.id]" val="friend"/>
              </q-item-section>
            </q-item>
          </template>
        </q-list>
      </div>
      <div id="uploaderArea"
           class="input">
        <div class="uploaderArea">
          <q-uploader
            label="Загрузить эскиз"
            :factory="factoryFnMini"
            max-file-size="50000000"
            ref="uploader"
            @uploaded="uploaded"
            @failed="failed"
            padding="0"
            margin="0"
            bordered

          />
        </div>
      </div>
      <div id="uploaderArea2"
           class="input">
        <div class="uploaderArea">
          <q-uploader
            input-style="max-width: 300px; padding: 0"
            label="Загрузить фотографии"
            :factory="factoryFn"
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
            :src="apiUrl + '/img/entry/1080/' + newDataE.id + '/'  + img.fileName"
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
              @click="delImg(img.fileName,key)"
            ></q-btn>
            <div class="row no-wrap">
              <q-btn
                padding="0.5em 1em"
                @click="copy(img.fileName)"
              >
                <q-icon name="content_copy"></q-icon>
                Код вставки
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
    <br><br>
    <q-btn label="Сохранить" @click="save(0)"></q-btn>
    <br><br>
  </div>
  <br><br>

</template>

<script setup>
import {copyToClipboard} from 'quasar'
import {useQuasar} from 'quasar'
import {api} from 'boot/axios'
import {inject, ref} from 'vue'
import {useRoute} from 'vue-router'
import {notifyError, notifyOK} from "src/myFuncts";


const newDataE = inject('newData')

const apiUrl = String(process.env.API)
const q = useQuasar()
const route = useRoute()
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


function copy(val) {
  val = '\n![](' + val + ')'
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

function delImg(img, key) {

  api.post(apiUrl + 'api/set/news/delimg.php', {
    params: {
      id: route.params.id,
      img: img
    }
  })
    .then((response) => {
      q.notify(notifyOK(response?.data?.result ?? ''))
      newDataE.value.Images.splice(key, 1)
      emit('uploaded')
    })
    .catch((error) => {
      q.notify(notifyError(error))
    })
}

function delPw(img) {

  api.post(apiUrl + 'api/set/news/delpw.php', {
    params: {
      id: route.params.id,
      img: img
    }
  })
    .then((response) => {
      newDataE.value.img = '/img/entry/default.svg'
    })
    .catch((error) => {
      q.notify(notifyError(error))
    })
}

function factoryFnMini() {
  return {
    url: apiUrl + 'api/upload/entrypw.php',
    headers: [
      {
        name: 'ACCESSTOKEN',
        value: AccessToken.value
      }
    ],
    formFields: [{
      name: 'id',
      value: newDataE.value.id
    }]
  }
}

function factoryFn() {
  return {
    url: apiUrl + 'api/upload/entryimg.php',
    headers: [
      {
        name: 'ACCESSTOKEN',
        value: AccessToken.value
      }
    ],
    formFields: [{
      name: 'id',
      value: newDataE.value.id
    }]
  }
}

function uploaded(info) {
  q.notify(notifyOK('Загружено'))
  emit('uploaded')
  uploader.value.reset()
}

function failed (info) {
  let msg = JSON.parse(info?.xhr?.response)?.error ?? ''
  q.notify(notifyError(null ,msg))
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

  api.post(apiUrl + 'api/set/news/entry.php', {
    params: {
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


</script>

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
  height: 162px;
  overflow: hidden;
  box-shadow: 1px 2px 2px #555353;
  margin: 0 auto;
}

.nimg_block:hover {
  box-shadow: 1px 2px 5px #000000;
}
</style>
