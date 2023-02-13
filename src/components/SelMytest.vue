<template>
  <div class="q-pa-md" style="width: 20em">
    <div class="q-gutter-md">
      <q-select
        filled
        dark
        v-model="album"
        :options="albumList"
        map-options
        option-value="label"
        emit-value
        label="Альбом"
        color="teal"
        options-selected-class="text-deep-orange"
        @update:modelValue="emit('iAmSelected')"
      >
        <template v-slot:option="scope">
          <q-item v-bind="scope.itemProps" dark>
            <q-item-section avatar>
              <q-icon v-if="scope.opt.icon" :name="scope.opt.icon"/>
              <q-avatar v-if="scope.opt.ava" square>
                <img :src="scope.opt.ava">
              </q-avatar>
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ scope.opt.label }}</q-item-label>
              <q-item-label caption>{{ scope.opt.description }}</q-item-label>
            </q-item-section>
          </q-item>
        </template>
      </q-select>
    </div>
  </div>
</template>

<script setup>

import { inject } from 'vue'

const albumList = inject('albumList')
const album = inject('album')
const emit = defineEmits(['iAmSelected'])
</script>

<style scoped>
div {
  background-color: #2f2e2e;
}
</style>
