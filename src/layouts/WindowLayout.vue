<script setup lang="ts">

</script>

<template>
  <q-page class="row no-wrap">
    <div class="bgArea col">
      <div class="column full-height">
        <router-view/>
      </div>
    </div>
  </q-page>
</template>

<style>
body {
  overflow: hidden;
}

.myScrollArea {
  width: 100%;
  max-width: 100vw;
}
</style>
