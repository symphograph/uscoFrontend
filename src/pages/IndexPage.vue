<script setup>

import VideoList from 'components/VideoList.vue'
import TeaserList from 'components/TeaserList.vue'
import NewsList from 'components/news/NewsList.vue'
import AnnounceList from 'components/announses/AnnounceList.vue'
import {inject, onMounted, provide, ref} from 'vue'
import { useMeta } from 'quasar'
import {getMeta} from "src/myFuncts";

const compactCard = ref(false)
provide('compactCard', compactCard)

const metaData = getMeta('Южно-Сахалинский симфонический оркестр')
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

const videoLimit = {
  limit: 6
}

const year = ref(new Date().getFullYear())

const announceList = ref([])
provide('announceList', announceList)

const progress = inject('progress')

 const query = {
   category: 'usco',
   year: 0,
   limit: 5
 }

onMounted(() => {

})
</script>

<template>
  <q-page class="items-center justify-evenly">
    <div class="contentBlock">
      <div class="announceArea">
        <AnnounceList :method="'futureList'"></AnnounceList>
      </div>
    </div>
    <div class="contentBlock">
      <div class="p_title">Новости оркестра</div>
      <br><br>
      <NewsList :query="query" :limit="5" :year="year" :category="'usco'"></NewsList>
    </div>
    <div class="contentBlock">
      <VideoList :videoLimit="videoLimit"></VideoList>
    </div>
    <div class="contentBlock">
      <TeaserList :teasers="teasers"></TeaserList>
    </div>
  </q-page>
</template>

<style scoped>
.announceArea {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  grid-gap: 1vw;
}

.contentBlock {
  padding: 1em 0 1em;
}
</style>
