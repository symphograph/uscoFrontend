<template>
  <q-card v-if="evData && (evData.show || editMode)" square class="eventbox tdno" separator>
    <router-link :to="'/announce/'+evData.ev_id">
      <q-img :ratio="270/171" :src="topImgUrl">
      </q-img>
    </router-link>
    <q-card-section color="info" expand-separator>
      <q-badge
        v-if="evData.complited === false"
        class="absolute bage"
        color="green-6"
        rounded
        transparent
      >
        Скоро
      </q-badge>
      <q-badge v-if="evData.age" rounded style="background-color: orange;" floating>{{ evData.age + '+' }}</q-badge>
      <q-item v-ripple>
        <q-item-section avatar>
          <q-icon name="schedule">
          </q-icon>
        </q-item-section>
        <q-item-section>
          <q-item-label caption>{{ fDateTime(evData.datetime) }}</q-item-label>
        </q-item-section>
      </q-item>
      <a :href="Halls.find(el => el.id === evData.hall_id).map" target="_blank">
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon color="primary" name="place"></q-icon>
          </q-item-section>
          <q-item-section>
            <q-item-label caption>
              <span class="mapLink">{{ Halls.find(el => el.id === evData.hall_id).name }}</span>
            </q-item-label>
          </q-item-section>
        </q-item>
      </a>
    </q-card-section>
    <q-separator inset></q-separator>
    <q-card-section>
      <div class="text-subtitle1 text-center prog-name" v-html="evData.prog_name"></div>
    </q-card-section>
    <q-card-section class="text-body2 text-center">
      <div v-html="evData.sdescr"></div>
    </q-card-section>
    <q-card-section class="space">
      <div></div>
    </q-card-section>
    <q-separator inset></q-separator>
    <q-card-section v-if="evData.youtube_id">
      <a :href="'https://www.youtube.com/watch?v=' + evData.youtube_id" target="_blank">
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
    <template v-if="evData.pay">
      <q-separator inset></q-separator>
      <q-card-section class="text-body2 text-center">
        <q-btn v-if="evData.pay === 3 && !evData.complited && evData.ticket_link" label="Купить билет" :href="evData.ticket_link"></q-btn>
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
      <q-card-section v-if="!evDataEditable.Poster.exist" class="text-body2 text-center danger">
        Афиша не загружена
      </q-card-section>
      <q-card-section>
        <q-toggle v-model="evDataEditable.show" @update:model-value="saveData(0)" label="вкл" color="green" checked-icon="check" unchecked-icon="clear">
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
import DialogConfirm from './DialogConfirm.vue'
import { useQuasar } from 'quasar'
import { api } from 'boot/axios'
import { computed, inject, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { fDateTime } from 'src/myFuncts.js'


const apiUrl = String(process.env.API)
const q = useQuasar()
const token = inject('token')
const lvl = inject('lvl')
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
  evData: ref(false)
})
const evDataEditable = ref(props.evData)
const Halls = inject('Halls')

const topImgUrl = computed(()=>{
  let size = 480
  if (q.platform.is.mobile) {
    size = 1080
  }
  return String(process.env.API) +
    props.evData.TopPoster.folder +
    '/' + size + '/' +
    props.evData.TopPoster.fileName +
    '?ver=' + props.evData.TopPoster.md5
})


function saveData () {
      api.post(apiUrl + 'api/set/announce/announce.php', {
        params: {
          evdata: props.evData,
          token: token.value
        }
      })
        .then((response) => {
          if (response.data.result) {
            q.notify({
              type: 'positive',
              position: 'center',
              message: 'Готово',
              timeout: 300,
              closeBtn: 'Ок'
            })
            return true
          }
          let msg = 'Ой! Какая досада!'
          if (response.data.error) {
            msg = response.data.error
          }
          q.notify({
            color: 'negative',
            position: 'center',
            message: msg,
            icon: 'report_problem',
            timeout: 300,
            closeBtn: 'Закрыть'
          })

        })
        .catch(() => {
          q.notify({
            color: 'negative',
            position: 'center',
            message: 'Сервер не отвечает',
            icon: 'report_problem',
            closeBtn: 'Закрыть'
          })
        })
    }
function createNewAnnounce (id) {
      route.params.evid = id
      router.push({ path: '/announce/' + id })
      emit('newAnnounce')
    }
function delAnnounce () {
      api.post(apiUrl + 'api/set/announces/delannounce.php', {
        params: {
          id: props.evData.ev_id,
          token: token.value
        }
      })
        .then((response) => {
          if (response.data.result === 'Ok') {
            q.notify({
              timeout: 100,
              color: 'positive',
              position: 'center',
              message: 'Готово',
              closeBtn: 'Закрыть'
            })
            emit('IamDeleted')
            return true
          }

          let msg = 'Ой! Какая досада!'
          if (response.data.error) {
            msg = response.data.error
          }

          q.notify({
            color: 'negative',
            position: 'center',
            message: msg,
            icon: 'report_problem',
            closeBtn: 'Закрыть'
          })
        })
        .catch(() => {
          q.notify({
            color: 'negative',
            position: 'center',
            message: 'Сервер не отвечает',
            icon: 'report_problem'
          })
        })
    }
function changeShow () {
      emit('changeShow')
    }
function imeColor () {
      return 'grey-4'
    }

function payType () {
      if (props.evData.pay) {
        if(props.evData.pay === 3 && props.evData.complited){
          return 'Продажа завершена'
        }
        return payTypes.value[props.evData.pay]
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
