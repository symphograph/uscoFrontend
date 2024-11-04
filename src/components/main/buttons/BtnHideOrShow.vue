<script setup lang="ts">
import {useQuasar} from "quasar";
import {computed} from "vue";

const q = useQuasar()

export interface BtnProps {
  isShow: boolean
  flat?: boolean
  title?: string
  outline?: boolean
  label?: boolean
  message?: boolean
  loading?: boolean
  throwConfirm?: boolean
}
const props = withDefaults(defineProps<BtnProps>(),{
  flat: true
})

const emit = defineEmits(['onOk', 'onOk2', 'Cancel', 'Dismiss'])

const dialogMsg = computed(() => {
  return props.isShow ? 'Публикация будет скрыта' : 'Публикация станет видна всем пользователям'
})

function confirm () {
  if(!props.throwConfirm){
    emit('onOk')
    return
  }
  q.dialog({
    title: props.title,
    message: dialogMsg.value,
    cancel: 'Отмена',
    persistent: true,
    html: true,
    dark: q.dark.isActive,
  }).onOk(() => {
    emit('onOk')
    // console.log('>>>> OK')
  }).onOk(() => {
    emit('onOk2')
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

<template>
  <q-btn
    :loading="loading"
    :color="isShow ? 'green' : 'orange'"
    :icon-right="isShow ? 'visibility' : 'visibility_off'"
    :flat="props.flat"
    @click.stop.prevent="confirm()">
    <q-tooltip>{{ isShow ? 'Скрыть' : 'Опубликовать' }}</q-tooltip>
  </q-btn>
</template>

<style scoped>

</style>
