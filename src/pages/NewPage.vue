<script setup>
import {useMeta, useQuasar} from 'quasar'
import {api} from 'boot/axios'
import NewEditor from 'components/news/NewEditor.vue'
import {inject, onMounted, provide, ref} from 'vue'
import {useRoute} from 'vue-router'
import {notifyError} from "src/myFuncts";

const id = ref(0)
const newData = ref(null)
provide('newData', newData)

const q = useQuasar()
const apiUrl = String(process.env.API)
const route = useRoute()
const editMode = inject('editMode')
const pTitle = ref('Новость')
const isError = ref(false)

useMeta(() => {
  return {
    title: pTitle.value
  }
})



function ratio(fileName) {
  let img = findImg(fileName)
  if (img[0].width > img[0].height) {
    return 1920 / 1080
  }
  if (img[0].width <= img[0].height) {
    return 1080 / 1920
  }
}

function findImg(fileName) {
  return newData.value.Images.filter(item => {
    return item.fileName.includes(fileName);
  });
}

function imgUrl(imgFileName) {
  return apiUrl + '/img/entry/photo/' + newData.value.id + '/1080/' + imgFileName;
}

function loadData() {
  api.post(apiUrl + 'api/news/entry.php', {
    params: {
      method: 'get',
      id: route.params.id
    }
  })
    .then((response) => {
      if (!!!response?.data?.result) {
        throw new Error();
      }
      newData.value = response?.data?.data ?? null
      pTitle.value = newData?.value?.title ?? ''
    })
    .catch((error) => {
      isError.value = true
      q.notify(notifyError(error))
    })
}

onMounted(() => {
  loadData()
})
</script>

<template>
  <div class="content" v-if="newData || editMode">
    <NewEditor
      v-if="editMode && newData"
      @uploaded="loadData()"
    ></NewEditor>
    <div class="newsarea" v-if="newData">
      <div class="p_title">{{ newData.title }}</div>
      <div class="narea">
        <div class="text">
          <template v-for="(row, idx) in newData.parsedMD" :key="idx">
            <template v-if="row.type === 'text'">
              <section v-if="row.content !== '\n'" v-html="row.content"></section>
              <br v-else>
            </template>
            <div
              v-if="row.type === 'img'"
              class="newsImg"
            >
              <q-img
                :src="imgUrl(row.content)"
                fit="fill"
              >
              </q-img>
            </div>
            <div class="vitem" v-if="row.type === 'video'">
              <q-video
                :ratio="16/9"
                :src="'https://www.youtube.com/embed/' + row.content"
              ></q-video>
            </div>
          </template>
          <div v-if="newData.refLink">Источник:
            <a :href="newData.refLink" target="_blank">
              {{ newData.refName }}
            </a>
          </div>
          <div
            v-for="(imgFileName, idx) in newData.unusedImages"
            class="newsImg"
            :key="idx"
          >
            <q-img
              :src="imgUrl(imgFileName)"
              fit="fill"
            >
            </q-img>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="content" v-else>
    <div class="newsarea">
      <div class="narea">
        <div class="text">
          Новость не найдена
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.imagesArea {
  padding: 1em;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 2vw;
}

.newsarea {
  max-width: 900px;
  margin: auto;
}

.text img {
  box-shadow: 0 0 0.5em black;
}

.newsImg {
  width: 100%;
  box-shadow: 0 0 0.5em black;
  margin: 1em 0;
}

.vitem {
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  overflow: hidden;
  position: relative;
}

.narea iframe {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

li {
  padding: 0.5em 0;
}

blockquote {
  padding: 1em;
  border-left: 3px solid #6b4c07;
}
</style>
