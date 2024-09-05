<script setup>

import {copy} from "src/js/myFuncts";
import {useQuasar} from "quasar";

const q = useQuasar()
const props = defineProps({
  work: Object
})
</script>

<template>
<q-item clickable :to="`/work/${work.id}`" dense>
  <q-item-section>
    <q-item-label>{{work.titleRu}}</q-item-label>
    <q-item-label caption>{{work.titleEn}}</q-item-label>
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
