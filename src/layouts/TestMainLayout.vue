<script setup>
import {onMounted, provide, ref, watch} from "vue";
import AuthComponent from "components/main/AuthComponent.vue";
import {LocalStorage, useMeta, useQuasar} from "quasar";
import {useRoute} from "vue-router";

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

const progress = ref(false)
provide('progress', progress)

const editMode = ref(false)
provide('editMode', editMode)

const admin = ref(false)
provide('admin', admin)

const leftDrawerOpen = ref(false)
provide('leftDrawerOpen', leftDrawerOpen)

const AccessToken = ref('gfdsg')
provide('AccessToken', AccessToken)

const SessionToken = ref('gfdsg')
provide('SessionToken', SessionToken)

const isOptionsLoaded = ref(false)
provide('isOptionsLoaded', isOptionsLoaded)

const Halls = ref([])
provide('Halls', Halls)



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

onMounted(() => {
  LocalStorage.set('lastPath',route.path)
  console.log('mainLayout Mounted')
  showCookieConfirm()
})
</script>

<template>
  <AuthComponent ref="refAuth"></AuthComponent>
  <router-view v-if="isOptionsLoaded"/>
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

.eventsarea {
  max-width: 1200px;
  margin: auto;
}

.contentArea {
  max-width: 1200px;
  margin: auto;
  min-height: 100vh;
}

.p_title {
  font-size: 25px;
  color: #a98700;
  border-bottom: 1px solid #a98700;
  /*overflow-x: visible;*/
  padding-bottom: 5px;
  /*display: flex;*/
  /*justify-content: space-between;*/
  /*flex-wrap: wrap;*/
}
</style>
