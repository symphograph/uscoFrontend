<script setup>
import { inject, ref } from 'vue'
import TelegramForm from "components/main/TelegramForm.vue";
import { myUser } from 'src/js/myAuth';

const tabList = inject('tabList')
const editMode = inject('editMode')
const admin = inject('admin')

const darkTrigger = inject('darkTrigger')
const darkSwitch = inject('darkSwitch')
const showLoginDialog = inject('showLoginDialog')
</script>

<template>
  <div v-if="tabList" class="q-pa-md" style="max-width: 350px;">
    <q-list separator>
      <q-item clickable v-close-popup tabindex="0" to="/">
        <q-item-section avatar>
          <q-avatar square>
            <img src="/usso.logo.svg" alt="img">
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label>Главная</q-item-label>
          <q-item-label lines="2" caption>Главная страница</q-item-label>
        </q-item-section>
      </q-item>

      <template v-for="tab in tabList" :key="tab.id">
        <q-expansion-item
          v-if="tab.expand"
          :content-inset-level="0.2"
          expand-separator
          :icon="tab.icon"
          :label="tab.label"
          :header-style="{color: 'var(--dTitle)'}"
          :caption="tab.caption"
          default-closed
        >
          <q-item v-for="li in tab.tabs" :key="li.id" clickable v-close-popup tabindex="0" :to="li.url">
            <q-item-section avatar>
              <q-avatar v-if="li.ava">
                <img :src="li.ava">
              </q-avatar>
              <q-avatar v-if="li.icon" :icon="li.icon" color="#ecd872" text-color="secondary"></q-avatar>
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ li.name }}</q-item-label>
              <q-item-label lines="2" caption>{{ li.caption }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-expansion-item>
        <q-item v-else :to="tab.url" clickable v-ripple expand-separator>
          <q-item-section>{{ tab.label }}</q-item-section>
        </q-item>
      </template>

      <q-item tag="label" v-ripple v-if="admin">
        <q-item-section avatar>
          <q-avatar icon="edit" :text-color="editMode ? 'red' : 'grey'">
          </q-avatar>
        </q-item-section>
        <q-item-section>

        </q-item-section>
        <q-item-section>
          <q-toggle v-model="editMode" left-label color="red"></q-toggle>
        </q-item-section>
      </q-item>

      <q-item clickable>
        <q-item-section>
          <q-toggle checked-icon="nightlight"
                    unchecked-icon="light_mode"
                    left-label
                    v-model="darkTrigger"
                    dense
                    label="Цветовая тема"
                    @update:modelValue="darkSwitch()"></q-toggle>
        </q-item-section>
      </q-item>

      <template v-if="!myUser.self.isPermit([11])">
        <q-item clickable @click="showLoginDialog = true">
          <q-item-section avatar>
            <q-icon name="login"></q-icon>
          </q-item-section>
          <q-item-section>
            <q-item-label>Служебный вход</q-item-label>
          </q-item-section>
        </q-item>
      </template>
      <template v-else>
        <q-item clickable to="/profile">
          <q-item-section>
            <q-item-label>
              Ваш профиль
            </q-item-label>
          </q-item-section>
        </q-item>
      </template>
    </q-list>
  </div>

</template>



<style scoped>

.q-list, .q-item {
  color: #312a6b;
}
.q-list--dark, .q-item--dark {
  color: goldenrod !important;
}
.drTitle {
  color: var(--dTitle);
}
</style>
