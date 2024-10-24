<script setup lang="ts">

import {inject, provide, ref} from "vue";
import TimeCodeDialog from "components/lib/video/TimeCodeDialog.vue";
import {useQuasar} from "quasar";

const q = useQuasar()

const editMode = inject('editMode');
const isTCodeDialogOpen = ref(false)
provide('isTCodeDialogOpen',isTCodeDialogOpen)

const props = defineProps({
  video: {
    type: Object,
    required: true
  },
  timeCode: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['goToMoment', 'onDelete', 'onSave'])
const loading = ref(false)

</script>

<template>
  <q-item
    clickable
    @click="emit('goToMoment', timeCode.formattedStart)"
  >
    <q-item-section avatar>
      <q-item-label caption>
        {{timeCode.start}}
      </q-item-label>
      <q-item-label v-if="false" caption>
        [{{timeCode.type}}]
      </q-item-label>
    </q-item-section>
    <q-item-section>
      <q-item-label caption v-if="timeCode.type !== 'part'">
        {{timeCode.caption}}
      </q-item-label>
      <q-item-label>
        {{timeCode.label}}
      </q-item-label>
      <q-item-label caption v-if="timeCode.type === 'part'">
        {{timeCode.caption}}
      </q-item-label>
    </q-item-section>
    <template v-if="editMode">
      <q-item-section side>
        <q-btn icon="edit" flat round @click.stop.prevent="isTCodeDialogOpen = true"></q-btn>
      </q-item-section>
      <TimeCodeDialog :timeCode="timeCode"
                      @onDelete="emit('onDelete')"
                      @onSave="emit('onSave')"
                      :video="video"
                      ></TimeCodeDialog>
    </template>
  </q-item>
</template>

<style scoped>

</style>
