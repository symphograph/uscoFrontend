<script setup>
import {inject, ref} from 'vue'
import {fDate, notifyError, notifyOK} from 'src/myFuncts.js'
import {useQuasar} from "quasar";
import {api} from "boot/axios";
import SketchImg from "components/SketchImg.vue";

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
    return {to: '/announce/' + props.item.announceId, href: undefined}
  }
  if(props.item?.isExternal){
    return {to: undefined, href: props.item.refLink}
  }
  return {to: '/new/' +props.item.id, href: undefined}
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

<template>
  <div class="narea">
    <div class="nimg_block">
      <div>
        <q-item :href="link().href" :to="link().to" dense class="no-padding" target="_blank">
          <SketchImg :ext="item?.sketch?.ext || ''"
                     :md5="item?.sketch?.md5 || ''"
                     :size="$q.platform.is.desktop ? 260 : 1080">
          </SketchImg>
        </q-item>
      </div>
    </div>
    <div class="tcol">
      <q-item clickable :href="link().href" :to="link().to" target="_blank">
        <q-item-section>
          <q-item-label class="ItemHeader text-h6">
            {{ item.title }}
          </q-item-label>
          <q-item-label>
            <span class="mainText">{{ item.descr }}</span>
          </q-item-label>
          <q-item-label caption>{{ fDate(item.date) }}</q-item-label>
        </q-item-section>
      </q-item>
    </div>
    <template v-if="editMode">
      <div style="display: flex; justify-content: right; grid-gap: 1em;">
        <q-btn color="red" icon="delete" outline @click="delEntry()"><q-tooltip anchor="top middle">Удалить</q-tooltip></q-btn>
        <q-btn label="Скрыть" color="orange" v-if="isShow" outline @click="hideOrShow()">
        </q-btn>
        <q-btn label="Опубликовать" color="green" outline v-else @click="hideOrShow()"></q-btn>
        <q-btn icon="edit" outline :to="'/new/' + item.id">
          <q-tooltip anchor="top middle">Редактировать</q-tooltip>
        </q-btn>
      </div>
    </template>
  </div>


</template>

<style scoped>
.ItemHeader {
  font-family: 'Open Sans Condensed', sans-serif;
}
.ntitle {
  font-size: 20px;
  /*padding: 20px;*/
}

.ntitle a:hover {
  text-decoration: underline;
}

.ntitle a {
  text-decoration: none;
  font-family: 'Open Sans Condensed', sans-serif;
  color: #000000;
}

.narea {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 1em 0;
}

.nimg_block {
  width: 260px;
  height: 146px;
  overflow: hidden;
  box-shadow: 1px 2px 8px #1d2125;
}

.nimg_block:hover {
  box-shadow: 1px 2px 17px #000000;
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
