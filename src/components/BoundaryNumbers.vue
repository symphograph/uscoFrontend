<template>
  <div class="q-pa-lg flex flex-center">
    <q-pagination
      v-model="current"
      color="primary"
      :max="10"
      :max-pages="6"
      boundary-numbers
    ></q-pagination>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'BoundaryNumbers',
  setup () {
    return {
      current: ref(6)
    }
  }
}
</script>

<style scoped>

</style>
