<script setup>

</script>

<template>
  <div class="fullscreen bg-blue text-white text-center q-pa-md flex flex-center">
    <q-card class="no-shadow" style="background: none; padding: 1em; width: 100%">
      <q-card-section>
        <div class="text-h5" style="opacity:.4; text-align: center">
          Поддержка приостановлена
        </div>
      </q-card-section>
      <q-card-section>
        <q-item-label caption>В связи с неоплатой услуг, поддержка сервиса приостановлена.</q-item-label>
      </q-card-section>
      <q-card-section v-if="false">
        <q-btn
          class="q-mt-xl"
          color="white"
          text-color="blue"
          unelevated
          to="/"
          label="Попробовать снова"
          no-caps
        />
      </q-card-section>
    </q-card>
  </div>
</template>

<style scoped>

</style>
