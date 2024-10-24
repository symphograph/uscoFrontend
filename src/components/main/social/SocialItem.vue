<script setup lang="ts">
import {computed} from "vue";

const props = defineProps<{
  url: string;
  label: string;
  caption: string;
  iconFileName: string;
}>()

function goTo(url: string) {
  const otherWindow = window.open();
  if(!otherWindow) return;

  otherWindow.opener = null;
  otherWindow.location = url;
}

const iconPath = computed(() => {
  return `img:/img/auth/${props.iconFileName}`
})
</script>

<template>
  <q-item clickable :href="url" target="_blank" @click.stop.prevent="goTo(url)">
    <q-item-section avatar>
      <q-icon :name="iconPath" v-if="false"></q-icon>
      <q-img :src="`/img/auth/${iconFileName}`"></q-img>
    </q-item-section>
    <q-item-section>
      <q-item-label>{{ label }}</q-item-label>
      <q-item-label caption>{{ caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<style scoped>

</style>
