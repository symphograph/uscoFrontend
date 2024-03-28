<script setup>
import {inject, onBeforeMount, onMounted, provide, ref} from 'vue'
import MainHeader from "components/main/header/MainHeader.vue";
import SiteNameMobile from "components/main/header/SiteNameMobile.vue";
import SiteNameDesktop from "components/main/header/SiteNameDesktop.vue";
import MainFooter from "components/main/footer/MainFooter.vue";
import {LocalStorage, useQuasar} from "quasar";
import AnderHeader from "components/main/header/AnderHeader.vue";
import {myUser} from "src/js/myAuth";


const $q = useQuasar()
const isMounted = ref(false)

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
  LocalStorage.set('dark',darkTrigger.value)
}
provide('darkSwitch', darkSwitch)


const leftDrawerOpen = inject('leftDrawerOpen')

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
provide('toggleLeftDrawer', toggleLeftDrawer)


onBeforeMount(() => {

})

onMounted(() => {
  isMounted.value = true
  if (LocalStorage.getItem('dark')) {
    darkTrigger.value = true
    $q.dark.set(LocalStorage.getItem('dark'))
  }
  document.body.style.backgroundImage = "url('/img/header-bg.jpg')";
})
</script>

<template>
  <q-layout view="hHh LpR lff">

    <MainHeader></MainHeader>

    <q-page-container v-if="myUser.self.AccessToken">
        <AnderHeader></AnderHeader>
        <div class="bgArea">
          <div class="pageArea">
            <router-view/>
          </div>
        </div>
    </q-page-container>

    <MainFooter></MainFooter>

  </q-layout>
</template>

<style>
body.body--light {
  --red: red;
  --blue: blue;
  --green: green;
  --mainText: #232323;
  --dTitle: #312a6b;
  --drContentBg: beige;
  --docTitle: #333366;
  --cardGradient:
    linear-gradient( 180deg, rgba(248, 244, 238, 1.00) 0%, rgba(237, 225, 209, 1.00) 100%);
  --texturedText: 1px 1px 1px rgb(255 255 255);
  --announceCardText: #694d2a;
  --PageTitle: #a98700;
  --BodyBackground: rgba(255, 255, 255, 0.80);
  --iconColor: red;
  --cardBorder: rgba(0, 0, 0, 0.55);
}

body.body--dark {
  --tyty: #e1e713;
  --blue: darkblue;
  --green: darkgreen;
  --cardBg: #1d1d1d;
  --cardGradient:
    linear-gradient(90deg, rgba(33, 162, 255, 0.1) 1.89%, rgba(50, 50, 51, 0) 50%),
    linear-gradient(180deg, #575860 11.6%, #3A4852 54.73%, #2C2D34 100%);
  --mainText: #bebebe;
  --dTitle: goldenrod;
  --drContentBg: #1d1d1d;
  --docTitle: goldenrod;
  --texturedText: none;
  --announceCardText: #D8D8D8;
  --PageTitle: goldenrod;
  --BodyBackground: linear-gradient(rgba(16, 20, 23, 0.9), rgba(35, 38, 46, 0.96), rgba(35, 38, 46, 0.96));
  --cardBorder: goldenrod;
}

body, body.body--dark {
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
}

.mainText {
  color: var(--mainText);
}

.bgArea {
  background: var(--BodyBackground);
  backdrop-filter: blur(30px) saturate(200%) contrast(70%);
}

.pageArea {
  max-width: 1200px;
  margin: auto;
  min-height: 100vh;
}

.q-item--dark .q-item__label--caption {
  color: rgb(192, 192, 192, 0.8);
}

.q-list--dark, .q-item--dark {
  color: goldenrod;
}

.q-menu--dark {
  box-shadow: 0 0 12px black;
  background: linear-gradient(90deg, rgba(33, 162, 255, 0.1) 1.89%, rgba(50, 50, 51, 0) 50%), linear-gradient(180deg, #575860 11.6%, #3A4852 54.73%, #2C2D34 100%);
}

.q-card--dark {
  box-shadow: 0 0 6px black;
}

.q-card--dark:hover {
  box-shadow: 0 0 12px black;
}

.q-toolbar__title {
  color: var(--PageTitle);
  font-size: 25px;
}

.goldBtn {
  color: goldenrod;
}

.pageToolbar {
  display: flex;
  border-bottom: 1px solid var(--PageTitle);
}

.pageToolbar .selectors {
  min-width: 50%;
  display: flex;
  justify-content: flex-end;
}

.pageToolbar .selectors > * {
  margin-left: 1em;
}
</style>
