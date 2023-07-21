<template>
  <q-page class="items-center justify-evenly">
    <div class="eventsarea">
      <div class="announceArea">
        <AnnounceList :sort="1" :evYear="year" only-new="1"></AnnounceList>
      </div>
    </div>
    <div class="eventsarea">
      <div class="p_title">Новости оркестра</div>
      <br><br>
      <NewsList :query="query" :limit="5" :year="year" :category="'usco'"></NewsList>
    </div>
    <VideoList :videoLimit="videoLimit"></VideoList>
    <TeaserList :teasers="teasers"></TeaserList>
  </q-page>
</template>

<script setup>
import moment from 'moment'
import VideoList from 'components/VideoList.vue'
import TeaserList from 'components/TeaserList.vue'
import NewsList from 'components/news/NewsList.vue'
import AnnounceList from 'components/announses/AnnounceList.vue'
import { ref } from 'vue'
import { useMeta } from 'quasar'

const metaData = {
  title: 'ЮССО'
}
useMeta(metaData)
const teasers = [
  {
    id: 1,
    href: 'https://clck.ru/RautH',
    img: '/img/teasers/opros.svg'
  },
  {
    id: 2,
    href: 'news/euterpe',
    img: '/img/teasers/euterpe_2021.svg'
  }
]

const videos = [
  { id: 'cYYEe_o-M3w' },
  { id: 'ZAC_GGmo-bk' },
  { id: 'yjTAG2iCjpk' },
  { id: 'Y4syxGpzDn4' },
  { id: 'lmpnSdUmSEE' },
  { id: '2Pagmmq3Yho' }
]

const videoLimit = {
  limit: 6
}

const anonses = {
  sort: 0,
  year: 0,
  onlyNew: 1
}

const year = ref(new Date().getFullYear())

 const query = {
   category: 'usco',
   year: 0,
   limit: 5
 }
</script>

<style>
.announceArea {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  grid-gap: 1vw;
}
</style>
