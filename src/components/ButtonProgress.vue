<template>
    <div class="q-pa-md q-gutter-sm">
      <q-btn :loading="loading" color="primary" @click="simulateProgress()" style="width: 150px;">
        Готово
        <template v-slot:loading>
          <q-spinner-hourglass class="on-left"/>
          Отправляю...
        </template>
      </q-btn>
    </div>
</template>

<script>

export default {
  name: 'ButtonProgress',
  data () {
    return {
      loading: false
    }
  },
  methods: {
    loadtest () {
      this.$emit('someEvent', 'working')
    },

    simulateProgress () {
      // we set loading state
      this.loading = true
      this.loadtest()
      setTimeout(() => {
        // we're done, we reset loading state
        this.loading = false
      }, 300)
    }

  }
}
</script>

<style scoped>

</style>
