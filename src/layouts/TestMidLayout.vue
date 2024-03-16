<script setup>
import {inject, onBeforeMount, provide, ref} from 'vue'
import TestMainHeader from "components/main/header/TestMainHeader.vue";
import SiteNameMobile from "components/main/header/SiteNameMobile.vue";
import SiteNameDesktop from "components/main/header/SiteNameDesktop.vue";
import MainFooter from "components/main/footer/MainFooter.vue";
import {useQuasar} from "quasar";


const $q = useQuasar()
const AccessToken = inject('AccessToken')

const authTypes = ref([
  {
    id: 2,
    label: 'Телеграм',
    url: 'auth/telegram/login.php',
    img: '/img/auth/telegram.svg'
  },
  {
    id: 3,
    label: 'MailRu',
    url: 'auth/mailru/login.php',
    img: '/img/auth/mailru.svg'
  },
  {
    id: 4,
    label: 'Discord',
    url: 'auth/discord/login.php',
    img: '/img/auth/discord.svg'
  },
  {
    id: 4,
    label: 'VКонтакте',
    url: 'auth/vkontakte/login.php',
    img: '/img/auth/vkontakte.svg'
  }
])
provide('authTypes', authTypes)

const darkTrigger = ref(false)
provide('darkTrigger', darkTrigger)

function darkSwitch() {
  $q.dark.set(darkTrigger.value)
}
provide('darkSwitch', darkSwitch)


const leftDrawerOpen = inject('leftDrawerOpen')

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

provide('toggleLeftDrawer', toggleLeftDrawer)


onBeforeMount(() => {

})
</script>

<template>
  <q-layout view="hHh LpR lff">

    <TestMainHeader></TestMainHeader>

    <q-page-container v-if="AccessToken">
      <q-img src="img/header-bg.jpg" class="mobile-hide" v-if="$route.fullPath === '/test'"></q-img>
      <q-toolbar elevated class="bg-primary text-white shadow-5 scrollTarget">
        <SiteNameDesktop class="desktop-only"></SiteNameDesktop>
        <SiteNameMobile class="mobile-only"></SiteNameMobile>
      </q-toolbar>
      <div class="pageArea">
        <router-view/>
      </div>
    </q-page-container>

    <MainFooter></MainFooter>

  </q-layout>
</template>

<style>
body {
  background-image: linear-gradient(rgba(255, 255, 255, 0.90), rgba(255, 255, 255, 0.80)), url(/img/header-bg.jpg);
}

body, body.body--dark {
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
}

body.body--light {
  --red: red;
  --blue: blue;
  --green: green;
  --mainText: #232323;
  --dTitle: #312a6b;
  --drContentBg: beige;
}

body.body--dark {
  background-image: linear-gradient(rgba(17, 14, 13, 0.8), rgba(17, 17, 17, 0.99), rgba(17, 17, 17, 0.99)), url(/img/header-bg.jpg);
  --tyty: #e1e713;
  --blue: darkblue;
  --green: darkgreen;
  --cardBg: #1d1d1d;
  --mainText: #bebebe;
  --dTitle: goldenrod;
  --drContentBg: #1d1d1d;
}

.mainText {
  color: var(--mainText);
}

.pageArea {
  backdrop-filter: blur(30px) saturate(200%) contrast(70%);
}

</style>

