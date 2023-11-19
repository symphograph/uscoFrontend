<template>
  <q-header v-if="tabList" class="bg-header text-white bg absolute-top" height-hint="48">
    <q-btn class="absolute" style="top: 0.5em; left: 1em; z-index: 1" dense flat round icon="menu" v-model="drawer"
           @click="moveDrawer"/>
    <q-tabs inline-label class="bg-primary text-white shadow-2 mobile-hide" align="center">
      <q-item clickable to="/">
        <q-avatar square>
          <img src="/usso.logo.svg">
        </q-avatar>
      </q-item>
      <template v-for="tab in tabList" :key="tab.id">
        <q-btn-dropdown v-if="tab.expand" stretch flat :label="tab.label">
          <q-list style="width: 18em;">
            <q-item-label header>{{ tab.caption }}</q-item-label>
            <q-item v-for="li in tab.tabs" :key="li.id" clickable v-close-popup tabindex="0" :to="li.url">
              <q-item-section avatar>
                <q-avatar v-if="li.ava" color="seconfary" text-color="white">
                  <img :src="li.ava">
                </q-avatar>
                <q-avatar v-if="li.icon" :icon="li.icon" color="#ecd872" text-color="secondary"></q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label color="primary">{{ li.name }}</q-item-label>
                <q-item-label lines="2" caption>{{ li.caption }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
        <q-route-tab v-else :to="tab.url" :label="tab.label"/>
      </template>
      <q-item clickable onclick="finevision.activate_navbar()">
        <q-tooltip class="bg-gray" :offset="[10, 10]">
          Версия для слабовидящих
        </q-tooltip>
        <q-avatar text-color="white">
          <img src="/icons/glasses2.svg">
        </q-avatar>
      </q-item>
      <q-item v-if="admin" clickable @click="editMode = !editMode">
        <q-avatar icon="edit" :text-color="editMode ? 'red' : 'grey'"></q-avatar>
      </q-item>
    </q-tabs>
  </q-header>
  <!-- drawer content -->
  <q-drawer v-model="leftDrawerOpen" side="left" elevated overlay behavior="mobile">
    <DrawerContent></DrawerContent>
  </q-drawer>
</template>

<script setup>
import { ref, provide, inject } from 'vue'
import DrawerContent from "components/main/header/DrawerContent.vue";

const drawer = ref(0)
const emit = defineEmits(['moveDraver'])
const editMode = inject('editMode')
const lvl = inject('lvl')
const admin = inject('admin')
const leftDrawerOpen = inject('leftDrawerOpen')

const tabList = ref(
  [
    {
      id: 1,
      expand: true,
      label: 'ЮССО',
      caption: 'Об оркестре',
      ava: '',
      icon: '/img:usso.logo.svg',
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
            name: 'Новости ЮССО',
            caption: 'Новости оркестра',
            url: '/news/usso',
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

function moveDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}


</script>

<style>
.q-list {
  color: #2f2e2e;
}




.q-toolbar__title a {
  text-decoration: none;
}



.topin a {
  text-decoration: none;
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


</style>
