<template>
  <div class="narea">
    <div class="nimg_block">
      <div>
        <q-item :to="link()" dense class="no-padding">
          <q-img
            :src="imgUrl()"
            :ratio="1920/1080"
            fit="fill"
            placeholder-src="/img/news/default_1920x1080.png"
          >
            <template v-slot:error>
              <q-img src="/img/news/default_1920x1080.png"
                     :ratio="1920/960"
                     fit="fill"
              ></q-img>
            </template>
          </q-img>
        </q-item>
      </div>
    </div>
    <div class="tcol">
      <div class="ntitle">
        <a :href="link()">
          {{ item.title }}
        </a>
      </div>
      <br>
      <a :href="link()">
        {{ item.descr }}
      </a>
      <br><br>
      <span class="ndate">{{ fDate(item.date) }}</span>
      <br>
    </div>
  </div>
  <template v-if="editMode">
    <div style="display: flex; justify-content: right; grid-gap: 1em">

      <q-btn color="red" icon="delete" outline @click="delEntry()"><q-tooltip anchor="top middle">Удалить</q-tooltip></q-btn>
      <q-btn label="Скрыть" color="orange" v-if="isShow" outline @click="hideOrShow()">
      </q-btn>
      <q-btn label="Опубликовать" color="green" outline v-else @click="hideOrShow()"></q-btn>
      <q-btn icon="edit" outline :to="'/new/' + item.id">
        <q-tooltip anchor="top middle">Редактировать</q-tooltip>
      </q-btn>
    </div>
  </template>
  <br>
  <hr>
  <br>
</template>

<script setup>
import {inject, ref} from 'vue'
import {fDate, notifyError, notifyOK} from 'src/myFuncts.js'
import {useQuasar} from "quasar";
import {api} from "boot/axios";

const apiUrl = String(process.env.API)
const q = useQuasar()
const editMode = inject('editMode')
const emit = defineEmits(['hideOrShow', 'delEntry'])


const props = defineProps({
  item: ref(null)
})

const isShow = ref(props.item.isShow)

function imgUrl () {
  if(props.item?.announceId){
    return sketchUrl()
  }
  return entrySketch()
}

function entrySketch() {
  let size = q.platform.is.mobile ? 1080 : 260

  return apiUrl
    + '/img/entry/sketch'
    + '/' + size
    + '/entry_'
    + props.item.id
    + '.jpg'
    + '?ver='
    + (props.item?.verString ?? 'jhj')
}

function sketchUrl() {
  let size = q.platform.is.mobile ? 1080 : 480

  return apiUrl
    + '/img/posters/sketch'
    + '/' + size
    + '/poster_'
    + props.item.announceId
    + '.jpg'
    + '?ver='
    + (props.item?.verString ?? 'jhj')
}

function link () {
  if (props.item?.announceId) {
    return '/announce/' + props.item.announceId
  }
  if(props.item?.refLink){
    return props.item.refLink
  }
  return '/new/' + props.item.id

}

function hideOrShow() {
  api.post(apiUrl + 'api/news/entry.php', {
    params: {
      method: isShow.value ? 'hide' : 'show',
      entryId: props.item.id,
    }
  })
    .then((response) => {
      if (!!!response?.data?.result) {
        throw new Error();
      }
      isShow.value = !isShow.value
      emit('hideOrShow', props.item.id)
    })
    .catch((error) => {
      q.notify(notifyError(error))
    })
    .finally(() => {
    })
}

function delEntry() {

  api.post(apiUrl + 'api/news/entry.php', {
    params: {
      method: 'del',
      entryId: props.item.id,
    }
  })
    .then((response) => {
      if (!!!response?.data?.result) {
        throw new Error();
      }
      q.notify(notifyOK(response?.data?.result ?? ''))
      emit('delEntry', props.item.id)
    })
    .catch((error) => {
      q.notify(notifyError(error))
    })
}
</script>

<style scoped>
.ntitle {
  font-size: 20px;
  /*padding: 20px;*/
}

.narea {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.nimg_block {
  width: 260px;
  height: 146px;
  overflow: hidden;
  box-shadow: 1px 2px 2px #555353;
}

.nimg_block:hover {
  box-shadow: 1px 2px 5px #000000;
}

.tcol {
  font: caption;
  /* margin: auto; */
  color: black;
  padding: 10px;
  font-size: 16px;
  text-align: justify;
}

.tcol a {
  text-decoration: none;
}

@media screen and (min-device-width: 800px) {
  .tcol {
    width: 60%;
    min-width: 290px;
  }
}

</style>
