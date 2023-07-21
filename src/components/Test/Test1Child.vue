<template>
  <input type="file" id="file" ref="refFile" class="inputfile" @change="handleFileUpload"/>
</template>

<script setup>
import myInput from '@/components/UI/myInput';
import {ref} from "vue";

const mes = ref({
  title: '',
  body: '',
  file: '',
})

const refFile = ref(null)

function sendMes1() {
  mes.value.id = Date.now();
  let formData = new FormData();
  formData.append('file', mes.value.file.value);
  this.$emit('sendMess', this.mes);
  this.mes = {
    title: '',
    body: '',
    file: '',
  }

}

function handleFileUpload() {
  mes.value.file = refFile.files[0];
}
</script>

<style scoped>

</style>
