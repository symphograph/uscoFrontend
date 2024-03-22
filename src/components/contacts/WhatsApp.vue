<script setup>
import {computed} from "vue";
import {copy} from "src/js/myFuncts";
import {useQuasar} from "quasar";

const q = useQuasar()

const props = defineProps({
  phoneNumber: {
    type: [String, Number],
    required: true
  }
})

function fPhoneNumber() {
  const num = String(props.phoneNumber)
  return num.replace(/[^\d+]/g, '');
}

const href = computed(() =>
  `https://wa.me/${fPhoneNumber()}`
)
</script>

<template>
  <q-item clickable :href="href" target="_blank">
    <q-item-section avatar>
      <q-img src="/img/auth/whatsapp.svg"></q-img>
    </q-item-section>
    <q-item-section>
      <q-item-label>{{ phoneNumber }}</q-item-label>
      <q-item-label caption>Отправить сообщение</q-item-label>
    </q-item-section>
    <q-item-section side>
      <q-btn icon="content_copy" flat @click.stop.prevent="copy(fPhoneNumber(), q)"></q-btn>
    </q-item-section>
  </q-item>
</template>

<style scoped>

</style>
