<script setup>

import SiteNameMobile from "components/main/header/SiteNameMobile.vue";
import SiteNameDesktop from "components/main/header/SiteNameDesktop.vue";


</script>

<template>
  <q-img src="img/header-bg.jpg" class="mobile-hide" v-if="$route.fullPath === '/'"></q-img>
  <q-toolbar elevated
             v-if="!['/conductor', '/contacts', '/docs'].includes($route.fullPath)"
             class="bg-primary text-white shadow-5 scrollTarget" >
    <SiteNameDesktop class="desktop-only"></SiteNameDesktop>
    <SiteNameMobile class="mobile-only"></SiteNameMobile>
  </q-toolbar>
</template>

<style>
.topin a {
  text-decoration: none;
}
</style>
