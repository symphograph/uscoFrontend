<template>
  <q-layout view="hHh lpR lfr">
    <MainHeader @moveDraver="toggleLeftDrawer"></MainHeader>

    <!-- drawer content -->
    <q-drawer v-model="leftDrawerOpen" side="left" elevated>
      <DrawerContent></DrawerContent>
    </q-drawer>
    <q-page-container v-if="Defaults">
      <div v-if="false" class="mobile-hide" style="background-color: black; height: 48px; box-shadow: 0 5px 7px #2f2e2e99;"></div>
      <div class="header-image mobile-hide" style="z-index: -100" v-if="$route.fullPath === '/'">
        <q-img src="img/header-bg.jpg"></q-img>
      </div>
      <q-toolbar elevated class="bg-primary text-white shadow-5">
        <div class="bg-primary text-white topin">
          <router-link to="/">
            <div class="logo-area">
              <q-avatar square size="70px">
                <img src="/logo.svg">
              </q-avatar>
              <div id="orgname">Южно-Сахалинский камерный оркестр</div>
            </div>
          </router-link>
          <div class="logo-area">
            <router-link to="/conductor">
              <div class="conductor">
                <span>Художественный руководитель</span>
                <span>и главный дирижер</span>
                <a href="/conductor"><span class="tsa">Тигран Ахназарян</span></a>
              </div>
            </router-link>
          </div>
        </div>
      </q-toolbar>
      <router-view/>
      <component :is="'script'" src='https://pos.gosuslugi.ru/bin/script.min.js'></component>
      <GosUslugi></GosUslugi>
    </q-page-container>
    <MainFooter></MainFooter>
  </q-layout>
</template>


<script setup>

import DrawerContent from 'components/DrawerContent.vue'
import { ref, provide, computed, onMounted, onBeforeMount, watch } from 'vue'
import GosUslugi from 'components/GosUslugi.vue'
import MainHeader from 'components/MainHeader.vue'
import MainFooter from 'components/MainFooter.vue'
import { useQuasar, Dialog, LocalStorage } from 'quasar'
import { api } from 'boot/axios'
import { useRoute } from 'vue-router'


const q = useQuasar()
const apiUrl = String(process.env.API)
const allCookies = q.cookies.getAll()
const route = useRoute()
const lvl = ref('lvl')
provide('lvl', lvl)

const admin = ref(false)
provide('admin', admin)

const isDebug = String(process.env.isDebug)

const tabList = ref(
  [
    {
      id: 1,
      expand: true,
      label: 'ЮСКО',
      caption: 'Об оркестре',
      ava: '',
      icon: '/img:logo.svg',
      tabs:
        [
          {
            id: 1,
            name: 'Тигран Ахназарян',
            caption: 'Художественный руководитель и главный дирижер',
            url: '/conductor',
            ava: '/img/avatars/tsa.png',
            icon: false
          },
          {
            id: 2,
            name: 'Состав оркестра',
            caption: 'Список артистов',
            url: '/staff',
            ava: '',
            icon: 'groups'
          },
          {
            id: 3,
            name: 'Александр Зражаев',
            caption: 'Создатель оркестра',
            url: '/AlexandrZrazaev',
            ava: '/img/avatars/zag.jpg',
            icon: false
          },
          {
            id: 4,
            name: 'Историческая справка',
            caption: '"Ты помнишь, как все начиналось?.."',
            url: '/history',
            ava: '',
            icon: 'history_edu'
          }
        ]
    },
    {
      id: 2,
      expand: false,
      url: '/vacancies',
      label: 'Вакансии'
    },
    {
      id: 3,
      expand: false,
      url: '/announces',
      label: 'Афиши'
    },
    {
      id: 4,
      expand: true,
      label: 'медиа',
      caption: 'Фото и видео',
      tabs:
        [
          {
            id: 1,
            name: 'Фото',
            caption: 'Фотографии оркестра',
            url: '/gallery/0',
            ava: '',
            icon: 'photo_camera'
          },
          {
            id: 2,
            name: 'Видео',
            caption: 'Видеозаписи',
            url: '/video',
            ava: '',
            icon: 'smart_display'
          }
        ]
    },
    {
      id: 5,
      expand: true,
      label: 'Новости',
      caption: 'Новости',
      tabs:
        [
          {
            id: 1,
            name: 'Новости ЮСКО',
            caption: 'Новости оркестра',
            url: '/news/usco',
            ava: '/img/logo/logo_init.svg',
            icon: ''
          },
          {
            id: 2,
            name: 'Звезды Эвтерпы',
            caption: 'Международный фестиваль',
            url: '/news/euterpe',
            ava: '/img/logo/logo_init.svg',
            icon: ''
          },
          {
            id: 3,
            name: 'Новости партнеров',
            caption: 'Прочие новости',
            url: '/news/other',
            ava: '',
            icon: 'volunteer_activism'
          },
          {
            id: 4,
            name: 'Все новости',
            caption: 'Обо всем',
            url: '/news/all',
            ava: '',
            icon: 'receipt_long'
          }
        ]
    },
    {
      id: 6,
      expand: false,
      url: '/contacts',
      label: 'Контакты'
    },
    {
      id: 7,
      expand: true,
      label: 'Документы',
      caption: '',
      tabs:
        [
          {
            id: 1,
            name: 'Основные сведения',
            caption: '',
            url: '/main',
            ava: '/img/logo/logo_init.svg',
            icon: ''
          },
          {
            id: 2,
            name: 'Документы',
            caption: '',
            url: '/docs',
            ava: '',
            icon: 'folder'
          },
          {
            id: 3,
            name: 'Вместе против коррупции!',
            caption: 'Международный молодежный конкурс',
            url: '/corrupt',
            ava: '/img/docs/logo-md.webp',
            icon: ''
          }
        ]
    }
  ])
