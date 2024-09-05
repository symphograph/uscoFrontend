<script setup>
import { useQuasar } from 'quasar';

const q = useQuasar()
const props = defineProps({
  work: Object
})
</script>

<template>
  <q-item clickable dense>
    <q-item-section>
      <q-item-label>{{work.titleRu}}</q-item-label>
      <q-item-label caption>{{work.titleEn}}</q-item-label>
    </q-item-section>
    <q-item-section side class="opus">
      <q-item-label caption>{{work.opus ?? 'Op.?'}}</q-item-label>
      <q-item-label caption>{{work.icatno ?? 'cat№.?'}}</q-item-label>
      <q-item-label caption>{{work.catalogIndex ?? 'catIdx: ?'}}</q-item-label>
      <q-btn dense icon-right="content_copy" flat :label="`ID: ${work.id}`" @click.prevent.stop="copy(work.id, q)"></q-btn>
    </q-item-section>
  </q-item>
</template>

<style scoped>

</style>
