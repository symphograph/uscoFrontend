<script setup>


import {inject} from "vue";
import {myUser} from "src/js/myAuth";

const libEditMode = inject('libEditMode')
</script>

<template>
  <q-btn icon="edit" flat
         v-if="myUser.self.isPermit([1,2,5])"
         :color="libEditMode ? 'red' : undefined"
         @click="libEditMode = !libEditMode"></q-btn>
</template>

<style scoped>

</style>
