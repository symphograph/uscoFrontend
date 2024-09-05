<script setup>
import {inject, onBeforeMount, provide, ref, watch} from "vue";
import {notifyError} from "src/js/myFuncts";
import {api} from "boot/axios";
import {useQuasar} from "quasar";

const apiStaff = String(process.env.apiStaff)
const q = useQuasar()

const libEditMode = ref(false)
provide('libEditMode', libEditMode)

const AuthorSelectList = ref([])
provide('AuthorSelectList', AuthorSelectList)

const loadingAuthors = ref(false)
provide('loadingAuthors',loadingAuthors)

const selectedAuthorId = ref(0)
provide('selectedAuthorId', selectedAuthorId)

const selectedAuthor = ref(null)
provide('selectedAuthor', selectedAuthor)

watch(selectedAuthorId, () => {
  selectedAuthor.value = AuthorSelectList.value.find(el => el.id === selectedAuthorId.value)
})

function loadAuthors() {
  loadingAuthors.value = true
  api.post(apiStaff + '/api/lib/author.php',{
    params: {
      method: 'all'
    }
  })
    .then((response) => {
      AuthorSelectList.value = response?.data?.data ?? []
    })
    .catch((error) => {
      AuthorSelectList.value = []
      q.notify(notifyError(error))
    })
    .finally(() => {
      loadingAuthors.value = false
    })
}

function loadAuthor(){
  api.post(apiStaff + '/api/lib/author.php', {
    params: {
      method: 'get',
      id: selectedAuthorId.value
    }
  })
    .then((response) => {
      selectedAuthor.value = response?.data?.data ?? undefined
    })
    .catch((error) => {
      selectedAuthor.value = undefined
      q.notify(notifyError(error))
    })
}
provide('loadAuthor', loadAuthor)

onBeforeMount(() => {
  loadAuthors()
})
</script>

<template>
  <router-view/>
</template>

<style>
.centralCol {
  min-height: 100vh;
}
</style>
