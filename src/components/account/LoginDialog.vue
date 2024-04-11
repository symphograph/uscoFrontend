<script setup>
import 'src/css/dialog.css'
import DynamicFormItem from "components/account/DynamicFormItem.vue";
import {inject} from "vue";

const authTypes = inject('authTypes')
const authUrl = String(process.env.Auth)
const showLoginDialog = inject('showLoginDialog')
const leftDrawerOpen = inject('leftDrawerOpen')

function onHide() {
  leftDrawerOpen.value = false
}
</script>

<template>
  <q-dialog v-model="showLoginDialog" @hide="onHide()">
    <q-card class="dialogArea" style="color: var(--dTitle)">
      <q-card-section>
        <q-item dense>
          <q-item-section>
            <q-item-label lines="1" class="cardTitle"><q-icon name="lock"></q-icon>Служебный вход</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-btn
                   round flat
                   icon="close"
                   @mouseover="() => console.log('kjk')"
                   @click.stop.prevent="showLoginDialog = false"></q-btn>
          </q-item-section>
        </q-item>

        <q-separator></q-separator>

        <q-item>
          <q-item-section>
            <q-item-label>
              Предназначен для сотрудников оркестра
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable to="/vacancies" @click="showLoginDialog = false">
          <q-item-section>
            <q-item-label caption>
              Если Вы не сотрудник оркестра, то приходите к нам работать.
            </q-item-label>
            <q-item-label caption>
              У нас сейчас есть несколько интересных вакансий.😃
            </q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-icon name="open_in_new"></q-icon>
          </q-item-section>
        </q-item>
      </q-card-section>
      <q-card-section>
        <template v-for="authType in authTypes" :key="authType.id">
          <DynamicFormItem :btnLabel="authType.label"
                           :icon="authType.img"
                           :url="authUrl + authType.url"
          ></DynamicFormItem>
        </template>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<style scoped>
.cardTitle {
  font-size: 18px;
}
</style>
