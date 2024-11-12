<script setup lang="ts">

import {copy} from "src/js/myFuncts";
import {useQuasar} from "quasar";
import BtnDelete from "components/main/BtnDelete.vue";
import {Work} from "src/js/lib";
import {inject, Ref} from "vue";

const q = useQuasar()
const editMode = inject('editMode')
const genres = inject('genres') as Ref<any[]>

const props = defineProps<{
  work: Record<string, any>
}>()
const emit = defineEmits(['onDel'])

function getGenre(genreId: number) {
  return genres.value.find((el) => el.id === genreId)
}

async function del() {
  if (await Work.del(q, props.work.id)) {
    emit('onDel')
  }
}
</script>

<template>

  <div :key="`w${work.id}`" >
    <q-item clickable :to="`/work/${work.id}`" class="mainCol">
      <q-item-section>
        <q-item-label>{{work.titleRu}}</q-item-label>
        <q-item-label>{{work.titleCO}}</q-item-label>
        <q-item-label caption>{{work.titleEn}}</q-item-label>
        <q-item-label v-if="work.genreId" caption>{{getGenre(work.genreId).name}}</q-item-label>
      </q-item-section>
      <q-item-section side class="opus">
        <q-item-label caption>{{work.opus ?? 'Op.?'}}</q-item-label>
        <q-item-label caption>{{work.icatno ?? 'cat№.?'}}</q-item-label>
        <q-item-label caption>{{work.catalogIndex ?? 'catIdx: ?'}}</q-item-label>
        <q-btn dense
               v-if="false"
               icon-right="content_copy"
               flat
               :label="`ID: ${work.id}`"
               @click.stop.prevent="copy(work.id, q)"
        ></q-btn>
      </q-item-section>
      <q-item-section side>
        <BtnDelete :title="`Удалить: ${work.titleRu}`"
                   v-if="editMode"
                   flat danger
                   throw-confirm
                   @onOk="del"
        ></BtnDelete>
      </q-item-section>
    </q-item>
  </div>


</template>



<style scoped>
.mainCol {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}
</style>
