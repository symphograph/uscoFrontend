<script setup>

import AnderHeader from "components/main/header/AnderHeader.vue";
</script>

<template>
  <AnderHeader v-if="false"></AnderHeader>
  <q-page>
    <div class="bgArea">
      <div class="pageArea">
        <router-view/>
      </div>
    </div>
  </q-page>
</template>

<style>
body {
  overflow: auto;
}
</style>
