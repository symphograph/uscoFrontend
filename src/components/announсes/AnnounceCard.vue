<script setup lang="ts">
import DialogConfirm from '../DialogConfirm.vue';
import { useQuasar } from 'quasar';
import {computed, inject, onMounted, ref} from 'vue';
import {fDateTime, notifyWarning, numDeclension} from 'src/js/myFuncts';
import BtnDelete from 'components/main/BtnDelete.vue';
import axios from 'axios';
import {myAnnounce, Sketch} from "src/js/announce";
import {Hall} from "src/js/hall";
import {SketchBase} from "src/js/img";
import SketchImg from "components/SketchImg.vue";

const q = useQuasar();

const editModes = inject('editModes') as Record<string, any>;
const editMode = editModes.announce;

const emit = defineEmits(['newAnnounce', 'IamDeleted', 'changeShow', 'delSketch']);

const ticketCount = ref(null)

const hall = computed((): Hall => {
  return Hall.findById(props.announce.hallId)
})

function radarioUrl() {
  return `https://radario.ru/buy-tickets/${props.announce.radarioEventId}`
}

defineExpose({
  saveData
});

const payTypes = ref([
  '',
  '',
  'Вход свободный',
  'Билеты в продаже',
  'Вход по пригласительным',
  'Продажа завершена'
]);

const props = defineProps<{
  announce: Record<string, any>,
  pwUrl?: string,
  compact?: boolean
}>();

const AnnounceEditable = ref(props.announce);

function sketchUrl() {
  if (props.pwUrl) {
    return props.pwUrl;
  }
  let size = q.platform.is.mobile ? 1080 : 480;
  if (!props.announce.sketch) {
    return SketchBase.defaultUrl;
  }
  return SketchBase.getSrc(props.announce.sketch.md5, props.announce.sketch.ext, size)
}

function saveData() {
  myAnnounce.save(q,props.announce)
}

async function delAnnounce() {
  if (await myAnnounce.del(q, props.announce.id)) {
    emit('IamDeleted');
  }
}

async function hideOrShow() {
  if (await myAnnounce.hideOrShow(q, AnnounceEditable.value.id, AnnounceEditable.value.isShow)) {
    emit('changeShow', AnnounceEditable.value.id);
  } else {
    AnnounceEditable.value.isShow = !AnnounceEditable.value.isShow;
  }
}

function payType() {
  if (!props.announce.pay) {
    return '';
  }

  if (props.announce.pay === 3 && props.announce.completed) {
    return 'Продажа завершена';
  }
  return payTypes.value[props.announce.pay];

}

async function delSketch() {
  if (await Sketch.unlink(q, props.announce.id)) {
    emit('delSketch', props.announce.id);
  }
}

function loadRadario() {

  if(!props.announce?.radarioEventId || props.announce.completed) {
    return
  }
  const instance = axios.create();
  instance.get(radarioUrl(), {
    params: {
      distributionType: 'api',
      skipEventsInGroup: true
    }
  })
    .then((response) => {
      if (!response?.data?.result) {
        //throw new Error();
      }
      console.log('radario loaded')
      ticketCount.value = response.data.event.ticketCount
    })
    .catch((error) => {
      q.notify(notifyWarning(error,'Количество оставшихся билетов не загрузилось.'));
    });
}

onMounted(() => {
  if (props.announce.completed === false) {
    loadRadario()
  }
});

</script>

