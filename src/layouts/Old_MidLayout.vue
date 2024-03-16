<template>
  <q-layout v-if="isOptionsLoaded" view="hHh LpR lff">
    <MainHeader></MainHeader>
    <AnderHeader></AnderHeader>
    <q-page-container v-if="AccessToken">

      <router-view/>
    </q-page-container>
    <MainFooter></MainFooter>
  </q-layout>
</template>

<script setup>

import MainFooter from "components/main/footer/MainFooter.vue";
import MainHeader from "components/main/header/MainHeader.vue";
import {inject, provide, onBeforeMount, ref} from "vue";
import AnderHeader from "components/main/header/AnderHeader.vue";
import {Dark} from "quasar";

const AccessToken = inject('AccessToken')
const isOptionsLoaded = inject('isOptionsLoaded')

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

.q-page-container {
  background: rgb(255 255 255 / 84%);
  -webkit-backdrop-filter: blur(40px) saturate(120%) contrast(50%);
  backdrop-filter: blur(30px) saturate(200%) contrast(70%);
}

.q-drawer {
  background-image: linear-gradient(
    180deg, #fbf5db 0%, rgba(203, 171, 122, 0.91) 150%);
}

</style>
