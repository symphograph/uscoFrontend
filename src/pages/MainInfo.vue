<template>
  <div class="content">
    <div class="text">
      <div class="p_title">Основные сведения</div><br>
      <p>Полное название:</p>
      МУНИЦИПАЛЬНОЕ БЮДЖЕТНОЕ УЧРЕЖДЕНИЕ<br>"ЮЖНО-САХАЛИНСКИЙ СИМФОНИЧЕСКИЙ ОРКЕСТР"<br><br>
      <p>Сокращенное название:</p>
      МБУ "ЮСКО"<br><br>
      Дата постановки на учет:<br>
      05.01.2001<br><br>
      Директор учреждения:
      <p><span style="text-transform: uppercase">Кириллова Майя Владимировна</span></p>
      <br>
      Учредитель: <br>
      <a href="https://culture.yuzhno-sakh.ru/" style="text-transform: uppercase">Департамент культуры и туризма администрации города Южно-Сахалинска</a>
      <br><br>
      <router-link to="/docs">Документы</router-link>
      <br>

      <br>
    </div>
  </div>
</template>

<script setup>
import { useMeta } from 'quasar'

const metaData = {
  title: 'Основные сведения'
}
useMeta(metaData)
</script>

<style scoped>

</style>
