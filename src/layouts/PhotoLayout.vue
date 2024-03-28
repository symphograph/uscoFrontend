<template>
  <q-layout v-if="isOptionsLoaded" view="hHh lpR lfr">
    <MainHeader></MainHeader>
    <q-page-container v-if="myUser.self.AccessToken" style="height: 100vh">
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script setup>

import MainHeader from "components/main/header/MainHeader.vue";
import {inject, onMounted} from "vue";
import {Dark, useMeta} from "quasar";
import {myUser} from "src/js/myAuth";

const isOptionsLoaded = inject('isOptionsLoaded')

onMounted(() => {
  Dark.set(true)
})

</script>


<style>
@font-face {
  font-family: 'Rubik Mono One';
  src: url(/fonts/RubikMonoOne-Regular.ttf) format("opentype");
}

@font-face {
  font-family: 'Open Sans Condensed';
  src: url(/fonts/Open_Sans_Condensed/OpenSansCondensed-Bold.ttf) format("opentype");
}

@font-face {
  font-family: 'GoudyTrajan';
  src: url(/fonts/GoudyTrajan-Medium.otf) format("opentype");
}

body {
  background-color: #1d1d1d;

}

.content {
  height: 100%;
}
a {
  text-decoration: none;
}
.logo-area {
  display: flex;
  justify-content: flex-start;
  padding: 1em;
  cursor: pointer;
}

#orgname {
  max-width: 15em;
  text-decoration: none;
  color: #ecd872;
  font-size: 25px;
  font-family: 'Rubik Mono One', sans-serif;
  text-shadow: 0 0 9px #000000;
  margin-left: 0.5em;
  white-space: pre-wrap;
}
.topin {
  width: 80%;
  max-width: 1200px;
  overflow: hidden;
  margin: auto;
  padding-top: 2em;
  padding-bottom: 1em;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  font-family: Gotham, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

.topin a {
  text-decoration: none;
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

@media screen and (max-device-width: 500px) {

  #orgname, .tsa {
    font-size: 14px;
    line-height: 1.25em;
  }
}
</style>
