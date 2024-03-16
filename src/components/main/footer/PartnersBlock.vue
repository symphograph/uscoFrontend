<script setup>

</script>

<template>
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
</template>

<style scoped>
.partners {
  font-size: 25px;
  text-transform: uppercase;
  padding: 40px 0 40px;
  overflow: auto;
  width: 100%;
  margin: auto;
}

.parttitle {
  margin: auto;
  text-align: center;
  font-family: abel,serif;
  height: 70px;
}

.rmh {
  background-image: url(/img/rmh.png);
  width: 147px;
  height: 83px;
  background-size: 147px;
  margin: auto auto;
}

.logorow {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: auto;
}

.exxonbox {
  width: 250px;
  height: 220px;
  font-size: 14px;
  text-align: center;
  display: inline-block;
  float: left;
  margin: auto;
}

.exxon {
  width: 135px;
  height: 140px;
  margin: auto auto;
  background-image: url(/img/sakhalin-logo-footer.svg);
  background-size: 280px 140px;

}

.exxon:hover {

  background-position: 135px;
}

.sakhcom {

  background-image: url(/img/sakhcom-logo.svg);
  width: 147px;
  height: 40px;
  background-size: 147px;
  margin: auto auto;
}

.astv {

  background-image: url(/img/astv.png);
  width: 147px;
  height: 53px;
  background-size: 147px;
  margin: auto auto;
}
</style>
