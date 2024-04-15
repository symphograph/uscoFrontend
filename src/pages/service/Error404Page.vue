<template>
  <div class="fullscreen bg-blue text-white text-center q-pa-md flex flex-center">
    <q-card class="no-shadow" style="background: none; padding: 1em; width: 100%">
      <q-card-section>
        <div class="text-h1" style="opacity:.6">404</div>
      </q-card-section>
      <q-card-section>
        <div class="text-h2" style="opacity:.4">
          Ой. Мы куда-то не туда попали...
        </div>
      </q-card-section>
      <q-card-section>
        <q-btn
          class="q-mt-xl"
          color="white"
          text-color="blue"
          unelevated
          to="/"
          label="На главную"
          no-caps
        />
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>

</script>
