<script setup>
import {computed, inject} from 'vue'
import {useQuasar} from 'quasar'
import {fDateTime, imgUrl, notifyError} from 'src/js/myFuncts'
import PhoneNumber from "components/contacts/PhoneNumber.vue";
import BtnDelete from "components/main/BtnDelete.vue";
import {api} from "boot/axios";


const apiUrl = String(process.env.API)
const q = useQuasar()
const editMode = inject('announceEditMode')
const Announce = inject('Announce')
const emit = defineEmits(['delPoster'])

const posterUrl = computed(() => {
  let size = q.platform.is.mobile ? 1080 : 480
  if(!Announce.value.poster) {
    return '/img/news/default_sketch.svg';
  }
  return imgUrl(apiUrl, Announce.value.poster.md5, Announce.value.poster.ext, size)
})

function vkHref() {
  return 'https://vk.com/share.php?'
    + 'url='
    + String(process.env.ServiceUrl)
    + '/announce/'
    + String(Announce.value.id)
    + '&title='
    + String(Announce.value.progName)
    + '&noparse=true'
    + '&image=' + String(posterUrl.value)
}

function delPoster() {
  api.post(apiUrl + 'api/event/poster.php', {
    params: {
      method: 'unlink',
      id: Announce.value.id,
    }
  })
    .then((response) => {
      if (!!!response?.data?.result) {
        throw new Error();
      }
      delete Announce.value.poster
      delete Announce.value.posterId
    })
    .catch((error) => {
      q.notify(notifyError(error))
    })
}

</script>

<template>
  <div class="posterArea relative-position" v-if="Announce.poster">
    <template v-if="editMode">
      <div style="position: absolute; right: 1em; top:1em; z-index: 10">
        <BtnDelete throw-confirm
                   title="Удалить афишу"
                   tooltip="Удалить афишу"
                   @onOk="delPoster()"
        >
        </BtnDelete>
      </div>
    </template>
    <q-item v-if="Announce.poster.status === 'process'">
      <q-img></q-img>
      <q-item-section>
        <q-inner-loading showing label="Обработка"></q-inner-loading>
      </q-item-section>
    </q-item>
    <q-img :src="posterUrl" v-else>
      <template v-slot:error>
        <img src="/img/news/default_sketch.svg"/>
      </template>
    </q-img>

  </div>
  <div class="eventboxin">
    <q-card class="transparent no-padding" flat>
      <q-card-section class="no-padding">
        <q-item>
          <q-item-section>
            <q-item-label class="title">
              {{ Announce.progName }}
            </q-item-label>
            <q-item-label class="title">
              {{ fDateTime(Announce.eventTime) }}
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-card-section>

      <q-card-section>
        <template v-for="(row, idx) in Announce.parsedMD" :key="idx">

          <div v-if="row.type === 'text'">
            <div v-if="row.content !== '\n'" v-html="row.content" class="textBlock"></div>
            <br v-else>
          </div>

          <div v-if="row.type === 'video'" class="videoItem">
            <q-video
              :ratio="16/9"
              :src="'https://www.youtube.com/embed/' + row.content"
            ></q-video>
          </div>
        </template>
      </q-card-section>



      <q-card-actions align="right"
                      v-if="!Announce.completed
                      && [3,4].includes(Announce.pay)
                      && Announce.ticketLink">

      </q-card-actions>

      <q-card-section>
        <q-item dense>
          <q-item-label caption>
            Уважаемые посетители, убедительная просьба соблюдать
            меры безопасности в связи с распространением коронавирусной инфекции!
          </q-item-label>
        </q-item>
      </q-card-section>

      <q-card-section>
        <q-item clickable :href="Announce.Hall.map" target="_blank">
          <q-item-section avatar>
            <q-icon name="place"></q-icon>
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ Announce.Hall.name }}</q-item-label>
            <q-item-label caption>{{ Announce.Hall.suggest.address.formatted }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-card-section>

      <q-card-section v-if="!Announce.completed
                      && [3,4].includes(Announce.pay)
                      && Announce.ticketLink">
        <q-item clickable :href="Announce.ticketLink" target="_blank">
          <template v-if="Announce.pay === 3">
            <q-item-section avatar>
              <q-icon name="shopping_cart"></q-icon>
            </q-item-section>
            <q-item-section>
              <q-item-label>Купить билет</q-item-label>
              <q-item-label caption v-if="true">+ Доступно по пушкинской карте</q-item-label>
            </q-item-section>
          </template>
          <template v-if="Announce.pay === 4">
            <q-item-section avatar>
              <q-icon name="img:/img/uds.svg"></q-icon>
            </q-item-section>
            <q-item-section>
              <q-item-label>Получить пригласительный</q-item-label>
            </q-item-section>
          </template>



        </q-item>
      </q-card-section>

      <q-separator></q-separator>

      <q-card-section class="no-padding">
        <PhoneNumber phone-number="+7-(4242)-300-518"></PhoneNumber>
        <PhoneNumber phone-number="+7-(962)-416-36-89"></PhoneNumber>
      </q-card-section>

      <q-separator spaced="1em"></q-separator>

      <q-card-actions align="right">

        <q-btn :href="vkHref()" target="_blank" outline icon="img:/img/logo/vk/VK Logo Black & White.svg"
               label="Поделиться"></q-btn>
      </q-card-actions>
    </q-card>

  </div>
</template>

<style scoped>
.title {
  font-family: 'Open Sans Condensed', sans-serif;
  font-size: 20px;
}

.posterArea {
  width: 100%;
  height: max-content;
  box-shadow: 0 0 1em black;
}

.posterArea .q-img {
  /*border: black 1px solid;*/

}

.eventboxin {
  /*text-align: justify;*/
  /*padding: 1em;*/
}

.textBlock {
  font-size: 16px;
  text-align: justify;
  overflow-x: hidden;
}

@media screen and (min-device-width: 500px) {
  .posterArea {
    max-width: 40%;
  }

  .eventboxin {
    max-width: 50%;
  }
}
</style>
