<template>
  <q-form ref="formTelegram"  v-if="AccessToken" :action="authUrl + 'auth/telegram/login.php'" method="post">
    <input type="hidden" name="AccessToken" :value="AccessToken"/>
    <input type="hidden" name="SessionToken" :value="SessionToken"/>
    <input type="hidden" name="from" :value="SelfDomain"/>
    <q-btn type="submit"
           no-caps
            align="between"
           :outline="false"
           padding="none"
           style="width: 100%"
           flat
           dense
           square
    >

      <q-item dense>
        <q-item-section avatar>
          <q-avatar>
            <q-img src="/img/auth/telegram.svg"></q-img>
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label caption>Войти через</q-item-label>
          <q-item-label>Телеграм</q-item-label>
        </q-item-section>
      </q-item>
    </q-btn>
  </q-form>
</template>

<script setup>
import {inject, ref} from "vue";

const props = defineProps({
  AccessToken: String,
  SessionToken: String
})

const SelfDomain = String(process.env.SelfDomain)
const authUrl = String(process.env.Auth)

const formTelegram = ref(null)

function submit () {
  console.log('hgh')
  formTelegram.value.submit()
}

function isSubmit (evt) {
  //evt.target.submit()
  console.log('yes')
}
</script>



<style scoped>

</style>
