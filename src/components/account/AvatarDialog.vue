<script setup lang="ts">

import {myUser} from "src/js/myAuth";
import AvatarUploader from "components/account/AvatarUploader.vue";
import {inject, Ref} from "vue";
import 'src/css/dialog.css'

const showUploader = inject('showUploader') as Ref<boolean>
</script>

<template>
  <q-dialog v-model="showUploader">
    <q-card dark bordered class="dialogArea">
      <AvatarUploader :persId="myUser.self.persId()"></AvatarUploader>
    </q-card>
  </q-dialog>
</template>

<style scoped>

</style>
