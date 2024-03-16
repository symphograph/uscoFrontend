<script setup>

</script>

<template>
  <q-list>
    <q-icon name="edit" class="trtr"></q-icon>
    <template v-for="n in 100" :key="n">
      <q-item class="trtr">{{ n }}</q-item>
    </template>
  </q-list>
</template>

<style scoped lang="scss">
.trtr {
  color: var(--red);
}
</style>
