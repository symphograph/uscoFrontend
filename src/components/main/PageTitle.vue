<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  loading: {
    type: Boolean,
    default: false,
    required: false
  }
})
</script>

<template>
  <div class="pageToolbar" :class="$q.platform.is.desktop ? 'no-wrap' : 'wrap'">
    <q-toolbar>
      <q-toolbar-title>
        {{ title }}
      </q-toolbar-title>
    </q-toolbar>
  </div>
  <q-linear-progress v-if="loading" indeterminate color="secondary"/>
</template>

<style scoped>

</style>
