<template>
  <div class="q-pa-md" style="max-width: 300px; padding: 0">
    <q-input filled v-model="evData.datetime"  @update:modelValue="emit('update:date')">
      <template v-slot:prepend>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy cover transition-show="scale" transition-hide="scale">
            <q-date v-model="evData.datetime" mask="YYYY-MM-DD HH:mm">
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Закрыть" color="primary" flat />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-icon>
      </template>

      <template v-slot:append>
        <q-icon name="access_time" class="cursor-pointer">
          <q-popup-proxy cover transition-show="scale" transition-hide="scale">
            <q-time v-model="evData.datetime" mask="YYYY-MM-DD HH:mm" format24h>
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Закрыть" color="primary" flat />
              </div>
            </q-time>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  </div>
</template>

<script setup>
import {inject, ref} from 'vue'
const evData = inject('evData')
const props = defineProps({
  evDateTime: ref('2019-02-01 12:44')
})
const emit = defineEmits(['update:date'])
const dateet = ref(props.evDateTime)

</script>
