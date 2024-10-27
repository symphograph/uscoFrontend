<script setup>

import {computed, inject, onMounted, provide, ref} from "vue";
import DrawerContent from "components/main/header/DrawerContent.vue";
import {useQuasar} from "quasar";
import {myUser} from "src/js/myAuth";
import {useRoute} from "vue-router";

const $q = useQuasar()
const toggleLeftDrawer = inject('toggleLeftDrawer')
const leftDrawerOpen = inject('leftDrawerOpen')

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
            name: 'Состав',
            caption: 'Артисты оркестра',
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
      label: 'Медиа',
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
    },
    {
      id: 8,
      expand: true,
      label: 'Библиотека',
      caption: 'Ноты и видео',
      permits: [16],
      tabs: [
        {id: 1, name: 'Ноты', caption: 'Партитуры и репертуар', url: '/lib/works', icon: 'music_notes'},
        {id: 2, name: 'Видео', caption: '', url: '/lib/videos', icon: 'smart_display'}
      ]
    }
  ])
provide('tabList', tabList)

const darkTrigger = inject('darkTrigger')
const darkSwitch = inject('darkSwitch')
const scrollPos = inject('scrollPos')

const allowedPowers = computed(() => {
  return route.meta?.allowedPowers ?? []
})

const editAvailable = computed(() => {
  if(!allowedPowers.value.length) return false
  return myUser.self.isPermit(allowedPowers.value)
})
provide('editAvailable', editAvailable)

const editModes = inject('editModes');

const editModesMap = {
  new: editModes.entry,
  news: editModes.entry,
  announce: editModes.announce,
  announces: editModes.announce,
  docs: editModes.doc,
  staff: editModes.staff,
  libVideo: editModes.libVideo,
  libWork: editModes.lib,
  libWorks: editModes.lib
  // Добавьте другие страницы и соответствующие разрешения
}

// Определяем активный режим в зависимости от текущей страницы
const activeEditMode = computed(() => {
  return editModesMap[route.name] ?? null
});
provide('activeEditMode', activeEditMode)

const deactivateAllEditModes = () => {
  Object.values(editModesMap).forEach(mode => {
    if (mode && mode.value) {
      mode.value = false;  // Отключаем каждый режим
    }
  });
};

// Функция для переключения активного режима редактирования
const toggleEditMode = () => {
  if (activeEditMode.value === null) return;

  if (activeEditMode.value.value) {
    deactivateAllEditModes();
  } else {
    // deactivateAllEditModes(); // Отключаем все режимы перед активацией нового
    activeEditMode.value.value = true;  // Включаем текущий активный режим
  }
};
provide('toggleEditMode', toggleEditMode)

function fineVision() {
  console.log('test fineVision')
}

onMounted(() => {

})
</script>

<template>
  <q-header class="bg-primary text-white" style="box-shadow: 0 0 6px black;">
    <q-toolbar>
      <q-btn dense flat round icon="menu" @click="toggleLeftDrawer"></q-btn>
      <q-btn flat dense to="/">
        <q-avatar square size="40px">
          <q-img src="/usso.logo.svg"></q-img>
        </q-avatar>
      </q-btn>
      <q-img height="40px"
             width="140px"
             v-if="scrollPos > 2 && false"
             :ratio="4"
             fit="fill"
             src="/img/logo/brand-name.svg"></q-img>
      <q-space></q-space>
      <q-tabs inline-label class="mobile-hide" dense style="margin-left: 2em">
        <template v-for="tab in tabList" :key="tab.id">
          <template v-if="myUser.self.isPermit(tab.permits || [])">
            <q-btn-dropdown v-if="tab.expand" stretch flat :label="tab.label" dense>
              <q-list class="listBg">
                <q-item-label header>{{ tab.caption }}</q-item-label>
                <template v-for="li in tab.tabs" :key="li.id">
                  <q-item clickable v-close-popup tabindex="0" :to="li.url">
                    <q-item-section avatar>
                      <q-avatar v-if="li.ava">
                        <img :src="li.ava" alt="img"/>
                      </q-avatar>
                      <q-avatar v-if="li.icon" :icon="li.icon"></q-avatar>
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>{{ li.name }}</q-item-label>
                      <q-item-label lines="2" caption>{{ li.caption }}</q-item-label>
                    </q-item-section>
                  </q-item>
                </template>
              </q-list>
            </q-btn-dropdown>
            <q-route-tab v-else :to="tab.url" :label="tab.label" d/>
          </template>
        </template>
        <q-item clickable @click="fineVision()" dense>
          <q-tooltip class="bg-gray" :offset="[10, 10]">
            Версия для слабовидящих
          </q-tooltip>
          <q-avatar text-color="white">
            <img src="/icons/glasses2.svg" alt="img">
          </q-avatar>
        </q-item>
      </q-tabs>
      <q-space></q-space>
      <q-item v-if="editAvailable" clickable @click="toggleEditMode" dense>
        <q-avatar icon="edit" :text-color="activeEditMode.value ? 'red' : 'grey'"></q-avatar>
      </q-item>
      <q-img height="35px"
             width="120px"
             v-if="scrollPos > 2 && false"
             :ratio="30/11"
             fit="contain"
             src="/img/logo/conductor-title.svg">
      </q-img>
      <q-toggle checked-icon="nightlight"
                v-if="$q.platform.is.desktop"
                unchecked-icon="light_mode"
                v-model="darkTrigger"
                dense
                @update:modelValue="darkSwitch()">
      </q-toggle>
    </q-toolbar>

  </q-header>
  <q-drawer v-model="leftDrawerOpen" side="left" overlay behavior="mobile" elevated
            style="background-color: var(--drContentBg)">
    <DrawerContent></DrawerContent>
  </q-drawer>

</template>

<style scoped lang="scss">
.listBg {
  background-color: var(--cardBg);
}

.listBg--dark {
  background-color: #ffffff;
}
</style>