provide('tabList', tabList)

const token = ref('')
provide('token', token)

const Defaults = ref(null)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

const leftDrawerOpen = ref(false)

function apiSess () {

  api.post(apiUrl + 'api/auth/session.php', {
    params: {
      token: token.value,
      path: route.path,
    }
  })
    .then((response) => {
      if (response.data.result) {
        Defaults.value = response.data.data
        admin.value = [4].some(l=>Defaults.value.Powers.includes(l))

        loadOptions()
        return true
      }
      if (response.data.error) {
        if (['badToken', 'emptyToken', 'Refresh for new Sess', 'sessError'].includes(response.data.error)) {
          goToLogin()
        }

        return false
      }
      q.notify({
        color: 'negative',
        position: 'center',
        message: 'Ой! Не работает.:(',
        closeBtn: 'Закрыть',
        icon: 'report_problem'
      })
    })
    .catch((error) => {
      q.notify({
        color: 'negative',
        position: 'center',
        message: 'Ой! Не работает.:(',
        icon: 'report_problem'
      })
    })
}

const Halls = ref(null)
provide('Halls', Halls)

function loadOptions () {
  api.post(apiUrl + 'api/get/options.php', {
    params: {
      token: token.value
    }
  })
    .then((response) => {
      if (response.data.result) {
        Halls.value = response.data.data.Halls
        return true
      }

      let msg = 'Опции не загружены'
      if (response.data.error) {
        msg = response.data.error
      }

      q.notify({
        color: 'negative',
        position: 'center',
        message: msg,
        icon: 'report_problem',
        closeBtn: 'Закрыть'
      })

    })
    .catch(() => {
      q.notify({
        color: 'negative',
        position: 'center',
        message: 'Опции не загружены',
        icon: 'report_problem',
        closeBtn: 'Закрыть'
      })
    })
}

function goToLogin () {
  window.location.href = apiUrl + 'auth/usco.php?debug=' + isDebug + '&path=' + route.path
}

const editMode = ref(false)
provide('editMode', editMode)

function getTokenFromCook () {

  if (allCookies.token) {
    token.value = allCookies.token
    return
  }
  token.value = ''
}



onBeforeMount(() => {
  getTokenFromCook()
})
onMounted(() => {
  apiSess()
  showCookieConfirm()
})

function cook () {
  LocalStorage.set('CookieConfirm', '1')
}

