<script setup>
import {inject} from "vue";
import {useQuasar} from "quasar";
const q = useQuasar()

const announceList = inject('announceList')
const selectedAnnounce = inject('selectedAnnounce')

const emit = defineEmits(['onSelectAnnounce'])

function sketchUrl(Sketch) {
  let size = 480
  if (q.platform.is.mobile) {
    size = 1080
  }
  return String(process.env.API) +
    Sketch.folder +
    '/' + size + '/' +
    Sketch.fileName +
    '?ver=' + Sketch.md5
}
</script>

<template>
  <q-select v-if="announceList.length"
            :options="announceList"
            v-model="selectedAnnounce"
            color="amber"
            outlined
            style="width: 100%"
            map-options
            option-value="id"
            option-label="progName"
            @update:model-value="emit('onSelectAnnounce')"
  >
    <template v-slot:selected>
      <q-item dense>
        <q-item-section>
          <q-item-label>{{ selectedAnnounce.progName }}</q-item-label>
          <q-item-label caption>{{ selectedAnnounce.eventTime }} | {{ selectedAnnounce.Hall.name }}</q-item-label>
        </q-item-section>
      </q-item>
    </template>
    <template v-slot:prepend>
      <q-img width="50px" ratio="16/9" :src="sketchUrl(selectedAnnounce.Sketch)"></q-img>
    </template>
    <template v-slot:option="scope">
      <q-item v-bind="scope.itemProps">

        <q-item-section avatar>
          <img style="width: 50px" :src="sketchUrl(scope.opt.Sketch)"/>
          <q-img v-if="false" width="50px"  :src="sketchUrl(scope.opt.Sketch)"></q-img>
        </q-item-section>
        <q-item-section>
          <q-item-label>
            {{ scope.opt.progName }}
          </q-item-label>
          <q-item-label caption>
            {{ scope.opt.Hall.name }}
          </q-item-label>
          <q-item-label caption>
            {{ scope.opt.eventTime }}
          </q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-toggle v-if="false" v-model="scope.opt.isShow" color="green"></q-toggle>
          <q-checkbox disable v-model="scope.opt.isShow" color="green">
            <q-tooltip>Опубликован</q-tooltip>
          </q-checkbox>
        </q-item-section>
      </q-item>
      <q-separator></q-separator>
    </template>
  </q-select>
</template>

<style scoped>

</style>
