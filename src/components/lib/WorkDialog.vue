<script setup>
import 'src/css/dialog.css'
import {inject, ref} from "vue";
import {useQuasar} from "quasar";

const q = useQuasar()
const apiStaff = String(process.env.apiStaff)
const isOpenWorkDialog = inject('isOpenWorkDialog')
const loading = ref(false)
const work = inject('work')

function onSubmit() {
  if (!isValid()) {
    return
  }

  save()
}

function onHide() {
  loading.value = false
}

function isValid() {
  return   refTitle.value.validate() && refNum.value.validate()
}
</script>

<template>
  <q-dialog v-model="isOpenWorkDialog" @before-hide="onHide">
    <q-card bordered class="dialogArea">
      <q-form @submit.prevent.stop="onSubmit">
        <q-card-section>
          <q-input v-model="work.titleRu"
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
        </q-card-section>
      </q-form>
    </q-card>
  </q-dialog>
</template>

<style scoped>

</style>
