<script setup>

import {computed, inject, onMounted} from 'vue'
import {api} from "boot/axios";
import {notifyError} from "src/js/myFuncts";
import {useRoute} from "vue-router";
import {useQuasar} from "quasar";

const apiUrl = String(process.env.API)
const route = useRoute()
const q = useQuasar()

const albumList = inject('albumList')
const album = inject('album')
const emit = defineEmits(['iAmSelected'])
const avatar = computed(() => {
  return apiUrl + album.value.avatar
})


function loadList() {

  api.post(apiUrl + '/api/album/list.php', {})
    .then((response) => {
      if (!!!response?.data?.result) {
        throw new Error();
      }
      albumList.value = response?.data?.data?.Albums ?? []
      album.value = albumList.value[0]
      //console.log(response?.data.data.Albums)
      //initAlbum()
      //loadData()
    })
    .catch((error) => {
      q.notify(notifyError(error))
    })
}

function loadAlbum() {
  api.post(apiUrl + '/api/album/img/list.php', {
    params: {
      albumName: album.value.name
    }
  })
    .then((response) => {
      if (!!!response?.data?.result) {
        throw new Error();
      }
      album.value = response?.data?.data.Album
      //files.value = response?.data?.files ?? []
    })
    .catch((error) => {
      q.notify(notifyError(error))
    })
}

onMounted(() => {
  //album.value = route.params.album * 1
  loadList()
})
</script>

<template>
  <div class="q-pa-md">
    <div class="q-gutter-md">
      <q-select
        filled
        dark
        options-dark
        v-model="album"
        label-color="amber"
        :options="albumList"
        map-options
        option-value="name"
        option-label="name"
        label="Альбом"
        color="amber"
        options-selected-class="text-deep-orange"
        :popup-content-style="{ backgroundColor: '#2f2e2e' }"
        @update:model-value="loadAlbum()"
      >
        <template v-slot:prepend v-if="false">
          <q-item dense>
            <q-item-section avatar style="width: 3em;">
              <q-img :ratio="4/3" :src="avatar" fit="cover" class="avatar" style="width: 100%"></q-img>
            </q-item-section>
          </q-item>

        </template>
        <template v-slot:option="scope">
          <q-item v-bind="scope.itemProps">
            <q-item-section avatar>
              <q-img :ratio="4/3"
                     :src="apiUrl + scope.opt.avatar"
                     class="avatar"
                     loading="eager"
              ></q-img>
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ scope.opt.name }}</q-item-label>
            </q-item-section>
          </q-item>
        </template>
      </q-select>
    </div>
  </div>
</template>

<style scoped>
div {
  /*background-color: #2f2e2e;*/
}

.avatar {
   border-radius: 3px
}
</style>
