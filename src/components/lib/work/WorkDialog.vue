<script setup>
import 'src/css/dialog.css'
import {inject, ref} from "vue";
import {useQuasar} from "quasar";
import {Work} from "src/js/lib";

const q = useQuasar()
const isOpenDialog = inject('isOpenWorkDialog')
const loading = ref(false)
const work = inject('work')
const refTitle = ref()

function close() {
  isOpenDialog.value = false
}

const emit = defineEmits(['onSave'])

function onSubmit() {
  if (!isValid()) {
    return
  }

  save()
}

async function save() {
  if (await Work.add(q, work.value)) {
    emit('onSave')
    close()
  }
}

function onHide() {
  loading.value = false
}

function isValid() {
  return   refTitle.value.validate()
}
</script>

<template>
  <q-dialog v-model="isOpenDialog" @before-hide="onHide">
    <q-card bordered class="dialogArea">
      <q-form @submit.prevent.stop="onSubmit">
        <q-card-section>
          <q-input v-model="work.titleRu"
                   ref="refTitle"
                   prefix="RU"
                   label="Русское название"
          ></q-input>
          <q-input v-model="work.titleEn"
                   prefix="EN"
                   label="Международное название"
          ></q-input>
          <q-input v-model="work.opus"
                   prefix="Op."
                   label="Опус"
          ></q-input>
          <q-input v-model="work.catalogIndex"
                   label="Каталог. Например: BWV 123"
          ></q-input>
          <q-btn type="submit" label="Отправить"></q-btn>
        </q-card-section>
      </q-form>
    </q-card>
  </q-dialog>
</template>

<style scoped>

</style>
