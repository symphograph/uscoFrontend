<script setup>

import VideoList from 'components/VideoList.vue'
import TeaserList from 'components/TeaserList.vue'
import NewsList from 'components/news/NewsList.vue'
import AnnounceList from 'components/announses/AnnounceList.vue'
import {inject, nextTick, onBeforeMount, onMounted, provide, ref} from 'vue'
import {useMeta, useQuasar} from 'quasar'
import {getMeta} from "src/js/myFuncts";
import PageShell from "components/main/PageShell.vue";
import SocialSelect from "components/main/SocialSelect.vue";
import {myUser} from "src/js/myAuth";

const q = useQuasar()
const compactCard = ref(false)
provide('compactCard', compactCard)

const isMounting = ref(false)

const metaData = getMeta('ЮССО')
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

const year = ref(new Date().getFullYear())

const announceList = ref([])
provide('announceList', announceList)

const progress = inject('progress')

 const query = {
   category: 'usco',
   year: 0,
   limit: 5
 }

onBeforeMount(() => {
  console.log('IndexPage before mounted')
  isMounting.value = true
})

onMounted(() => {
console.log('IndexPage mounted')
  nextTick().then(() => {
    //isMounting.value = false
  })


})
</script>

<template>
  <PageShell :pageTitle="metaData.title" use-header>
    <template v-slot:ToolPanel v-if="myUser.self.isPermit([1])">

      <SocialSelect></SocialSelect>
    </template>
    <template v-slot:PageContent>
      <div class="centralCol">
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
          <VideoList method="someLast" :limit="6"></VideoList>
        </div>
        <div class="contentBlock">
          <TeaserList :teasers="teasers"></TeaserList>
        </div>
      </div>
    </template>
  </PageShell>
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
