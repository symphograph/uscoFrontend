<script setup lang="ts">

import {ref} from "vue";

const props = defineProps({
  list: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['onSelect'])

const selectedAnnounce = ref()
</script>

<template>
<div>?</div>
</template>

<style scoped>

</style>
