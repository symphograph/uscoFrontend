<template>
  <q-card v-if="Announce && (Announce.isShow || editMode)" square class="eventbox tdno" separator>
    <router-link :to="'/announce/'+Announce.id">
      <q-img :ratio="1080/608" :src="sketchUrl" fit="fill">
      </q-img>
    </router-link>
    <q-card-section color="info" expand-separator>
      <q-badge
        v-if="Announce.completed === false"
        class="absolute bage"
        color="green-6"
        rounded
        transparent
      >
        Скоро
      </q-badge>
      <q-badge v-if="Announce.age" rounded style="background-color: orange;" floating>{{ Announce.age + '+' }}</q-badge>
      <q-item v-ripple>
        <q-item-section avatar>
          <q-icon name="schedule">
          </q-icon>
        </q-item-section>
        <q-item-section>
          <q-item-label caption>{{ fDateTime(AnnounceEditable.datetime) }}</q-item-label>
        </q-item-section>
      </q-item>
      <q-item clickable v-ripple :href="Announce.Hall.map" target="_blank">
        <q-item-section avatar>
          <q-icon color="primary" name="place"></q-icon>
        </q-item-section>
        <q-item-section>
          <q-item-label caption>
            <span class="mapLink">{{ Announce.Hall.name }}</span>
          </q-item-label>
        </q-item-section>
      </q-item>
    </q-card-section>
    <q-separator inset></q-separator>
    <q-card-section>
      <div class="text-subtitle1 text-center prog-name" v-html="Announce.progName"></div>
    </q-card-section>
    <q-card-section class="text-body2 text-center">
      <div v-html="Announce.sdescr"></div>
    </q-card-section>
    <q-card-section class="space">
      <div></div>
    </q-card-section>
    <q-separator inset></q-separator>
    <q-card-section v-if="Announce.youtubeId">
      <a :href="'https://www.youtube.com/watch?v=' + Announce.youtubeId" target="_blank">
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon color="primary" name="ion-logo-youtube"></q-icon>
          </q-item-section>
          <q-item-section>
            <q-item-label caption>
              <span class="mapLink">Смотреть видео</span>
            </q-item-label>
          </q-item-section>
        </q-item>
      </a>
    </q-card-section>
    <template v-if="Announce.pay">
      <q-separator inset></q-separator>
      <q-card-section class="text-body2 text-center">
        <q-btn v-if="Announce.pay === 3 && !Announce.completed && Announce.ticketLink" label="Купить билет"
               :href="Announce.ticketLink"></q-btn>
        <template v-else>
          {{ payType() }}
        </template>
      </q-card-section>
    </template>
    <q-separator inset></q-separator>
    <q-card-section class="text-body2 text-center">
      Художественный руководитель и главный дирижер - <b>Тигран Ахназарян</b>.
    </q-card-section>
    <template v-if="editMode">
      <q-card-section v-if="!AnnounceEditable.Poster.exist" class="text-body2 text-center danger">
        Афиша не загружена
      </q-card-section>
      <q-card-section>
        <q-toggle v-model="AnnounceEditable.isShow" @update:model-value="saveData(0)" label="вкл" color="green"
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
  </q-card>
</template>

<script setup>
import DialogConfirm from '../DialogConfirm.vue'
import {useQuasar} from 'quasar'
import {api} from 'boot/axios'
import {computed, inject, onMounted, ref} from 'vue'
import {useRoute, useRouter} from 'vue-router'
import {fDateTime, notifyError, notifyOK} from 'src/myFuncts.js'


const apiUrl = String(process.env.API)
const q = useQuasar()
const route = useRoute()
const router = useRouter()
const editMode = inject('editMode')

const emit = defineEmits(['newAnnounce', 'IamDeleted', 'changeShow'])


defineExpose({
  saveData
})

const payTypes = ref([
  '',
  '',
  'Вход свободный',
  'Билеты в продаже',
  'Вход по пригласительным',
  'Продажа завершена'
])

const props = defineProps({
  Announce: ref(false)
})
const AnnounceEditable = ref(props.Announce)

const sketchUrl = computed(() => {
  let size = 480
  if (q.platform.is.mobile) {
    size = 1080
  }
  return String(process.env.API) +
    props.Announce.Sketch.folder +
    '/' + size + '/' +
    props.Announce.Sketch.fileName +
    '?ver=' + props.Announce.Sketch.md5
})

onMounted(() => {
  //console.log(AnnounceEditable)
})

function saveData() {
  api.post(apiUrl + 'api/event/announce.php', {
    params: {
      method: 'update',
      announce: props.Announce
    }
  })
    .then((response) => {
      q.notify(notifyOK(response?.data?.result ?? ''))
    })
    .catch((error) => {
      q.notify(notifyError(error))
    })
}

function delAnnounce() {
  api.post(apiUrl + 'api/event/announce.php', {
    params: {
      method: 'del',
      id: props.Announce.id
    }
  })
    .then((response) => {
      if (!response?.data?.result) {
        throw new Error()
      }
      q.notify(notifyOK(response?.data?.result ?? null))
      emit('IamDeleted')
    })
    .catch((error) => {
      q.notify(notifyError(error))
    })
}

function changeShow() {
  emit('changeShow')
}

function payType() {
  if (props.Announce.pay) {
    if (props.Announce.pay === 3 && props.Announce.completed) {
      return 'Продажа завершена'
    }
    return payTypes.value[props.Announce.pay]
  }
  return ''
}
</script>

<style scoped>
.space {
  height: 100%;
}

.text-body2 {
  font-size: 12px;
}

.prog-name {
  font-family: GoudyTrajan, serif;
}

.bage {
  top: 0;
  left: 35%;
  transform: translateY(-20%);
  padding: 0.5em 2em;
}

.eventbox {
  /*height: 750px;*/
  margin: 5px;
  font-size: 20px;
  background-color: #fff8ef;
  background-repeat: no-repeat;
  border: none;
  color: #694d2a;
  display: flex;
  flex-direction: column;
  align-content: space-between;
}

.eventbox:hover {
  -webkit-box-shadow: 1px 1px 5px rgba(41, 22, 8, 1.00);
  box-shadow: 1px 1px 5px rgba(41, 22, 8, 1.00);
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
  color: #2f2e2e;
}

a {
  cursor: pointer;
}

.mapLink {
  font-size: 13px;
}

</style>
