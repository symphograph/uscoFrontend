<template>
</template>

<script setup>
import { useQuasar, LocalStorage } from 'quasar'
import { useRoute, useRouter } from 'vue-router'
import { onMounted } from 'vue'

const q = useQuasar()
const route = useRoute()
const router = useRouter()

function setToken () {
  const q = useQuasar()
  const hash = route.hash.slice(1)
  let lastPath = '/'
  q.cookies.set('token', hash, {
    expires: '2d',
    path: '/',
    domain: null,
    sameSite: 'Strict',
    secure: true,
    httpOnly: false
  })
  if(LocalStorage.getItem('lastPath')){
    lastPath = LocalStorage.getItem('lastPath')
  }
  router.push({ path: lastPath })
}

onMounted(() => {
  setToken()
})
</script>

<style scoped>

</style>
