<template>
  <div class="bg-primary text-white topin">
    <router-link to="/">
      <div class="logo-area">
        <q-avatar square size="65px">
          <img src="/usso.logo.svg">
        </q-avatar>
        <div id="orgname">
          <span id="us">Южно-Сахалинский</span><br>
          <span id="sim">симфонический</span><br>
          <span id="or">оркестр</span>
        </div>
      </div>
    </router-link>
    <div class="conduct-area">
      <router-link to="/conductor">
        <div class="conductor">
          <span>Художественный руководитель</span>
          <span>и главный дирижер</span>
          <a href="/conductor"><span class="tsa">Тигран Ахназарян</span></a>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "SiteNameMobile"
}
</script>

<style scoped>
.topin {
  overflow: hidden;
  margin: auto;
  padding-top: 2em;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  font-family: Gotham, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

#orgname {
  max-width: 18em;
  text-decoration: none;
  color: #ecd872;
  font-size: 16px;
  font-family: 'Rubik Mono One', sans-serif;
  text-shadow: 0 0 9px #000000;
  margin-left: 0.5em;
  white-space: pre-wrap;
}

#us{
  font-size: 1em;
}

#sim{
  font-size: 1.23em;
}

#or{
  font-size: 1em;
}

.logo-area {
  display: flex;
  justify-content: flex-start;
  padding: 1em;
  cursor: pointer;
}

.conduct-area {
  display: flex;
  justify-content: flex-start;
  padding: 1em;
  cursor: pointer;
}
</style>