<template>
  <q-card v-if="announce && (announce.isShow || editMode)" square class="eventbox tdno" separator>
    <router-link :to="'/announce/'+announce.id">
      <div class="delBtnArea">
        <BtnDelete title="Удалить эскиз"
                   v-if="editMode && !pwUrl"
                   tooltip="Удалить эскиз"
                   throw-confirm
                   danger
                   @onOk="delSketch()"
        >
        </BtnDelete>
      </div>
      <SketchImg :url="sketchUrl()"></SketchImg>
    </router-link>
    <q-card-section color="info" expand-separator>
      <q-badge
        v-if="announce.completed === false"
        class="absolute bage"
        color="green-6"
        rounded
        transparent
      >
        Скоро
      </q-badge>
      <q-badge v-if="announce.age" rounded style="background-color: orange;" floating>{{ announce.age + '+' }}</q-badge>
      <q-item v-ripple dense>
        <q-item-section avatar>
          <q-icon name="schedule">
          </q-icon>
        </q-item-section>
        <q-item-section>
          <q-item-label caption>{{ fDateTime(AnnounceEditable.eventTime) }}</q-item-label>
        </q-item-section>
      </q-item>
      <q-item clickable v-ripple :href="hall.getMapHref()" target="_blank" dense>
        <q-item-section avatar>
          <q-icon name="place"></q-icon>
        </q-item-section>
        <q-item-section>
          <q-item-label caption>
            <span class="mapLink">{{ hall.name }}</span>
          </q-item-label>
        </q-item-section>
      </q-item>
    </q-card-section>
    <template v-if="!compact">
      <q-separator inset></q-separator>
      <q-card-section>
        <div class="text-subtitle1 text-center prog-name" v-html="announce.progName"></div>
      </q-card-section>
      <q-card-section class="text-body2 text-center">
        <div v-html="announce.sdescr"></div>
      </q-card-section>
      <q-card-section class="space">
        <div></div>
      </q-card-section>
      <q-separator inset></q-separator>
      <q-card-section v-if="announce.youtubeId">
        <q-item clickable
                v-ripple
                :href="'https://www.youtube.com/watch?v=' + announce.youtubeId"
                target="_blank">
          <q-item-section avatar>
            <q-icon name="ion-logo-youtube"></q-icon>
          </q-item-section>
          <q-item-section>
            <q-item-label caption>
              <span class="mapLink">Смотреть видео</span>
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-card-section>
      <template v-if="announce.pay">
        <q-separator inset></q-separator>
        <q-card-section class="text-body2 text-center">
          <template v-if="[3,4].includes(announce.pay) && !announce.completed && announce.ticketLink">
            <template v-if="announce.isShowTicketCount && announce.radarioEventId">
              <q-item>
                <q-item-section>
                  {{
                    `${numDeclension(ticketCount ?? 0, ['Остался', 'Осталось', 'Осталось'])} ${ticketCount} ${numDeclension(ticketCount ?? 0, ['билет', 'билета', 'билетов'])}`
                  }}
                </q-item-section>
              </q-item>
              <q-separator inset spaced></q-separator>
            </template>

            <q-item clickable :href="announce.ticketLink" target="_blank" dense style="text-align: left">
              <template v-if="announce.pay === 4">
                <q-item-section avatar>
                  <q-icon name="img:/img/uds.svg"></q-icon>
                </q-item-section>
                <q-item-section>
                  <q-item-label>Получить пригласительный</q-item-label>
                </q-item-section>
              </template>
              <template v-if="announce.pay === 3">
                <q-item-section avatar>
                  <q-icon name="shopping_cart"></q-icon>
                </q-item-section>
                <q-item-section>
                  <q-item-label>Купить билет</q-item-label>
                  <q-item-label caption v-if="announce.isPushkin">+ Доступно по пушкинской карте</q-item-label>
                </q-item-section>
              </template>
            </q-item>
          </template>

          <template v-else>
            {{ payType() }}
          </template>
        </q-card-section>
      </template>
      <q-separator inset></q-separator>
      <q-card-section class="text-body2 text-center">
        Xудожественный руководитель и главный дирижер - <b>Тигран Ахназарян</b>.
      </q-card-section>
      <template v-if="editMode">
        <q-card-section>
          <q-toggle v-model="AnnounceEditable.isShow" @update:model-value="hideOrShow()" label="вкл" color="green"
                    checked-icon="check" unchecked-icon="clear">
            <q-tooltip>Опубликовать</q-tooltip>
          </q-toggle>
        </q-card-section>
        <q-card-section>
          <DialogConfirm
            @onOk="delAnnounce"
            label="Удалить"
            color="red"
            title="Удаление анонса"
            message="
          Будет удалена запись об анонсе и связанные с ней изображения.
          <br><span style='color: red'>
          Это действие нельзя отменить.</span><br>
          Вы действительно хотите это сделать?">
          </DialogConfirm>
        </q-card-section>
      </template>
    </template>

  </q-card>
</template>

<style scoped>
.space {
  height: 100%;
}

.text-body2 {
  font-size: 12px;
}

.prog-name {
  font-family: GoudyTrajan, serif;
  color: var(--docTitle);
}

.bage {
  top: 0;
  left: 35%;
  transform: translateY(-20%);
  padding: 0.5em 2em;
}

.eventbox {
  margin: 5px;
  font-size: 20px;
  background-image: var(--cardGradient);
  background-repeat: no-repeat;
  border: none;
  color: var(--announceCardText);
  display: flex;
  flex-direction: column;
  align-content: space-between;
}

.eventbox:hover {
  /*-webkit-box-shadow: 1px 1px 5px rgba(41, 22, 8, 1.00);
  box-shadow: 1px 1px 5px rgba(41, 22, 8, 1.00);*/
  border: none;
  /*color: #2d3a63;*/
}

.evdate {
  font-size: 14px;
  color: #2d3a63;
  width: max-content;
  padding: 5px;
  background-color: #fbf5db;
  margin: auto auto 5px;
  box-shadow: 0 0 13px #b6b6c7a3;
  border: 1px solid #c5c0b6;
  border-radius: 3px;
}

a {
  text-decoration: none;
  /*color: #2f2e2e;*/
}

a {
  cursor: pointer;
}

.mapLink {
  font-size: 13px;
}

.delBtnArea {
  position: absolute;
  z-index: 1;
  top: 0.7em;
  right: 0.7em;
}
</style>
