<script setup>

import SiteNameMobile from "components/main/header/SiteNameMobile.vue";
import SiteNameDesktop from "components/main/header/SiteNameDesktop.vue";
import {ref} from "vue";
import {useRoute} from "vue-router";

const excludedPaths = ['/conductor', '/contacts', '/docs', '/staff'];
const dynamicIdRegex = /\/(new|announces)\/\d+$/;
const route = useRoute();
const isExcluded = ref(excludedPaths.includes(route.fullPath) || dynamicIdRegex.test(route.fullPath));

</script>

<template>
  <q-img src="img/header-bg.jpg" class="mobile-hide" v-if="$route.fullPath === '/'"></q-img>
  <q-toolbar elevated
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
