<template>
  <Test1Child></Test1Child>
</template>

<script setup>
import Test1Child from "components/Test/Test1Child.vue";
import {provide, ref} from "vue";

const persons = ref([
  {id: 1, name: 'Василенко Пётр Владимирович', checked: true},
  {id: 2, name: 'Ерёменко Владислав Игоревич', checked: false},
  {id: 3, name: 'Антонова Елена Сергеевна', checked: true},
])
provide('persons', persons)
</script>

<style scoped>

</style>
