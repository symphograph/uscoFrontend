<template>
  <div>
    <q-carousel
      v-if="album?.images.length"
      swipeable
      animated
      arrows
      dark
      v-model="slide"
      v-model:fullscreen="fullscreen"
      thumbnails
      infinite
    >
      <template v-for="file in album.images" :key="file">
        <q-carousel-slide :name="file" :img-src="apiUrl + '/img/albums/' + album.name + '/' + file"/>
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



    <AlbumSelect></AlbumSelect>
  <SriperComponent v-if="false"></SriperComponent>


</template>

<script setup>
import {inject, onMounted, provide, ref, watch} from 'vue'
import {api} from 'boot/axios'
import {useQuasar} from 'quasar'
import AlbumSelect from 'components/AlbumSelect.vue'
import {useRoute} from 'vue-router'
import {notifyError} from "src/js/myFuncts";
import SriperComponent from "components/SriperComponent.vue";



const q = useQuasar()

const files = ref([])
const apiUrl = String(process.env.API)

const albumList = ref([])
provide('albumList', albumList)

const slide = ref(1)
const album = ref(null)
provide('album', album)


const fullscreen = ref(true)
const navigation = ref(true)

function reaction() {
  console.log('react')
  loadData()
  fullscreen.value = true
}







watch(files, () => {
  slide.value = files.value[0]
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
