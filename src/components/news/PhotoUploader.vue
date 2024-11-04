<script setup lang="ts">

import {copy, notifyError} from "src/js/myFuncts";
import {inject, onUnmounted, Ref, ref, watch} from "vue";
import {api} from "boot/axios";
import {useQuasar} from "quasar";
import {useRoute} from "vue-router";
import BtnDelete from "components/main/BtnDelete.vue";
import {myUser} from "src/js/myAuth";
import {Photo, PhotoPW} from "src/js/entry";

const apiUrl = String(process.env.API)

const q = useQuasar()
const route = useRoute()

const emit = defineEmits(['onDel'])

const entry = inject<any>('Entry')

const isPhotosCompleted = inject<() => boolean>('isPhotosCompleted', ()=>false)


const uploader = ref()
const loading = inject('loading') as Ref<boolean>

//const unlinkPhoto = inject<(id: number) => void>('unlinkPhoto', () => {})


async function unlinkAll() {
  loading.value = true
  const result = await Photo.unlinkAll(q, Number(route.params.id))
  if(result){
    entry.value.Photos = []
  }
  loading.value = false
}

function addPhoto() {
  return {

    url: Photo.getApiUrl(),
    headers: [
      {
        name: 'ACCESSTOKEN',
        value: myUser.self.AccessToken
      }
    ],
    formFields: [{
      name: 'entryId',
      value: entry.value.id
    }, {
      name: 'method',
      value: 'add'
    }]
  }
}

function uploaded(info: any) {
  console.log(info.xhr.response)
  //loadPhotos()
  uploader.value.reset()
  photoWatcher.value = true
  //save()
}

function failed(info: any) {
  console.log(info.xhr.response)
  let msg = JSON.parse(info?.xhr?.response)?.error ?? ''
  q.notify(notifyError(null, msg))
}

async function loadPhotos() {
  entry.value.Photos = await Photo.getList(q, Number(route.params.id))
  if (isPhotosCompleted() || !entry.value.Photos.length) {
    photoWatcher.value = false
  }
}

function copyCode(img: any) {
  const val = `\n![](${img.md5}.${img.ext})\n`
  copy(val, q)
}



const photoWatcher = ref(false)
let intervalId: NodeJS.Timeout|null = null;
watch(photoWatcher, (newValue) => {

  if (newValue && !intervalId) {
    intervalId = setInterval(loadPhotos, 3000);
  } else if (!newValue && intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
});

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId);
  }
})
</script>

<template>
  <div class="uploaderArea">
    <q-uploader
      style="width: 100%"
      label="Загрузить фотографии (до 20)"
      :factory="addPhoto"
      :max-file-size="50000000"
      :max-files="20"
      ref="uploader"
      @uploaded="uploaded"
      @failed="failed"
      multiple
      batch
      padding="0"
      margin="0"
      bordered
    >
    </q-uploader>
  </div>
  <q-card bordered flat class="transparent" v-if="entry.Photos && entry.Photos.length">

    <q-card-actions align="right">
      <BtnDelete throw-confirm
                 tooltip="Удалить все фотографии"
                 @onOk="unlinkAll()"
                 title="Удалить все фотографии">
      </BtnDelete>
      <q-btn v-if="false" icon="refresh" @click="photoWatcher = !photoWatcher">
        <q-tooltip>обновить статус изображений</q-tooltip>
      </q-btn>
    </q-card-actions>
    <q-card-section>
      <div class="imagesArea">
        <template v-for="(img, key) in entry.Photos" :key="key">
          <q-card>
            <template v-if="img.status === 'completed'">
              <q-img
                :ratio="96/54"
                :src="PhotoPW.srcByProps(q,img)"
              >
              </q-img>
            </template>

            <template v-else>
              <q-item>
                <q-item-section>
                  <q-inner-loading showing label="Обработка"></q-inner-loading>
                </q-item-section>
              </q-item>
            </template>


            <q-card-section>
              <div class="absolute delBthArea">
                <BtnDelete size="0.7em"
                           throw-confirm
                           @onOk="emit('onDel',img.id)"
                           title="Удалить фото"
                           tooltip="Удалить фото"
                           :loading="loading"
                >

                </BtnDelete>
              </div>

              <div class="row no-wrap">
                <q-btn
                  padding="0.5em 1em"
                  icon="content_copy"
                  label="Код"
                  @click="copyCode(img)"
                >
                </q-btn>
              </div>
            </q-card-section>
          </q-card>
        </template>
      </div>
    </q-card-section>
  </q-card>
</template>

<style scoped>
.delBthArea {
  top: 0;
  right: 0.5em;
  transform: translateY(-50%);
}
</style>
