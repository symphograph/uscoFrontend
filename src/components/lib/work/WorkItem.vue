<script setup lang="ts">

import {copy} from "src/js/myFuncts";
import {useQuasar} from "quasar";
import BtnDelete from "components/main/BtnDelete.vue";
import {Work} from "src/js/lib";

const q = useQuasar()
const props = defineProps<{
  work: Record<string, any>
}>()
const emit = defineEmits(['onDel'])

async function del() {
  if (await Work.del(q, props.work.id)) {
    emit('onDel')
  }
}
</script>

<template>
<q-item clickable :to="`/work/${work.id}`" dense>
  <q-item-section>
    <q-item-label>{{work.titleRu}}</q-item-label>
    <q-item-label caption>{{work.titleEn}}</q-item-label>
  </q-item-section>
  <q-item-section side>
    <BtnDelete :title="`Удалить: ${work.titleRu}`"
               flat danger
               throw-confirm
               @onOk="del"
    ></BtnDelete>
  </q-item-section>
  <q-item-section side class="opus">
    <q-item-label caption>{{work.opus ?? 'Op.?'}}</q-item-label>
    <q-item-label caption>{{work.icatno ?? 'cat№.?'}}</q-item-label>
    <q-item-label caption>{{work.catalogIndex ?? 'catIdx: ?'}}</q-item-label>
    <q-btn dense icon-right="content_copy" flat :label="`ID: ${work.id}`" @click.prevent.stop="copy(work.id, q)"
    ></q-btn>
  </q-item-section>
</q-item>
</template>



<style scoped>
.opus {
  /*min-width: 15em;*/
}
</style>
