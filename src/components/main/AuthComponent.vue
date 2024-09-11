<template>
  <div v-if="false"></div>
</template>
<script setup>
import {LocalStorage, useQuasar} from "quasar";
import {inject, onBeforeMount, onMounted, provide, ref} from "vue";
import {api} from "boot/axios";
import {isExpired, notifyError, notifyWarning} from "src/js/myFuncts";
import {useRoute} from "vue-router";
import {myUser} from "src/js/myAuth";
import { Hall } from 'src/js/hall';


const q = useQuasar()
const apiUrl = String(process.env.API)
const route = useRoute()

/**
 *
 * @type {Ref<boolean>}
 */
const isOptionsLoaded = inject('isOptionsLoaded')

const admin = inject('admin')


async function loadOptions() {
  console.log('loadOptions started')
  const halls = await Hall.getList(q)
  Hall.List = ref(halls);
  if(Hall.List.value.length) {
    isOptionsLoaded.value = true
    console.log('options Loaded')
  } else {
    console.error('Halls is empty')
  }

}


//--------------------------------------------------------------------


const AccessToken = ref('')
const SessionToken = ref('')


const SessionTokenName = 'SessionToken'
const AccessTokenName = 'AccessToken'

function setToken(name, value, expires = '90d') {
  q.cookies.set(name, value, {
    expires: expires,
    path: '/',
    domain: null,
    sameSite: 'Strict',
    secure: true,
    httpOnly: false
  })
  if(name === AccessTokenName){
    api.defaults.headers.common['AccessToken'] = value
    AccessToken.value = value
    myUser.self.AccessToken = value
  }

  if(name === SessionTokenName){
    SessionToken.value = value
    myUser.self.SessionToken = value
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
      setToken(AccessTokenName, response?.data?.data.AccessToken ?? '')
      setToken(SessionTokenName, response?.data?.data.SessionToken ?? '')
      loadOptions()

    })
    .catch((error) => {
      q.notify(notifyError(error))
    })
}
provide('register', register)

function refreshAccessToken () {
  api.post(String(process.env.Auth) + '/api/refresh.php', {
    params: {
      SessionToken: myUser.self.SessionToken,
      AccessToken: myUser.self.AccessToken
    }
  })
    .then((response) => {
      if(!!!response?.data?.result){
        throw new Error();
      }
      setToken(SessionTokenName, response?.data?.data.SessionToken ?? '')
      setToken(AccessTokenName, response?.data?.data.AccessToken ?? '')
      admin.value = myUser.self.isPermit([4])
      loadOptions()

    })
    .catch((error) => {
      if(error?.response?.status === 401){
        register()
        return
      }
      q.notify(notifyError(error))
    })
}
provide('refreshAccessToken', refreshAccessToken)


defineExpose({
  //fnFromChild
})

onBeforeMount(() => {
  console.log('auth beforeMounted')
  if(!process.env.isDebug){
    api.defaults.headers.common['Accept'] = "application/json"
  }
  myUser.self = new myUser()
})

onMounted(() => {
  console.log('auth Mounted')
  if(!!!q.cookies.getAll()[AccessTokenName] || !!!q.cookies.getAll()[SessionTokenName]){
    register()
  } else {
    setToken(SessionTokenName, q.cookies.getAll()[SessionTokenName])
    setToken(AccessTokenName, q.cookies.getAll()[AccessTokenName])
    refreshAccessToken()
  }
})
</script>

<style scoped>

</style>
