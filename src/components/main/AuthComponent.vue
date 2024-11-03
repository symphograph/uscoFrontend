<script setup lang="ts">
import {useQuasar} from "quasar";
import {inject, onBeforeMount, onMounted, Ref, ref} from "vue";
import {api} from "boot/axios";
import {AccessToken, Auth, SessionToken} from "src/js/myAuth";
import { Hall } from 'src/js/hall';


const q = useQuasar()


const isOptionsLoaded = inject('isOptionsLoaded') as Ref<boolean>


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

async function register() {
  if (await Auth.register(q)) {
    await loadOptions()
  }
}

async function refreshAccessToken() {
  if (await AccessToken.refresh(q)){
    await loadOptions()
  }
}

onBeforeMount(() => {
  console.log('auth beforeMounted')
  if(!process.env.isDebug){
    api.defaults.headers.common['Accept'] = "application/json"
  }

})

onMounted(() => {
  console.log('auth Mounted')
  if(!SessionToken.get(q) || !AccessToken.get(q)){
    register()
  } else {
    SessionToken.set(q, SessionToken.get(q))
    AccessToken.set(q, AccessToken.get(q))
    refreshAccessToken()
  }
})
</script>

<template>
  <div v-if="false"></div>
</template>

<style scoped>

</style>
