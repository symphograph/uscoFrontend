<script setup lang="ts">

</script>

<template>

    <div class="bgArea WindowArea">
      <div class="content-container">
        <router-view/>
      </div>
    </div>
</template>

<style>
body {
  overflow: hidden;
}

.myScrollArea {
  width: 100%;
  max-width: 100vw;
  height: 100%;
}

.WindowArea {
  padding: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.content-container {
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
}

.centralCol {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 80vh;
}
</style>
