<script setup>
import {inject, onBeforeMount, provide, ref, watch} from "vue";
import {notifyError} from "src/js/myFuncts";
import {api} from "boot/axios";
import {useQuasar} from "quasar";
import {Author, Genre} from "src/js/lib";

const q = useQuasar()

const editModes = inject('editModes');
const editMode = editModes.lib
provide('editMode', editMode)

const optionsLoaded = ref(false)

const loadingAuthors = ref(false)
provide('loadingAuthors',loadingAuthors)

const selectedAuthorId = ref(0)
provide('selectedAuthorId', selectedAuthorId)

const genres = ref([])
provide('genres', genres)

watch(selectedAuthorId, () => {
  if(!Author.selected?.value) return 0
  Author.selected.value = Author.list.value.find(el => el.id === selectedAuthorId.value)
})

async function loadAuthors() {
  loadingAuthors.value = true
  await Author.initList(q)
  optionsLoaded.value = Author.list.value.length > 0
  loadingAuthors.value = false
}

async function loadGenres() {
  genres.value = await Genre.getList(q)
}

onBeforeMount(async () => {
  await loadGenres()
  await loadAuthors()
  //Author.selected = ref()
  console.log('libLayoutMount')
})
</script>

<template>
  <router-view v-if="optionsLoaded"/>
</template>

<style>

</style>
