<script setup>

import {computed, ref} from "vue";
import {copy} from "src/myFuncts";
import {useQuasar} from "quasar";

const q = useQuasar()
const props = defineProps({
  phoneNumber: {
    type: [String, Number],
    required: true
  }
})

const phoneIcon = computed(() =>
  phoneHovered.value ? '/img/telh.png' : '/img/tel.png'
)

const phoneHovered = ref(false)

function fPhoneNumber() {
  const num = String(props.phoneNumber)
  return num.replace(/[^\d+]/g, '');
}
</script>

<template>
  <q-item clickable
          :href="`tel:${fPhoneNumber()}`"
          @mouseleave="phoneHovered = false"
          @mouseover="phoneHovered = true">
    <q-item-section avatar>
      <q-icon name="phone"></q-icon>
    </q-item-section>
    <q-item-section>
      <q-item-label>
        {{ phoneNumber }}
      </q-item-label>
    </q-item-section>
    <q-item-section side>
      <q-btn icon="content_copy" flat @click.stop.prevent="copy(fPhoneNumber(), q)"></q-btn>
    </q-item-section>
  </q-item>
</template>

<style scoped>

</style>
