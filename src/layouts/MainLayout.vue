<template>
  <AuthComponent ref="refAuth"></AuthComponent>
  <router-view v-if="isOptionsLoaded"/>
</template>


<script setup>
import {ref, provide, computed, onMounted, onBeforeMount, watch, inject} from 'vue'
import {useQuasar, Dialog, LocalStorage, useMeta} from 'quasar'
import {useRoute, useRouter} from 'vue-router'
import AuthComponent from "components/main/AuthComponent.vue";


const router = useRouter()

const pageSettings = ref()
provide('pageSettings', pageSettings)

const isOptionsLoaded = ref(false)
provide('isOptionsLoaded', isOptionsLoaded)

const refAuth = ref()
const q = useQuasar()
provide('q', q)
const apiUrl = String(process.env.API)
const route = useRoute()
const lvl = ref('lvl')
provide('lvl', lvl)

const AccessToken = ref('')
provide('AccessToken', AccessToken)

const SessionToken = ref('')
provide('SessionToken', SessionToken)

const admin = ref(false)
provide('admin', admin)



const progress = ref(false)
provide('progress', progress)

const leftDrawerOpen = ref(false)
provide('leftDrawerOpen', leftDrawerOpen)


const Halls = ref([])
provide('Halls', Halls)



const editMode = ref(false)
provide('editMode', editMode)



//const lastPath = '/'

watch(route,(newPath) => {
  LocalStorage.set('lastPath',newPath.path)
})

function cook () {
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
    onDismiss: cook,
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


//----------------------------------------------------------------------

onBeforeMount(() => {
  if(!process.env.isDebug){
    //router.push({ path: '/maintenance' })
    //window.location.href = '/maintenance'
  }
})

onMounted(() => {
  console.log('mainLayout Mounted')
  showCookieConfirm()
})

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
</script>

<style lang="scss">


#finevision_banner {
  display: none;
}

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
body {
  height: 100%;
  width: 100%;
}

#q-app {
  height: 100%;
  width: 100%;
}

main {
  min-height: 100vh;
}

.text a {
  color: black;
  transition: 200ms;
}

.p_title {
  font-size: 25px;
  color: #a98700;
  border-bottom: 1px solid #a98700;
  overflow-x: visible;
  padding-bottom: 5px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.tel {
  height: 25px;
  background-image: url(/img/tel.png);
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: contain;
  padding-left: 35px;
  display: table-cell;
  vertical-align: bottom;
}

.tel:hover {
  background-image: url(/img/telh.png);
}

.text a:hover {
  text-shadow: 1px 1px 10px #fbd97a;
  transition: 100ms;
}

.content {
  min-height: 800px;
  margin: auto;
  /*color: #953808;*/
  margin-top: 10px;
}

.eventsarea {

  padding: 1em;
  /*width: 100%;*/
  max-width: 1200px;
  overflow-y: hidden;
  margin: 0 auto;
  display: block;

}

.text {
  max-width: 900px;
  margin: auto;
  color: black;
  font-size: 18px;
  padding: 20px;
  text-align: justify;
  font: caption;
  letter-spacing: 0.05em;
}

.danger {
  color: red;
}

q-toolbar-title {
  display: flex;

}


q-avatar img {
  width: 170px;
}

.q-list {
  color: #342d71;
  font-size: 16px;
}

.partners {
  /*background-color: #e7ddcb;*/
  /*color: #544300;*/
  font-size: 25px;
  text-transform: uppercase;
  padding: 40px 0 40px;
  overflow: auto;
  width: 100%;
  margin: auto;
}

.parttitle {
  margin: auto;
  text-align: center;
  font-family: abel,serif;
  height: 70px;
}

.logorow {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: auto;
}


.rmh {

  background-image: url(/img/rmh.png);
  width: 147px;
  height: 83px;
  background-size: 147px;
  margin: auto auto;
}



.vidarea {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 2vw;
}

.vitem {
  box-shadow: 1px 2px 5px #000000;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  overflow: hidden;
  position: relative;
}

.ndate {
  font-size: 12px;
  color: gray;
}

a {
  color: #383838;
  cursor: pointer;
}

.ntitle a:hover {
  text-decoration: underline;
}

.ntitle a {
  text-decoration: none;
  font-family: 'Open Sans Condensed', sans-serif;
  color: #000000;
}

.tcol a:hover {
  color: black;
}

hr {
  border: none;
  height: 1px;
  background-color: #ba892f;
}

.selectors {
  min-width: 50%;
  display: flex;
  justify-content: flex-end;
}



@media screen and (max-device-width: 500px) {

  #orgname, .tsa {
    font-size: 14px;
    line-height: 1.25em;
  }
}
</style>
