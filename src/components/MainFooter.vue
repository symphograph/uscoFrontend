<template>
  <q-footer elevated class="bg-grey-8 text-white">
    <div class="partners">
      <p class="parttitle">Партнеры</p>
      <div class="logorow">

        <div class="exxonbox">
          <a href="https://www.sakhalin-1.com/ru-ru" >
            <div class="exxon"></div>
          </a>
        </div>

        <div class="exxonbox">
          <a href="https://sakh.com" >
            <div class="sakhcom"></div>
          </a>
        </div>

        <div class="exxonbox">
          <a href="https://astv.ru">
            <div class="astv"></div>
          </a>
        </div>

        <div class="exxonbox">
          <a href="https://myhistorypark.ru">
            <div class="rmh"></div>
          </a>
        </div>

      </div>
    </div>

    <div class="footer">
      <div class="footcol">
        <p><a href="tel:+74242300518">+7-4242-300-518</a></p>
        <p><a href="mailto:mbu-gko@yandex.ru">mbu-gko@yandex.ru</a></p>
        <p><a href="mailto:yusgo.mbuyusko@sakhalin.gov.ru">yusgo.mbuyusko@sakhalin.gov.ru</a></p>
        <p><a href="https://maps.sakh.com/ys/objects/2602/" target="_blank">г. Южно-Сахалинск, ул.Ленина д. 156</a></p>
      </div>
      <div class="footcol">
        <p>МУНИЦИПАЛЬНОЕ БЮДЖЕТНОЕ УЧРЕЖДЕНИЕ<br>"ЮЖНО-САХАЛИНСКИЙ КАМЕРНЫЙ ОРКЕСТР"</p>
        <div id="sputnikArea"><span id="sputnik-informer"></span></div>

      </div>
      <div class="footcol">
        <p>УЧРЕДИТЕЛИ</p>
        <p><b>Администрация г.Южно-Сахалинска</b></p>
        <p>Департамент культуры и туризма г.Южно-Сахалинска</p>
        <p><router-link to="/main">Основные сведения</router-link></p>
        <p><router-link to="/docs">Документы</router-link></p><br><br>
        <p>Единый общероссийский детский телефон доверия:<br>
          <a href="tel:+78002000122">8-800-2000-122</a></p>
      </div>
    </div>
  </q-footer>
</template>

<script type="text/javascript">
(function(d, t, p) {
  var j = d.createElement(t); j.async = true; j.type = "text/javascript";
  j.src = ("https:" == p ? "https:" : "http:") + "//stat.sputnik.ru/cnt.js";
  var s = d.getElementsByTagName(t)[0]; s.parentNode.insertBefore(j, s);
})(document, "script", document.location.protocol);
</script>

<script setup>

</script>

<style scoped>

</style>
