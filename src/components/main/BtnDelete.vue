<script setup>

import {useQuasar} from "quasar";
import {computed} from "vue";

const q = useQuasar()


const props = defineProps({
  flat: Boolean,
  outline: Boolean,
  message: String,
  title: String,
  tooltip: String,
  label: String,
  danger: Boolean,
  throwConfirm: Boolean,
  size: {
    type: String,
    default: undefined,
    required: false
  }
})
const iconName = 'delete'
const isLabel = computed(() => {
  return (!!props.label && !!props.label.length)
})

const msg = '<br>Вы действительно хотите это сделать?'
const dangerMsg = '<br><span style="color: red">Это нельзя отменить</span><br>'
const dialogMsg = computed(() =>
  (props.message || '') + msg + (props.danger ? dangerMsg : '')
)

const emit = defineEmits(['onOk', 'onOk2','Cancel','Dismiss'])
function confirm (message, title) {
  if(!props.throwConfirm){
    emit('onOk')
    return
  }
  q.dialog({
    title: title,
    message: dialogMsg.value,
    cancel: 'Закрыть',
    persistent: true,
    html: true,
    dark: true,
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
    :outline="outline"
    :round="!isLabel"
    color="red"
    :size="size"
    :label="label"
    :flat="flat"
    :icon="isLabel ? undefined : iconName"
    :icon-right="isLabel ? iconName : undefined"
    @click.prevent.stop="confirm(message,title)"
  >
    <q-tooltip anchor="top middle"
               :offset="[30, 30]"
               v-if="tooltip"
    >
      {{ tooltip }}
    </q-tooltip>
  </q-btn>
</template>

<style scoped>

</style>
