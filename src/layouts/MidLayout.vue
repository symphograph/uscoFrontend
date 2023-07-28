<template>
  <q-layout v-if="isOptionsLoaded" view="hHh lpR lfr">
    <MainHeader></MainHeader>
    <q-page-container v-if="AccessToken">
      <AnderHeader></AnderHeader>
      <router-view/>
    </q-page-container>
    <MainFooter></MainFooter>
  </q-layout>
</template>

<script setup>

import SiteNameMobile from "components/main/header/SiteNameMobile.vue";
import SiteNameDesktop from "components/main/header/SiteNameDesktop.vue";
import MainFooter from "components/main/footer/MainFooter.vue";
import MainHeader from "components/main/header/MainHeader.vue";
import {inject, onBeforeMount, onMounted} from "vue";
import AnderHeader from "components/main/header/AnderHeader.vue";
import {Dark} from "quasar";

const AccessToken = inject('AccessToken')
const isOptionsLoaded = inject('isOptionsLoaded')

onBeforeMount(() => {
  Dark.set(false)
})
</script>


<style>
body{
  /*background-color: #f3f4f7;*/

  background-image: url(/img/header-bg.jpg);
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
}

#q-app {
  background: rgb(255 255 255 / 84%);
  -webkit-backdrop-filter: blur(40px) saturate(120%) contrast(50%);
  backdrop-filter: blur(30px) saturate(200%) contrast(70%);
}

.q-drawer {
  background-image: linear-gradient(
    180deg, #fbf5db 0%, rgba(203, 171, 122, 0.91) 150%);
}

.q-menu {
  background-color: #e7ddcbf5;
}
</style>
