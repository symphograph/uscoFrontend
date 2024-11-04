<script setup lang="ts">
import {computed, inject, Ref} from 'vue'
import {useQuasar} from 'quasar'
import {fDateTime} from 'src/js/myFuncts'
import PhoneNumber from "components/contacts/PhoneNumber.vue";
import BtnDelete from "components/main/BtnDelete.vue";
import {Hall} from "src/js/hall";
import {Poster} from "src/js/announce";
import {SketchBase} from "src/js/img";

const q = useQuasar()
const editMode = inject('editMode')
const announce = inject('Announce') as Ref<Record<string, any>>
const emit = defineEmits(['delPoster'])

const posterUrl = computed(() => {
  let size = q.platform.is.mobile ? 1080 : 480
  if(!announce.value.poster) {
    return SketchBase.defaultUrl;
  }
  return SketchBase.getSrc(announce.value.poster.md5,announce.value.poster.ext, size);
})

const hall = computed(() => {
  return Hall.findById(announce.value.hallId)
})

function vkHref() {
  return 'https://vk.com/share.php?'
    + 'url='
    + String(process.env.ServiceUrl)
    + '/announce/'
    + String(announce.value.id)
    + '&title='
    + String(announce.value.progName)
    + '&noparse=true'
    + '&image=' + String(posterUrl.value)
}

async function delPoster() {
  if (await Poster.unlink(q, announce.value.id)){
    delete announce.value.poster
    delete announce.value.posterId
  }
}

</script>

<template>
  <div class="posterArea relative-position" v-if="announce.poster">
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
    <q-item v-if="announce.poster.status === 'process'">
      <q-img></q-img>
      <q-item-section>
        <q-inner-loading showing label="Обработка"></q-inner-loading>
      </q-item-section>
    </q-item>
    <q-img :src="posterUrl" v-else>
      <template v-slot:error>
        <img src="/img/news/default_sketch.svg" alt="sketch"/>
      </template>
    </q-img>

  </div>
  <div class="eventboxin">
    <q-card class="transparent no-padding" flat>
      <q-card-section class="no-padding">
        <q-item>
          <q-item-section>
            <q-item-label class="title">
              {{ announce.progName }}
            </q-item-label>
            <q-item-label class="title">
              {{ fDateTime(announce.eventTime) }}
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-card-section>

      <q-card-section>
        <template v-for="(row, idx) in announce.parsedMD" :key="idx">

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
                      v-if="!announce.completed
                      && [3,4].includes(announce.pay)
                      && announce.ticketLink">

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
        <q-item clickable :href="hall.getMapHref()" target="_blank">
          <q-item-section avatar>
            <q-icon name="place"></q-icon>
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ hall?.name }}</q-item-label>
            <q-item-label caption>{{ hall?.suggest.address.formatted }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-card-section>

      <q-card-section v-if="!announce.completed
                      && [3,4].includes(announce.pay)
                      && announce.ticketLink">
        <q-item clickable :href="announce.ticketLink" target="_blank">
          <template v-if="announce.pay === 3">
            <q-item-section avatar>
              <q-icon name="shopping_cart"></q-icon>
            </q-item-section>
            <q-item-section>
              <q-item-label>Купить билет</q-item-label>
              <q-item-label caption v-if="announce.isPushkin">+ Доступно по пушкинской карте</q-item-label>
            </q-item-section>
          </template>
          <template v-if="announce.pay === 4">
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
