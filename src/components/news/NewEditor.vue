<script setup>

import {useQuasar} from 'quasar'
import {api} from 'boot/axios'
import {computed, inject, onMounted, provide, ref} from 'vue'
import {useRoute, useRouter} from 'vue-router'
import { imgUrl, notifyError, notifyOK} from "src/js/myFuncts";
import SketchUploader from "components/announses/SketchUploader.vue";
import PhotoUploader from "components/news/PhotoUploader.vue";


const Entry = inject('Entry')

const apiUrl = String(process.env.API)
const q = useQuasar()
const route = useRoute()
const router = useRouter()
const emit = defineEmits(['uploaded'])
const announces = ref([])
const selectedAnnounce = computed(() => {
  if(!announces.value.length) return null
  return announces.value.find(el => el.id === Event.value?.announceId) || null
})

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
  if(!Entry.value.sketch) {
    return 'error.err'
  }
  return imgUrl(apiUrl, Entry.value.sketch.md5, Entry.value.sketch.ext, size)

}

function delPw() {

  api.post(apiUrl + 'api/news/sketch.php', {
    params: {
      method: 'unlink',
      id: route.params.id
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

function unlinkPhoto(id) {
  api.post(apiUrl + 'api/news/photo.php', {
    params: {
      entryId: route.params.id,
      imgId: id,
      method: 'unlink'
    }
  })
    .then((response) => {
      if (!!!response?.data?.result) {
        throw new Error();
      }

      let idx = Entry.value.Photos.findIndex(el => el.id === id)
      let img = Entry.value.Photos[idx]
      removeImageCode(img.md5)
      Entry.value.Photos.splice(idx, 1)

    })
    .catch((error) => {
      q.notify(notifyError(error))
    })
}
provide('unlinkPhoto', unlinkPhoto)

function removeImageCode(md5) {
  const regex = new RegExp(`!\\[]\\(${md5}\\.[a-zA-Z0-9]+\\)`, 'g');
  const oldText = Entry.value.markdown
  Entry.value.markdown = Entry.value.markdown.replace(regex, '')
  if(Entry.value.markdown !== oldText) {
    updateMarkdown()
  }
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
      entry: Entry.value,
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
      entryId: Entry.value.id,
      force: false
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

function loadFutureAnnounces() {

  api.post(apiUrl + 'api/event/announce.php', {
    params: {
      method: 'futureList',
      date: Entry.value.date
    }
  })
    .then((response) => {
      if (!!!response?.data?.result) {
        throw new Error();
      }
      announces.value = []
      announces.value = response?.data?.data || []
    })
    .catch((error) => {
      q.notify(notifyError(error))
    })
}

function hideOrShow() {
  api.post(apiUrl + 'api/news/entry.php', {
    params: {
      method: Entry.value.isShow ? 'hide' : 'show',
      entryId: Entry.value.id,
    }
  })
    .then((response) => {
      if (!!!response?.data?.result) {
        throw new Error();
      }
      Entry.value.isShow = !Entry.value.isShow
    })
    .catch((error) => {
      q.notify(notifyError(error))
    })
    .finally(() => {
    })
}

function updateMarkdown() {
  api.post(apiUrl + 'api/news/entry.php', {
    params: {
      method: 'updateMarkdown',
      id: Entry.value.id,
      markdown: Entry.value.markdown,
    }
  })
    .then((response) => {
      if (!!!response?.data?.result) {
        throw new Error();
      }
      Entry.value.parsedMD = response?.data.data

    })
    .catch((error) => {
      // q.notify(notifyError(error, 'hhhh'))
    })
}
provide('updateMarkdown', updateMarkdown)

function isPhotosCompleted() {
  if (!Entry.value.Photos || Entry.value.Photos.length === 0) {
    return false;
  }

  return Entry.value.Photos.every(photo => photo.status === 'completed');
}
provide('isPhotosCompleted', isPhotosCompleted)


function sketchUploaded() {
  emit('uploaded')
}

defineExpose({
  unlinkPhoto
})

onMounted(() => {
  loadFutureAnnounces()
  //photoWatcher.value = true
})
</script>

<template>
  <div v-if="Entry" class="newsarea">
    <q-input label="Заголовок"
             type="text"
             v-model="Entry.title"
    ></q-input>
    <br>
    <div id="descr" style="
      padding: 1em;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap">
      <div class="nimg_block" style="position: relative">
        <q-img :ratio="16/9" :src="sketchUrl()" fit="fill">
          <template v-slot:error>
            <img src="/img/news/default_sketch.svg"/>
          </template>
        </q-img>
        <q-btn
          v-if="!pwUrl"
          size="0.7em"
          round
          color="red"
          icon="delete"
          style="transform: translateY(-50%); right: 1em; z-index: 100; position: absolute; top: 2em"
          @click="delPw(Entry.img)"
        ></q-btn>
      </div>

      <div style="
        width: calc(100% - 260px);
        padding: 0 1em;
        margin: 1em auto 0;
        min-width: 300px;">
        <SketchUploader :id="Entry.id"
                        :type="'news'"
                        @onUploaded="sketchUploaded"></SketchUploader>

      </div>
    </div>
    <div class="inputArea">
      <q-input label="Краткое описание"
               style="width: 100%"
               type="textarea"
               autogrow
               v-model="Entry.descr"
               outlined
      ></q-input>
    </div>

    <div class="inputArea">
      <div class="input">
        <q-input type="date"
                 v-model="Entry.date"
                 label="Дата публикации"
                 @change="loadFutureAnnounces()"
        ></q-input>
        <q-select v-model="Entry.announceId"
                  :options="announces"
                  clearable
                  emit-value
                  map-options
                  option-value="id"
                  option-label="progName"
                  label="Перенаправлять на анонс"
                  stack-label
        >
          <template v-slot:selected-item="scope" v-if="announces.length">
            <q-item v-if="scope.opt">
              <q-item-section avatar>
                <q-img width="100px" :src="imgUrl(apiUrl,scope.opt?.sketch?.md5,scope.opt?.sketch?.ext,100)"
                       :ratio="16/9"
                       fit="fill"
                ></q-img>
              </q-item-section>
              <q-item-section>
                <q-item-label>
                  {{ scope.opt.progName }}
                </q-item-label>
                <q-item-label caption>
                  {{ scope.opt.eventTime }}
                </q-item-label>
              </q-item-section>
            </q-item>
          </template>
          <template v-slot:option="scope" v-if="announces.length">
              <q-item v-bind="scope.itemProps"
                      dense
                      class="optionItem"
                      v-if="scope.opt.isShow">
                <q-item-section avatar>
                  <q-img width="100px" :src="imgUrl(apiUrl,scope.opt?.sketch?.md5,scope.opt?.sketch?.ext,100)"
                         :ratio="16/9"
                         fit="fill"
                  ></q-img>
                </q-item-section>
                <q-item-section>
                  <q-item-label>
                    {{ scope.opt.progName }}
                  </q-item-label>
                  <q-item-label caption>
                    {{ scope.opt.eventTime }}
                  </q-item-label>
                </q-item-section>
              </q-item>
          </template>
        </q-select>
        <template v-if="!Entry.announceId">
          <q-input v-model="Entry.refName"
                   label="Текст ссылки на источник"
                   type="text"
          ></q-input>
          <q-input v-model="Entry.refLink"
                   label="Адрес ссылки на источник"
                   type="text"
                   placeholder="https://example.com"
          >
            <template v-slot:append>
              <q-toggle v-model="Entry.isExternal" color="green">
                <q-tooltip>При клике в ленте открывать источник</q-tooltip>
              </q-toggle>
            </template>
          </q-input>
        </template>

      </div>
      <div id="categs"
           class="input">
        <q-list bordered padding>
          <q-item-label header>Показывать в категориях</q-item-label>
          <template v-for="categ in Entry.categs" :key="categ.id">
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
    </div>
    <template v-if="!Entry.announceId">
      <PhotoUploader></PhotoUploader>

      <q-separator spaced="2em"></q-separator>

      <q-input label="Текст новости"
               type="textarea"
               autogrow
               outlined
               input-style="{padding: 5em}"
               padding="1em"
               v-model="Entry.markdown"
               :debounce="300"
               @update:model-value="updateMarkdown()"
               dense
      >
      </q-input>
    </template>



    <div style="display: flex; justify-content: flex-end; grid-gap:1em; padding: 1em;">
      <q-btn label="Удалить" color="red" @click="delEntry()"></q-btn>
      <q-btn label="Скрыть" color="orange" v-if="Entry.isShow" outline @click="hideOrShow()">
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

.optionItem {
  width: 30em;
}
</style>
