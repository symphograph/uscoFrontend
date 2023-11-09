<template>
  <div class="eventbox">
    <q-img :src="imgUrl"></q-img>
  </div>
  <div class="eventboxin">
    <div class="text">
      <p v-if="Announce.progName"><b>{{ Announce.progName }}</b></p>
      <br>
      <p><b>{{ fDateTime(Announce.eventTime) }}</b></p>
      <br>
      <div v-html="Announce.description"></div>
      <br>
      <small>
        Уважаемые посетители, убедительная просьба соблюдать
        меры безопасности в связи с распространением коронавирусной инфекции!
      </small>
      <br><br>
      <p>Справки по тел:</p>
      <div class="tel"><a href="tel:+74242300518">+7-4242-300-518</a></div>
      <br>
      <div class="tel"><a href="tel:+79624163689">+7-962-416-36-89</a></div>
      <br>
      <q-btn :href="vkHref()" target="_blank" color="primary" icon="ion-logo-vk" label="Поделиться"></q-btn>
    </div>
  </div>
</template>

<script setup>
import {computed, inject} from 'vue'
import { useQuasar } from 'quasar'
import { fDateTime } from 'src/myFuncts.js'

const apiUrl = String(process.env.API)
const q = useQuasar()
const Announce = inject('Announce')

const imgUrl = computed(() => {
  let size = q.platform.is.mobile ? 1080 : 480

  return apiUrl
    + '/img/posters'
    + '/' + size
    + '/poster_'
    + Announce.value.id
    + '.jpg'
    + '?ver='
    + Announce.value.verString
})

function vkHref () {
  return 'https://vk.com/share.php?' +
    'url=' + apiUrl + '/event.php?evid=' + String(Announce.value.id) +
    '&title=' + String(Announce.value.progName) +
    '&noparse=true' +
    '&image=' + String(imgUrl)
}


</script>

<style scoped>
.eventbox {
  width: 100%;
  background-repeat: no-repeat;
  padding: 1em;
  /* backdrop-filter: blur(15px); */
}

.eventbox .q-img {
  box-shadow: 0 0 1em black;
}

.eventboxin {
  text-align: justify;
}

@media screen and (min-device-width: 500px) {
  .eventbox {
    max-width: 40%;
  }

  .eventboxin {
    max-width: 50%;
  }
}
</style>
