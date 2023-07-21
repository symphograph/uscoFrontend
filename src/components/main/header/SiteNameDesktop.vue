<template>
  <div class="bg-primary text-white topin">
    <router-link to="/">
      <div class="logo-area">
        <q-avatar square size="100px">
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
  name: "SiteNameDesktop"
}
</script>

<style scoped>
.topin {
  width: 80%;
  max-width: 1200px;
  overflow: hidden;
  margin: auto;
  padding-top: 2em;
  /*padding-bottom: 1em;*/
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  font-family: Gotham, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

#orgname {
  max-width: 18em;
  text-decoration: none;
  color: #ecd872;
  font-size: 23px;
  line-height: 1.5em;
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

.conductor {
  width: 245px;
  font-size: 12px;
  color: #e7ddcb;
  display: flex;
  flex-direction: column;
}

.conductor a:hover {
  text-decoration: underline;
  color: #d9b34d;
}

.tsa {
  font-family: 'Rubik Mono One', sans-serif;
  font-size: 25px;
  letter-spacing: 1px;
  color: white;
  transition: all 200ms;
}

.sitename {
  color: #e7ddcb;
  text-transform: uppercase;
  line-height: 1.9em;
  display: flex;
  justify-content: flex-end;
}
</style>
