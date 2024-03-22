<script setup>
import {computed} from "vue";
import {copy} from "src/js/myFuncts";
import {useQuasar} from "quasar";


const q = useQuasar()
const props = defineProps({
  email: {
    type: String,
    required: true
  }
})

const href = computed(() =>
  `mailto:${props.email}`
)
</script>

<template>
<q-item clickable :href="href" target="_blank">
  <q-item-section avatar>
      <q-icon name="email"></q-icon>
  </q-item-section>
  <q-item-section>
    <q-item-label>{{ email }}</q-item-label>
    <q-item-label caption>Отправить сообщение</q-item-label>
  </q-item-section>
  <q-item-section side>
    <q-btn icon="content_copy" flat @click.stop.prevent="copy(email, q)"></q-btn>
  </q-item-section>
</q-item>
</template>

<style scoped>

</style>
