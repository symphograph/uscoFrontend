<script setup>

import {computed, inject} from "vue";

const sortedFolders = inject('sortedFolders')

const folderId = inject('folderId')
</script>

<template>
  <q-select v-model="folderId"
            clearable
            ref="selectRef"
            dark
            outlined
            :options="sortedFolders"
            map-options
            emit-value
            @update:model-value="onSelect()"
            @input-value="(val) => {
                    if(!val) return
                    newCateg = val
                    console.log(curCategory())
                  }"
            :rules="[val => val || 'Папка не выбрана']"
            option-value="id"
            option-label="title"
            label="Имя папки"
            options-dark
            color="amber">
    <template v-slot:prepend>
      <q-icon name="folder" color="amber"/>
    </template>
    <template v-slot:option="scope">
      <q-item v-bind="scope.itemProps">
        <q-item-section avatar>
          <q-icon name="folder" color="goldenrod"/>
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ scope.opt.id === -1 ? 'Новая папка' : scope.opt.title }}</q-item-label>
        </q-item-section>
      </q-item>
    </template>
  </q-select>
</template>

<style scoped>

</style>
