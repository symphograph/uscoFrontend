<script setup>

import {useQuasar} from 'quasar'
import {inject, onMounted, provide, ref} from 'vue'
import {useRoute, useRouter} from 'vue-router'
import SketchUploader from "components/announсes/SketchUploader.vue";
import PhotoUploader from "components/news/PhotoUploader.vue";
import BtnDelete from "components/main/BtnDelete.vue";
import {myAnnounce} from "src/js/announce";
import {SketchBase} from "src/js/img";
import {Entry, Photo, Sketch} from "src/js/entry";
import SketchImg from "components/SketchImg.vue";
import BtnHideOrShow from "components/main/buttons/BtnHideOrShow.vue";


const entry = inject('Entry')

const q = useQuasar()
const route = useRoute()
const router = useRouter()
const emit = defineEmits(['uploaded'])
const announces = ref([])
const loadingAnnounces = ref(false)
const loading = ref(false)
provide('loading', loading)

const pwUrl = ref('')
provide('pwUrl', pwUrl)

function sketchUrl() {
  if (pwUrl.value) {
    return pwUrl.value
  }

  return SketchBase.srcByProps(q, entry.value.sketch)
}

async function delSketch() {
  loading.value = true
  if (await Sketch.unlink(q, route.params.id)) {
    emit('uploaded')
  }
  loading.value = false
}

async function unlinkPhoto(id) {
  loading.value = true
  const result = await Photo.unlink(q, route.params.id, id)
  if (result){
    let idx = entry.value.Photos.findIndex(el => el.id === id)
    let img = entry.value.Photos[idx]
    removeImageCode(img.md5)
    entry.value.Photos.splice(idx, 1)
  }
  loading.value = false
}

provide('unlinkPhoto', unlinkPhoto)

function removeImageCode(md5) {
  const regex = new RegExp(`!\\[]\\(${md5}\\.[a-zA-Z0-9]+\\)`, 'g');
  const oldText = entry.value.markdown
  entry.value.markdown = entry.value.markdown.replace(regex, '')
  if (entry.value.markdown !== oldText) {
    updateMarkdown()
  }
}

async function update() {
  loading.value = true
  if (await Entry.update(q, entry.value)) {
    emit('uploaded')
  }

  loading.value = false
}

async function delEntry() {
  loading.value = true

  const result = await Entry.del(q, entry.value.id)
  if (result) router.push({path: '/news/all'})

  loading.value = false
}

async function loadFutureAnnounces() {
  loadingAnnounces.value = true
  announces.value = await myAnnounce.listFuture(q, entry.value.date)
  loadingAnnounces.value = false
}

async function hideOrShow() {
  loading.value = true
  const result = await Entry.hideOrShow(q, entry.value.id, !entry.value.isShow)
  if(result) entry.value.isShow = !entry.value.isShow
  loading.value = false
}

async function updateMarkdown() {
  const result = await Entry.updateMarkdown(q, entry.value.id, entry.value.markdown)
  if (result) entry.value.parsedMD = result
}

provide('updateMarkdown', updateMarkdown)

function isPhotosCompleted() {
  if (!entry.value.Photos || entry.value.Photos.length === 0) {
    return false;
  }

  return entry.value.Photos.every(photo => photo.status === 'completed');
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

  <q-input label="Заголовок"
           type="text"
           class="inputArea"
           v-model="entry.title"
  ></q-input>

  <div id="descr" style="
      padding: 1em;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap">

    <br><br><br>
    <div class="nimg_block" style="position: relative">
      <div class="delBtnArea">
        <BtnDelete title="Удалить эскиз"
                   v-if="!pwUrl"
                   tooltip="Удалить эскиз"
                   throw-confirm
                   danger
                   @onOk="delSketch()"
        >
        </BtnDelete>
      </div>
      <SketchImg :url="sketchUrl()"></SketchImg>
    </div>

    <div style="
        width: calc(100% - 260px);
        padding: 0 1em;
        margin: 1em auto 0;
        min-width: 300px;">
      <SketchUploader :id="entry.id"
                      type="entry"
                      @onUploaded="sketchUploaded"></SketchUploader>

    </div>
  </div>
  <div class="inputArea">
    <q-input label="Краткое описание"
             style="width: 100%"
             type="textarea"
             autogrow
             v-model="entry.descr"
             outlined
    ></q-input>
  </div>

  <div class="inputArea">
    <div class="input">
      <q-input type="date"
               v-model="entry.date"
               label="Дата публикации"
               @change="loadFutureAnnounces()"
      ></q-input>
      <q-select v-model="entry.announceId"
                :loading="loadingAnnounces"
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
              <SketchImg :url="SketchBase.srcByProps(q, scope.opt?.sketch)"></SketchImg>
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
              <SketchImg :url="SketchBase.srcByProps(q, scope.opt?.sketch)"></SketchImg>
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
      <template v-if="!entry.announceId">
        <q-input v-model="entry.refName"
                 label="Текст ссылки на источник"
                 type="text"
        ></q-input>
        <q-input v-model="entry.refLink"
                 label="Адрес ссылки на источник"
                 type="text"
                 placeholder="https://example.com"
        >
          <template v-slot:append>
            <q-toggle v-model="entry.isExternal" color="green">
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
        <template v-for="categ in entry.categs" :key="categ.id">
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
  <template v-if="!entry.announceId">
    <PhotoUploader @onDel="unlinkPhoto"></PhotoUploader>

    <q-separator spaced="2em"></q-separator>

    <q-input label="Текст новости"
             type="textarea"
             autogrow
             outlined
             input-style="{padding: 5em}"
             padding="1em"
             v-model="entry.markdown"
             :debounce="300"
             @update:model-value="updateMarkdown()"
             dense
    >
    </q-input>
  </template>

  <div style="display: flex; justify-content: flex-end; grid-gap:1em; padding: 1em;">

    <BtnDelete
               :loading="loading"
               title="Удалить новость"
               tooltip="Удалить новость"
               danger
               flat
               @onOk="delEntry()"
               throw-confirm></BtnDelete>

    <BtnHideOrShow :is-show="entry.isShow"
                   @onOk="hideOrShow()"
                   :loading="loading"
                   throw-confirm></BtnHideOrShow>

    <q-btn label="Сохранить"
           :loading="loading"
           icon-right="save"
           :flat="q.dark.isActive"
           color="green"
           @click="update()"><q-tooltip>Сохранить</q-tooltip></q-btn>
  </div>
  <br><br>

  <br><br>

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

.delBtnArea {
  position: absolute;
  z-index: 1;
  top: 0.7em;
  right: 0.7em;
}
</style>
