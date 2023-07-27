<template>
  <div v-if="false"></div>
</template>
<script setup>
import {LocalStorage, useQuasar} from "quasar";
import {inject, onBeforeMount, onMounted, provide, ref} from "vue";
import {api} from "boot/axios";
import {checkPowers, isExpired, notifyError, notifyWarning} from "src/myFuncts";
import {useRoute} from "vue-router";

//const jwtDecode = jwtDecode()
const q = useQuasar()
const apiUrl = String(process.env.API)
const route = useRoute()

const isOptionsLoaded = inject('isOptionsLoaded')

const admin = inject('admin')
const Halls = inject('Halls')

function loadOptions () {
  api.post(apiUrl + 'api/get/options.php', {
    params: {

    }
  })
    .then((response) => {
      if(!!!response?.data?.result){
        throw new Error();
      }
      Halls.value = response?.data?.data?.Halls ?? []
      console.log('options Loaded')
      isOptionsLoaded.value = true
    })
    .catch((error) => {
      q.notify(notifyError(error))
    })
}


//--------------------------------------------------------------------


const AccessToken = inject('AccessToken')
const SessionToken = inject('SessionToken')

function setToken(name, value, expires = '90d') {
  q.cookies.set(name, value, {
    expires: expires,
    path: '/',
    domain: null,
    sameSite: 'Strict',
    secure: true,
    httpOnly: false
  })
  if(name === 'AccessToken'){
    api.defaults.headers.common['AccessToken'] = value
    AccessToken.value = value
    loadOptions()
  }

  if(name === 'SessionToken'){
    SessionToken.value = value
  }
}

function register(){
  api.post(String(process.env.Auth) + '/api/register.php', {
    params: {
      authType: 'default'
    }
  })
    .then((response) => {
      if(!!!response?.data?.result){
        throw new Error();
      }
      setToken('SessionToken', response?.data?.data.SessionToken ?? '')
      setToken('AccessToken', response?.data?.data.AccessToken ?? '')
    })
    .catch((error) => {
      q.notify(notifyError(error))
    })
}
provide('register', register)

function refreshAccessToken () {
  api.post(String(process.env.Auth) + '/api/refresh.php', {
    params: {
      SessionToken: SessionToken.value,
      AccessToken: AccessToken.value
    }
  })
    .then((response) => {
      if(!!!response?.data?.result){
        throw new Error();
      }
      setToken('SessionToken', response?.data?.data.SessionToken ?? '')
      setToken('AccessToken', response?.data?.data.AccessToken ?? '')
      admin.value = checkPowers([4], AccessToken.value)

    })
    .catch((error) => {
      if(isExpired(error)){
        register()
        return
      }
      q.notify(notifyError(error))
    })
}
provide('refreshAccessToken', refreshAccessToken)

function refreshIfNeed(error) {
  if(!isExpired(error)){
    return false
  }
  refreshAccessToken()
  q.notify(notifyWarning(null, 'Ой! Еще раз, пожалуйста.'))
  return true
}
provide('refreshIfNeed', refreshIfNeed)
defineExpose({
  //fnFromChild
})

onBeforeMount(() => {
  console.log('auth beforeMounted')
  if(!process.env.isDebug){
    api.defaults.headers.common['Accept'] = "application/json"
  }
})

onMounted(() => {

  console.log('auth Mounted')
  if(!!!q.cookies.getAll().SessionToken || !!!q.cookies.getAll().AccessToken){
    register()
  } else {
    SessionToken.value = q.cookies.getAll()?.SessionToken ?? ''
    AccessToken.value = q.cookies.getAll()?.AccessToken ?? ''
    refreshAccessToken()
  }
  //api.defaults.headers.common['Authorization'] = token.value





})
</script>

<style scoped>

</style>
