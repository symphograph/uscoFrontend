<script setup>


import {inject} from "vue";
import {myUser} from "src/js/myAuth";

const editMode = inject('editMode')
</script>

<template>
  <q-btn icon="edit" flat
         v-if="myUser.self.isPermit([5])"
         :color="editMode ? 'red' : undefined"
         @click="editMode = !editMode"></q-btn>
</template>

<style scoped>

</style>
