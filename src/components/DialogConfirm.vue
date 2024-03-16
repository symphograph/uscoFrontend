<template>
  <q-btn :label="label" :color="color" @click="confirm(message,title)"/>
</template>

<script setup>
import { useQuasar } from 'quasar'
import { ref } from 'vue'

const $q = useQuasar()
const props = defineProps({
  color: ref({}),
  label: ref({}),
  message: ref({}),
  title: ref({})
})

const emit = defineEmits(['onOk','Cancel','Dismiss'])
function confirm (message, title) {
  $q.dialog({
    title: title,
    message: message,
    cancel: true,
    persistent: true,
    html: true,
    dark: true,
  }).onOk(() => {
    // console.log('>>>> OK')
  }).onOk(() => {
    emit('onOk')
    // console.log('>>>> second OK catcher')
  }).onCancel(() => {
    emit('Cancel')
    // console.log('>>>> Cancel')
  }).onDismiss(() => {
    emit('Dismiss')
    // console.log('I am triggered on both OK and Cancel')
  })
}
</script>

<style scoped>

</style>
