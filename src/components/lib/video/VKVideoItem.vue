<script setup>

import {computed, inject, provide, ref} from 'vue';
import TimeCodeItem from "components/lib/video/TimeCodeItem.vue";
import TimeCodeDialog from "components/lib/video/TimeCodeDialog.vue";
import {TCode, Video} from "src/js/lib";
import {useQuasar} from "quasar";
import DescrDialog from "components/lib/video/DescrDialog.vue";
import VKVideoDialog from "components/lib/video/VKVideoDialog.vue";
import {copy} from "src/js/myFuncts";
import {myAnnounce} from "src/js/announce";

const q = useQuasar()

const props = defineProps({
  video: {
    type: Object,
    required: true
  }
})
const videoMutable = ref(props.video)

const emit = defineEmits(['onSave'])

function getAnnounce() {
  const announceId = videoMutable.value.announceId
  return myAnnounce.findById(announceId)
}

const dateHall = computed(() => {
  const announce = getAnnounce()
  if(!announce) {
    return videoMutable.value.recordedAt
  }
  return `${videoMutable.value.recordedAt} - ${announce.Hall.name}`
})

async function onSave() {
  emit('onSave')
  /*
  loading.value = true
  const video = await Video.get(q, props.video.id)
  if (video) {
    Object.assign(videoMutable.value, video)
  }
  loading.value = false
  */

}

const editMode = inject('editMode');
const isHover = ref(false);

const isOpenVKVideoDialog = ref(false)
provide('isOpenVKVideoDialog', isOpenVKVideoDialog)

const isOpenDescrDialog = ref(false)
provide('isOpenDescrDialog', isOpenDescrDialog)

const isTimeCodesOpen = ref(false)

const isTCodeDialogOpen = ref(false)
provide('isTCodeDialogOpen', isTCodeDialogOpen)



const loading = ref(false)

function openDialog() {
  isOpenVKVideoDialog.value = true
}

function splitTitle(str) {
  const parts = str.split(' - ');
  return { date: parts[0], title: parts.slice(1).join(' - ') };
}

function getVideoUrl(start = null)
{
  let url = 'https://vk.com/video'
  const ownerAndId = `${props.video.owner_id}_${props.video.id}`
  let params = `list=${props.video.access_key}`
  if(start) {
    params = `${params}&t=${start}`
  }
  return  `${url}${ownerAndId}?${params}`
}

function goToMoment(start = null) {

  const url =  getVideoUrl(start)
  window.open(url, '_blank')
  /*
  const otherWindow = window.open();
  if(!otherWindow) return;

  otherWindow.opener = null;
  otherWindow.location = url;

   */
}

function openTimeCode() {
  isTCodeDialogOpen.value = true
}

async function loadTCodes() {
  loading.value = true
  videoMutable.value.timeCodes = await TCode.getList(q, props.video.id)
  loading.value = false
}
provide('loadTCodes', loadTCodes)

async function onSaveTCode() {
  await loadTCodes()
  videoMutable.value.description = await Video.getDescr(q, props.video.id)
  isOpenDescrDialog.value = true
}


</script>

<template>
  <q-card>
      <q-img style="cursor: pointer"
             :src="video.image[4].url"
             :ratio="1920/1080"
             @mouseover="isHover = true"
             @mouseleave="isHover = false"
             class="rounded-borders">

          <div class="absolute-top-left text-subtitle2">
            {{ dateHall }}
          </div>
          <div class="absolute-top-right no-padding" v-if="editMode">
            <q-btn :loading="loading"
                   icon="edit"
                   flat
                   @click.stop.prevent="openDialog()"></q-btn>
            <q-btn :loading="loading"
                   v-if="false"
                   icon="help"
                   flat
                   @click.stop.prevent="copy(getVideoUrl(), q)"></q-btn>
          </div>
          <div class="absolute-center" v-if="isHover" style="border-radius: 50%">
            <q-btn icon="play_circle"
                   style="cursor: pointer"
                   round
                   :loading="loading"
                   @click="goToMoment()"></q-btn>
          </div>
          <div class="absolute-bottom text-center"
               style="display: flex; justify-content: space-between"
               @click="goToMoment()">
            <div>{{ ' ' }}</div>
            <div>{{ video.title }}</div>
            <div>
              <q-btn icon="menu"
                     :loading="loading"
                     @click.stop.prevent="isTimeCodesOpen = !isTimeCodesOpen">

            </q-btn>
            </div>


          </div>
      </q-img>
    <template v-if="editMode">
      <VKVideoDialog :video="videoMutable" @onSave="onSave"></VKVideoDialog>
    </template>

    <q-slide-transition>
      <q-list separator v-if="isTimeCodesOpen">
        <template v-for="timeCode in videoMutable.timeCodes" :key="`work_${video.id}_${timeCode.id}`">
          <q-expansion-item v-if="timeCode?.children?.length"
                            :content-inset-level="0.5">

            <template v-slot:header>
              <q-item class="full-width no-padding">
                <q-item-section>
                  <q-item-label caption>{{timeCode.caption}}</q-item-label>
                  <q-item-label>{{ timeCode.label }}</q-item-label>
                </q-item-section>
              </q-item>
            </template>

            <template v-for="(patrition, pidx) in timeCode.children"
                      :key="`part_${patrition.workId}_${pidx}`">

              <TimeCodeItem :timeCode="patrition"
                            :video="video"
                            @onDelete="loadTCodes"
                            @onSave="onSaveTCode"
                            @goToMoment="goToMoment">
              </TimeCodeItem>

            </template>
          </q-expansion-item>

          <TimeCodeItem v-else-if="timeCode.type !== 'part'"
                        :video="video"
                        @onDelete="loadTCodes"
                        @goToMoment="goToMoment"
                        @onSave="onSaveTCode"
                        :timeCode="timeCode">
          </TimeCodeItem>

        </template>

        <q-item v-if="editMode" clickable @click="openTimeCode()">
          <q-item-section avatar>
            <q-btn icon="add"></q-btn>
          </q-item-section>
          <q-item-section>
            <q-item-label>Добавить таймкод</q-item-label>
          </q-item-section>
          <TimeCodeDialog :dur="video.duration"
                          :video="video"
                          @onSave="onSaveTCode"
                          ></TimeCodeDialog>
          <DescrDialog :video="videoMutable"></DescrDialog>
        </q-item>
      </q-list>
    </q-slide-transition>

  </q-card>

</template>

<style scoped>
.ItemCard {
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
