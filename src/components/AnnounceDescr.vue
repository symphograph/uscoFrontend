<template>
  <div class="eventbox">
    <q-img
      v-if="evData.verLink"
      :ratio="evData.Poster.width/evData.Poster.height"
      initial-ratio="1080/1534"
      :src="imgUrl"></q-img>
  </div>
  <div class="eventboxin">
    <div class="text">
      <p v-if="evData.prog_name"><b>{{ evData.prog_name }}</b></p>
      <br>
      <p><b>{{ fDateTime(evData.datetime) }}</b></p>
      <br>
      <div v-html="evData.description"></div>
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
import moment from 'moment'
import { computed, ref } from 'vue'
import { useQuasar } from 'quasar'
import { fDateTime } from 'src/myFuncts.js'

const apiUrl = String(process.env.API)
const q = useQuasar()
const props = defineProps({
  evData: ref(null)
})

const imgUrl = computed(() => {
  let size = 480
  if (q.platform.is.mobile) {
    size = 1080
  }
  return apiUrl +
    String(props.evData.Poster.folder) +
    '/' + String(size) + '/' +
    props.evData.TopPoster.fileName +
    '?ver=' + props.evData.Poster.md5
})

function vkHref () {
  return 'https://vk.com/share.php?' +
    'url=' + apiUrl + '/event.php?evid=' + String(props.evData.ev_id) +
    '&title=' + String(props.evData.prog_name) +
    '&noparse=true' +
    '&image=' + String(imgUrl)
}


</script>

<style scoped>
.eventbox {
  width: 100%;
  background-repeat: no-repeat;
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
