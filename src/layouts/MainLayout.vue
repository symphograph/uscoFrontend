<script setup>
import {onBeforeMount, onMounted, provide, ref, watch} from "vue";
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

const progress = ref(false)
provide('progress', progress)

const editMode = ref(false)
provide('editMode', editMode)

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
  //maintenance()
  console.log('mainLayout beforeMount')
  document.body.style.backgroun = "none";
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




.p_title {
  font-size: 25px;
  color: #a98700;
  border-bottom: 1px solid #a98700;
}
</style>
