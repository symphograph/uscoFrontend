<script setup>
import {inject, onBeforeMount, onMounted, provide, ref, watch} from "vue";
import AuthComponent from "components/main/AuthComponent.vue";
import {LocalStorage, useMeta, useQuasar} from "quasar";
import {useRoute, useRouter} from "vue-router";
import {api} from "boot/axios";
import LoginDialog from "components/account/LoginDialog.vue";


const router = useRouter()
const metaData = {
  meta: {
    viewport: {
      name: 'viewport',
      content: 'initial-scale=1, width=device-width, user-scalable=yes'
    },
    equiv: { 'http-equiv': 'Content-Type', content: 'text/html; charset=UTF-8' }
  },
}
useMeta(metaData)

const q = useQuasar()
const apiUrl = String(process.env.API)
const route = useRoute()
const refAuth = ref()

const authTypes = ref([
  {
    id: 2,
    label: 'Телеграм',
    url: 'login/telegram/login.php',
    img: '/img/auth/telegram.svg'
  },
  {
    id: 3,
    label: 'MailRu',
    url: 'login/mailru/login.php',
    img: '/img/auth/mailru.svg'
  },
  {
    id: 4,
    label: 'Discord',
    url: 'login/discord/login.php',
    img: '/img/auth/discord.svg'
  },
  {
    id: 4,
    label: 'VКонтакте',
    url: 'login/vkontakte/login.php',
    img: '/img/auth/vkontakte.svg'
  }
])
provide('authTypes', authTypes)

const progress = ref(false)
provide('progress', progress)

const editModes = {
  entry: ref(false),
  announce: ref(false),
  doc: ref(false),
  staff: ref(false),
  libVideo: ref(false),
  lib: ref(false)

};
provide('editModes', editModes);

const admin = ref(false)
provide('admin', admin)

const leftDrawerOpen = ref(false)
provide('leftDrawerOpen', leftDrawerOpen)

const isOptionsLoaded = ref(false)
provide('isOptionsLoaded', isOptionsLoaded)

const showLoginDialog = ref(false)
provide('showLoginDialog', showLoginDialog)

const scrollWatch = ref(true);
provide('scrollWatch', scrollWatch);

const scrollPos = ref(0)
provide('scrollPos', scrollPos)

watch(route,(newPath) => {
  LocalStorage.set('lastPath',newPath.path)
})

function setCookConfirm () {
  LocalStorage.set('CookieConfirm', '1')
}

function showCookieConfirm () {
  if (LocalStorage.getItem('CookieConfirm')) {
    return
  }


  q.notify({
    message: 'Мы тоже используем Cookies. Потому что без них ничего не работает.',
    color: 'primary',
    timeout: 0,
    multiLine: true,
    onDismiss: setCookConfirm,
    icon: 'ion-information-circle-outline',
    //avatar: 'usso.logo.svg',
    actions: [
      {
        label: 'Понятно',
        color: 'yellow',
        handler: () => { /* ... */ }
      }
    ]
  })
}

function stopScrollWatch(timeout = 500) {
  scrollWatch.value = false;
  setTimeout(() => {
    scrollWatch.value = true;
  }, timeout);
}
provide('stopScrollWatch', stopScrollWatch)

function maintenance() {
  api.post(apiUrl + 'debug/debug.php', {
    params: {
      method: 'isDebugIp',
      client: 'usso',
    }
  })
    .then((response) => {
      if (!!!response?.data?.data?.is) {
        throw new Error();
      }
    })
    .catch(() => {
      router.push({path: '/maintenance'})
    })
}

onBeforeMount(() => {
  //router.push({path: '/maintenance'})
  //maintenance()
  console.log('mainLayout beforeMount')
  //document.body.style.background = "none";
  document.body.style.backgroundImage = "none";
})

onMounted(() => {


  LocalStorage.set('lastPath',route.path)
  console.log('mainLayout Mounted')
  showCookieConfirm()
})
</script>

<template>
  <AuthComponent ref="refAuth"></AuthComponent>
  <router-view v-if="isOptionsLoaded"/>
  <LoginDialog v-if="isOptionsLoaded"></LoginDialog>
</template>

<style>
@font-face {
  font-family: 'Rubik Mono One';
  src: url(/fonts/RubikMonoOne-Regular.ttf) format("opentype");
}

@font-face {
  font-family: 'Open Sans Condensed';
  src: url(/fonts/Open_Sans_Condensed/OpenSansCondensed-Bold.ttf) format("opentype");
}

@font-face {
  font-family: 'GoudyTrajan';
  src: url(/fonts/GoudyTrajan-Medium.otf) format("opentype");
}

html, body, #q-app, .q-layout, .q-page-container {
  height: 100%;
  margin: 0;
}


.p_title {
  font-size: 25px;
  color: #a98700;
  border-bottom: 1px solid #a98700;
}


</style>
