<template>
  <q-layout view="hHh lpR lff" class="bg-primary text-white q-dark">
    <q-toolbar elevated class="bg-primary text-white shadow-5">
      <div class="bg-primary text-white topin">
        <router-link to="/">
          <div class="logo-area">
            <q-avatar square size="70px">
              <img src="/usso.logo.svg">
            </q-avatar>
            <div id="orgname">Южно-Сахалинский симфонический оркестр</div>
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
    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import DrawerContent from 'components/DrawerContent.vue'
import { ref, provide, computed, onMounted, onBeforeMount } from 'vue'
import MainHeader from 'components/MainHeader.vue'
import MainFooter from 'components/MainFooter.vue'
import { useQuasar } from 'quasar'
import { api } from 'boot/axios'
import { useRoute } from 'vue-router'

const q = useQuasar()
const apiUrl = String(process.env.API)
//const allCookies = q.cookies.getAll()
const route = useRoute()

const tabList = ref(
  [
    {
      id: 1,
      expand: true,
      label: 'ЮССО',
      caption: 'Об оркестре',
      ava: '',
      icon: 'img:/usso.logo.svg',
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
      url: '/anonces',
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
            name: 'Новости ЮССО',
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
</script>

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
a {
  text-decoration: none;
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

@media screen and (max-device-width: 500px) {

  #orgname, .tsa {
    font-size: 14px;
    line-height: 1.25em;
  }
}
</style>
