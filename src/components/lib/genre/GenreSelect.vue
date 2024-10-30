<script setup lang="ts">
import {inject, onBeforeMount, Ref, ref} from "vue";

const genres = inject('genres') as Ref<any[]>
const selectedGenre = ref()

const props = defineProps<{
  genreId: number|undefined,
  readonly?: boolean
}>()

const emit = defineEmits(['onSelect'])

onBeforeMount(() => {
  selectedGenre.value = genres.value.find((el) => el.id === props.genreId)

})

</script>

<template>
<q-select v-model="selectedGenre"
          :options="genres"
          :readonly="readonly"
          label="Жанр"
          map-options
          option-value="id"
          option-label="name"
          clearable
          @update:modelValue="emit('onSelect', selectedGenre)"
></q-select>

</template>

<style scoped>

</style>
