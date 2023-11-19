<script setup>

import {inject, ref} from "vue";
import DynamicFormItem from "components/account/DynamicFormItem.vue";

const authTypes = inject('authTypes')

const authUrl = String(process.env.Auth)
</script>

<template>
  <div class="content">
    <div class="text">
      <q-card dark>
        <q-card-section>
          <template v-for="authType in authTypes" :key="authType.id">
            <div style="padding: 0.5em">
              <DynamicFormItem :btnLabel="authType.label"
                               :icon="authType.img"
                               :url="authUrl + authType.url"
              ></DynamicFormItem>
            </div>
          </template>
        </q-card-section>
      </q-card>
    </div>

  </div>
</template>

<style scoped>

</style>
