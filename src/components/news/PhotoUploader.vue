<script setup>

import {copy, imgUrl, notifyError} from "src/js/myFuncts";
import {inject, onUnmounted, ref, watch} from "vue";
import {api} from "boot/axios";
import {useQuasar} from "quasar";
import {useRoute} from "vue-router";
import BtnDelete from "components/main/BtnDelete.vue";
import {myUser} from "src/js/myAuth";

const apiUrl = String(process.env.API)

const q = useQuasar()
const route = useRoute()

const Entry = inject('Entry')

const isPhotosCompleted = inject('isPhotosCompleted')


const uploader = ref(null)

const unlinkPhoto = inject('unlinkPhoto')

function unlinkAll() {
  api.post(apiUrl + 'api/news/photo.php', {
    params: {
      entryId: route.params.id,
      method: 'unlinkAll'
    }
  })
    .then((response) => {
      if (!!!response?.data?.result) {
        throw new Error();
      }

      Entry.value.Photos = []

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
        value: myUser.self.AccessToken
      }
    ],
    formFields: [{
      name: 'entryId',
      value: Entry.value.id
    }, {
      name: 'method',
      value: 'add'
    }]
  }
}

function uploaded(info) {
  console.log(info.xhr.response)
  loadPhotos()
  uploader.value.reset()
  photoWatcher.value = true
  //save()
}

function failed(info) {
  console.log(info.xhr.response)
  let msg = JSON.parse(info?.xhr?.response)?.error ?? ''
  q.notify(notifyError(null, msg))
}

function loadPhotos() {
  api.post(apiUrl + 'api/news/photo.php', {
    params: {
      method: 'list',
      entryId: route.params.id
    }
  })
    .then((response) => {
      if (!!!response?.data?.result) {
        throw new Error();
      }
      Entry.value.Photos = response?.data?.data ?? []
      if (isPhotosCompleted()) {
        photoWatcher.value = false
      }
    })
    .catch((error) => {
      q.notify(notifyError(error))
    })
    .finally(() => {

    })
}

function copyCode(img) {
  const val = `\n![](${img.md5}.${img.ext})\n`
  copy(val, q)
}



const photoWatcher = ref(false)
let intervalId = null;
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
  <q-card bordered flat class="transparent" v-if="Entry.Photos && Entry.Photos.length">

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
        <template v-for="(img, key) in Entry.Photos" :key="key">
          <q-card>
            <template v-if="img.status === 'completed'">
              <q-img
                :ratio="96/54"
                :src="imgUrl(apiUrl,img.md5,img.ext, 260)"
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
                           @onOk="unlinkPhoto(img.id)"
                           title="Удалить фото"
                           tooltip="Удалить фото"
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
