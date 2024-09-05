<script setup>

import 'src/css/dialog.css'
import { useQuasar } from 'quasar';
import { inject, ref } from 'vue';
import { imgUrl } from 'src/js/myFuncts';
import SelectComposer from 'components/lib/SelectComposer.vue';

const q = useQuasar()
const apiStaff = String(process.env.apiStaff)
const apiUrl = String(process.env.API);
const isOpenVKVideoDialog = inject('isOpenVKVideoDialog')
const loading = ref(false)
const VKVideo = inject('VKVideo')
const announceList = inject('announceList')
const announceId = ref(null)

function onHide() {
  loading.value = false
}
</script>

<template>
  <q-dialog v-model="isOpenVKVideoDialog" @before-hide="onHide">
    <q-card bordered class="dialogArea">
      <q-card-section>
        <q-input v-model="VKVideo.title" label="Название"></q-input>
      </q-card-section>
      <q-card-section>
        <q-select v-model="VKVideo.announceId"
                  :options="announceList"
                  map-options
                  emit-value
                  option-label="progName"
                  option-value="id"
                  @update:modelValue="() => {console.log(VKVideo)}"
        >
          <template v-slot:option="scope">
            <q-item v-bind="scope.itemProps">
              <q-item-section avatar>
                <q-img :src="imgUrl(apiUrl, scope.opt?.sketch?.md5 || null, scope.opt?.sketch?.ext || null, 100)"></q-img>
              </q-item-section>
              <q-item-section>
                <q-item-label>{{ scope.opt.progName }}</q-item-label>
                <q-item-label caption>{{ scope.opt.eventTime }}</q-item-label>
                <q-item-label caption>{{ scope.opt.Hall.name }}</q-item-label>
              </q-item-section>
            </q-item>
          </template>

        </q-select>
      </q-card-section>

    </q-card>
  </q-dialog>
</template>

<style scoped>

</style>