const lastPath = '/'
watch(route,(newpath) => {
  LocalStorage.set('lastPath',newpath.path)
})
function showCookieConfirm () {
  const $q = useQuasar()
  if (LocalStorage.getItem('CookieConfirm')) {
    return
  }

  $q.notify({
    message: 'Мы тоже используем Cookies. Потому что без них ничего не работает.',
    color: 'primary',
    timeout: 0,
    multiLine: true,
    onDismiss: cook,
    icon: 'ion-information-circle-outline',
    //avatar: 'logo.svg',
    actions: [
      {
        label: 'Понятно',
        color: 'yellow',
        handler: () => { /* ... */ }
      }
    ]
  })
}
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

body{
  /*background-color: #f3f4f7;*/

  background-image: url(/img/header-bg.jpg);
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;

}

#q-app {
  background: rgb(255 255 255 / 84%);
  height: 100%;
  width: 100%;
  -webkit-backdrop-filter: blur(40px) saturate(120%) contrast(50%);
  backdrop-filter: blur(30px) saturate(200%) contrast(70%);
  /*background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;*/
}

.q-menu {
  background-color: #e7ddcbf5;
}

.q-toolbar__title a {
  text-decoration: none;
}

.topin {
  width: 80%;
  max-width: 1200px;
  overflow: hidden;
  margin: auto;
  padding-top: 2em;
  padding-bottom: 1em;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  font-family: Gotham, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

.topin a {
  text-decoration: none;
}

.conductor {
  width: 245px;
  font-size: 12px;
  color: #e7ddcb;
  display: flex;
  flex-direction: column;
}

.conductor a:hover {
  text-decoration: underline;
  color: #d9b34d;
}

.tsa {
  font-family: 'Rubik Mono One', sans-serif;
  font-size: 25px;
  letter-spacing: 1px;
  color: white;
  transition: all 200ms;
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

.sitename {
  color: #e7ddcb;
  text-transform: uppercase;
  line-height: 1.9em;
  display: flex;
  justify-content: flex-end;
}

.top-container {
  /*height: 300px;*/
}

.mytoolbar {
  box-shadow: 0 5px 7px #2f2e2e99;
}

.header-image {

}

.topline {
  background: none;

}

.q-drawer {
  background-image: linear-gradient(
      180deg, #fbf5db 0%, rgba(203, 171, 122, 0.91) 150%);
}

q-avatar img {
  width: 170px;
}

.logo-area {
  display: flex;
  justify-content: flex-start;
  padding: 1em;
  cursor: pointer;
}

#orgname {
  max-width: 15em;
  text-decoration: none;
  color: #ecd872;
  font-size: 25px;
  font-family: 'Rubik Mono One', sans-serif;
  text-shadow: 0 0 9px #000000;
  margin-left: 0.5em;
  white-space: pre-wrap;
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

.exxonbox {
  width: 250px;
  height: 220px;
  font-size: 14px;
  text-align: center;
  display: inline-block;
  float: left;
  margin: auto;
}

.exxon {
  width: 135px;
  height: 140px;
  margin: auto auto;
  background-image: url(/img/sakhalin-logo-footer.svg);
  background-size: 280px 140px;

}

.exxon:hover {

  background-position: 135px;
}

.sakhcom {

  background-image: url(/img/sakhcom-logo.svg);
  width: 147px;
  height: 40px;
  background-size: 147px;
  margin: auto auto;
}

.astv {

  background-image: url(/img/astv.png);
  width: 147px;
  height: 53px;
  background-size: 147px;
  margin: auto auto;
}

.rmh {

  background-image: url(/img/rmh.png);
  width: 147px;
  height: 83px;
  background-size: 147px;
  margin: auto auto;
}

.footer {
  display: flex;
  flex-wrap: wrap;
  background-color: #2f2e2e;
  color: #babab8;
  font-size: 14px;
  overflow: auto;
  width: 100%;
  clear: both;
  margin: auto;
  min-height: 200px;
  font-size: 12px;

}

footer p {
  margin: 0;
}

.footcol {

  display: inline-block;
  float: left;
  padding: 30px;
  /*width: 300px;*/
}

.footcol > p > a {
  text-decoration: none;
  color: #babab8;
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

@media screen and (min-device-width: 800px) {
  .footer {
    justify-content: space-around;
  }
}

@media screen and (max-device-width: 500px) {

  #orgname, .tsa {
    font-size: 16px;
    line-height: 1.25em;
  }
}
</style>
