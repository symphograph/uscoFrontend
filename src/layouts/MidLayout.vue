<template>
  <q-layout v-if="isOptionsLoaded" view="hHh lpR lfr">
    <MainHeader></MainHeader>
    <q-page-container v-if="AccessToken">
      <div class="header-image mobile-hide" style="z-index: -100" v-if="$route.fullPath === '/'">
        <q-img src="img/header-bg.jpg"></q-img>
      </div>
      <q-toolbar elevated class="bg-primary text-white shadow-5">
        <SiteNameDesktop class="desktop-only"></SiteNameDesktop>
        <SiteNameMobile class="mobile-only"></SiteNameMobile>
      </q-toolbar>
      <router-view/>
    </q-page-container>
    <MainFooter></MainFooter>
  </q-layout>
</template>

<script setup>

import SiteNameMobile from "components/main/SiteNameMobile.vue";
import SiteNameDesktop from "components/main/SiteNameDesktop.vue";
import MainFooter from "components/main/footer/MainFooter.vue";
import MainHeader from "components/MainHeader.vue";
import {inject} from "vue";

const AccessToken = inject('AccessToken')
const isOptionsLoaded = inject('isOptionsLoaded')
</script>



<style scoped>

</style>
