<script setup>
import GosUslugi2023 from "components/main/footer/GosUslugi2023.vue";
import PartnersBlock from "components/main/footer/PartnersBlock.vue";
import {onMounted} from "vue";
import {useQuasar} from "quasar";
import DeveloperInfo from "components/main/footer/DeveloperInfo.vue";

const q = useQuasar()
const isDebug = !!process.env.isDebug

onMounted(() => {

})
</script>

<template>
  <div class="bg-grey-8 text-white">
    <PartnersBlock></PartnersBlock>
    <GosUslugi2023 v-if="!isDebug && $route.fullPath !== '/staff'"></GosUslugi2023>
    <div class="footer">
      <div class="footcol">
        <p><a href="tel:+74242300518">+7-4242-300-518</a></p>
        <p><a href="mailto:mbu-gko@yandex.ru">mbu-gko@yandex.ru</a></p>
        <p><a href="mailto:yusgo.mbuyusko@sakhalin.gov.ru">yusgo.mbuyusko@sakhalin.gov.ru</a></p>
        <p><a href="https://maps.sakh.com/ys/objects/2602/" target="_blank">г. Южно-Сахалинск, ул.Ленина д. 156</a></p>
        <template v-if="q.platform.is.desktop">
          <q-separator spaced="1em"></q-separator>
          <DeveloperInfo></DeveloperInfo>
        </template>
      </div>

      <div class="footcol">
        <p>МУНИЦИПАЛЬНОЕ БЮДЖЕТНОЕ УЧРЕЖДЕНИЕ<br>"ЮЖНО-САХАЛИНСКИЙ СИМФОНИЧЕСКИЙ ОРКЕСТР"</p>
        <div id="sputnikArea"><span id="sputnik-informer"></span></div>
      </div>

      <div class="footcol">
        <p>УЧРЕДИТЕЛИ</p>
        <p><b>Администрация г.Южно-Сахалинска</b></p>
        <p>Департамент культуры и туризма г.Южно-Сахалинска</p>
        <p>
          <router-link to="/main">Основные сведения</router-link>
        </p>
        <p>
          <router-link to="/docs">Документы</router-link>
        </p>
        <br><br>
        <p>Единый общероссийский детский телефон доверия:<br>
          <a href="tel:+78002000122">8-800-2000-122</a></p>
        <template v-if="q.platform.is.mobile">
          <q-separator spaced="1em"></q-separator>
          <DeveloperInfo></DeveloperInfo>
        </template>
      </div>
    </div>
  </div>

  <component v-if="!isDebug  && $route.fullPath !== '/staff'" :is="'script'" src='/js/sputnik.js'></component>
</template>

<style scoped>
.footer {
  display: flex;
  flex-wrap: wrap;
  background-color: #2f2e2e;
  color: #babab8;
  overflow: auto;
  width: 100%;
  clear: both;
  margin: auto;
  min-height: 200px;
  font-size: 12px;
}

.footer p {
  margin: 0;
}

.footcol {
  display: inline-block;
  float: left;
  padding: 30px;
}

.footcol > p > a {
  text-decoration: none;
  color: #babab8;
}

@media screen and (min-device-width: 800px) {
  .footer {
    justify-content: space-around;
  }
}
</style>
