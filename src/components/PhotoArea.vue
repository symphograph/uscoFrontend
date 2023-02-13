<template>
  <div class="q-pa-md">
    <q-carousel
      swipeable
      animated
      arrows
      dark
      v-model="slide"
      v-model:fullscreen="fullscreen"
      thumbnails
      infinite
    >
      <template v-for="file in files" :key="file">
        <q-carousel-slide :name="file" :img-src="apiUrl + '/img/albums/' + album + '/' + file"/>
      </template>
      <template v-slot:control>
        <q-carousel-control
          position="top-right"
          :offset="[18, 18]"
        >
          <q-btn
            push round dense color="white" text-color="primary"
            :icon="fullscreen.value ? 'fullscreen_exit' : 'fullscreen'"
            @click="fullscreen = !fullscreen"
          />
        </q-carousel-control>
      </template>
    </q-carousel>
  </div>
  <SelMytest @iAmSelected="reaction"></SelMytest>
</template>

<script setup>
import { inject, onMounted, provide, ref, watch } from 'vue'
import { api } from 'boot/axios'
import { useQuasar } from 'quasar'
import SelMytest from 'components/SelMytest.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const q = useQuasar()

const files = ref([])
const apiUrl = String(process.env.API)

const albumList = ref([])
provide('albumList', albumList)

const slide = ref(1)
const album = ref(0)
provide('album', album)


const fullscreen = ref(true)
const navigation = ref(true)

function reaction () {
  console.log('react')
      loadData()
      fullscreen.value = true
    }

function loadOptions () {

      api.post(apiUrl + '/api/album.php', {
        params: {
          what: 'options',
          album: 0,
          token: 12345
        }
      })
        .then((response) => {
          albumList.value = response.data.options
          initAlbum()
          loadData()
        })
        .catch(() => {
          q.notify({
            color: 'negative',
            position: 'top',
            message: 'Сервер не отвечает',
            icon: 'report_problem'
          })
        })
    }

function initAlbum () {
      if (album.value === '0') {
        seldata.value.selected = seldata.value.options[seldata.value.options.length - 1]
        album.value = seldata.value.selected.label
      } else {
        seldata.value.selected.label = album.value
        seldata.value.selected.value = '/img/albums/' + album.value
      }
    }

function loadData () {
      const $q = useQuasar()
      api.post(apiUrl + '/api/album.php', {
        params: {
          what: 'data',
          album: album.value,
          token: 12345
        }
      })
        .then((response) => {
          files.value = response.data.files
        })
        .catch(() => {
          $q.notify({
            color: 'negative',
            position: 'top',
            message: 'Сервер не отвечает',
            icon: 'report_problem'
          })
        })
    }

watch(files, () => {
    slide.value = files.value[0]
})

onMounted(()=> {
  album.value = route.params.album * 1
  loadOptions(album.value)
})
</script>
<style>
.q-carousel__slide {
  min-height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50%;
  background-color: black;
}
</style>
