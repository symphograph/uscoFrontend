<script setup lang="ts">
import {inject, ref, Ref} from "vue";
import 'src/css/dialog.css'
import {useQuasar} from "quasar";
import {Video} from "src/js/lib";

const q = useQuasar()

const props = defineProps({
  video: {
    type: Object,
    required: true
  }
});

const refDialog = ref()
const loading = ref(false)

const isOpenDialog = inject('isOpenDescrDialog') as Ref<boolean>

function onHide() {

}

function onShow() {

}

function close() {
  refDialog.value.hide()
}

async function putToVK() {
  loading.value = true
  if (await Video.putDescrToVK(q, props.video.id)) {
    close()
  }

  loading.value = false
}
</script>

<template>
  <q-dialog v-model="isOpenDialog"
            @before-hide="onHide"
            @beforeShow="onShow"
            ref="refDialog"
  >
    <q-card bordered>
      <q-card-section>
        <q-item>
          <q-item-section>
            <q-item-label>Теперь описание выглядит так:</q-item-label>
          </q-item-section>
        </q-item>
      </q-card-section>

      <q-card-section>
        <q-card>
          <q-card-section>
            <section v-html="video?.description" :style="{ whiteSpace: 'pre-line' }"></section>
          </q-card-section>
        </q-card>
      </q-card-section>

      <q-card-section>Вы можете сохранить его в исходном видео на VK или продолжить редактировать</q-card-section>
      <q-card-actions align="between">
        <q-space></q-space>
        <q-btn label="Не сейчас" @click="close"></q-btn>
        <q-btn label="Сохранить на VK" color="green" @click="putToVK"></q-btn>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<style scoped>

</style>
