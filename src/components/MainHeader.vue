<template>
  <q-header v-if="tabList" class="bg-header text-white bg absolute-top" height-hint="48">
    <q-btn class="absolute" style="top: 0.5em; left: 1em; z-index: 1" dense flat round icon="menu" v-model="drawer"
           @click="moveDraver"/>
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
  <q-drawer v-model="leftDrawerOpen" side="left" elevated>
    <DrawerContent></DrawerContent>
  </q-drawer>
</template>

<script setup>
import { ref, provide, inject } from 'vue'
import DrawerContent from "components/DrawerContent.vue";

const tabList = inject('tabList')
const drawer = ref(0)
const emit = defineEmits(['moveDraver'])
const editMode = inject('editMode')
const lvl = inject('lvl')
const admin = inject('admin')
const leftDrawerOpen = inject('leftDrawerOpen')

function moveDraver () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}


</script>

<style scoped>
.q-list {
  color: #2f2e2e;
}
</style>
