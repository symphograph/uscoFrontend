<script setup lang="ts">
import {inject, ref} from 'vue'
import {fDate} from 'src/js/myFuncts'
import {useQuasar} from "quasar";

import SketchImg from "components/SketchImg.vue";
import BtnDelete from "components/main/BtnDelete.vue";
import {Entry} from "src/js/entry";
import {SketchBase} from "src/js/img";
import BtnHideOrShow from "components/main/buttons/BtnHideOrShow.vue";


const q = useQuasar()

const editModes = inject('editModes') as Record<string, any>;
const editMode = editModes.entry;

const emit = defineEmits(['hideOrShow', 'delEntry'])
const loading = ref(false)

const props = defineProps<{
  item: Record<string, any>
}>()
const itemMutable = ref(props.item)


function link() {
  if (props.item?.announceId) {
    return {to: '/announce/' + props.item.announceId, href: undefined}
  }
  if (props.item?.isExternal) {
    return {to: undefined, href: props.item.refLink}
  }
  return {to: '/new/' + props.item.id, href: undefined}
}

async function hideOrShow() {
  loading.value = true

  const result = await Entry.hideOrShow(q, props.item.id, !itemMutable.value.isShow)
  if (result) itemMutable.value.isShow = !itemMutable.value.isShow

  loading.value = false
}

async function delEntry() {
  loading.value = true

  const result = await Entry.del(q, props.item.id)
  if (result) emit('delEntry', props.item.id)

  loading.value = false
}

</script>

<template>
  <div :key="`en${item.id}`">
    <div class="narea">
      <div class="nimg_block">
        <div>
          <q-item :href="link().href" :to="link().to" dense class="no-padding" target="_blank">
            <SketchImg :url="SketchBase.srcByProps(q, item.sketch)"></SketchImg>
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
          <BtnHideOrShow :is-show="itemMutable.isShow"
                         @onOk="hideOrShow()"
                         :loading="loading"
                         throw-confirm></BtnHideOrShow>

          <BtnDelete danger
                     flat
                     title="Удалить новость"
                     tooltip="Удалить"
                     throw-confirm @onOk="delEntry()"></BtnDelete>

          <q-btn icon="edit"
                 flat
                 :to="'/new/' + item.id">
            <q-tooltip anchor="top middle">Редактировать</q-tooltip>
          </q-btn>
        </div>
      </template>
    </div>
    <q-separator></q-separator>
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
