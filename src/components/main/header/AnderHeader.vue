<script setup>

import SiteNameMobile from "components/main/header/SiteNameMobile.vue";
import SiteNameDesktop from "components/main/header/SiteNameDesktop.vue";
</script>

<template>
  <div class="header-image mobile-hide" style="z-index: -100" v-if="$route.fullPath === '/'">
    <q-img src="img/header-bg.jpg"></q-img>
  </div>
  <q-toolbar elevated class="bg-primary text-white shadow-5">
    <SiteNameDesktop class="desktop-only"></SiteNameDesktop>
    <SiteNameMobile class="mobile-only"></SiteNameMobile>
  </q-toolbar>
</template>

<style scoped>

</style>
