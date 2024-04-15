<script setup lang="ts">

const props = defineProps({
  progress: {
    type: Boolean,
    required: true
  }
})
</script>

<template>
  <q-linear-progress :indeterminate="progress"
                     :track-color="progress ? 'DAA520FF' :'transparent'"
                     style="color: goldenrod"
                     instant-feedback
                     :value="0"
                     size="2px"/>
</template>

<style scoped>

</style>
