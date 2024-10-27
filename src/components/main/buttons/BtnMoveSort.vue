<script setup lang="ts">
import {computed} from "vue";

const props = defineProps<{
  loading?: boolean;
  direction: 'up' | 'down';
  disable: boolean
}>()

const tooltip = computed(() => {
  return props.direction === 'up'
    ? 'Сдвинуть вверх'
    : 'Сдвинуть вниз'
})

const icon = computed(() => {
  return props.direction === 'up'
    ? 'keyboard_arrow_up'
    : 'keyboard_arrow_down'
})

const emit = defineEmits(['onClick'])
</script>

<template>
  <q-btn round :icon="icon"
         :loading="loading"
         :disable="disable"
         @click.stop.prevent="emit('onClick', direction)"
  >
    <q-tooltip>{{ tooltip }}</q-tooltip>
  </q-btn>
</template>

<style scoped>

</style>
