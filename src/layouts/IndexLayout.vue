<script setup>

import AnderHeader from "components/main/header/AnderHeader.vue";
</script>

<template>
  <AnderHeader></AnderHeader>
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
