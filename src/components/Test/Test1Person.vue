<template>
</template>

<script setup>
import myHeader from '@/components/myHeader';
import myMessage from '@/components/myMessage';
import userList from '@/components/userList';

import {ref} from "vue";

const messages = ref([])

function sendMes(mes) {
  messages.value.push(mes);
}
</script>

<style scoped>

</style>
