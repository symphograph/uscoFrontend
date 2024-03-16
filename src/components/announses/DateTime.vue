<template>
  <div class="q-pa-md" style="max-width: 300px; padding: 0">
    <q-input filled v-model="Announce.eventTime" mask="####-##-## ##:##">
      <template v-slot:prepend>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy cover transition-show="scale" transition-hide="scale">
            <q-date v-model="Announce.eventTime" mask="YYYY-MM-DD HH:mm">
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
            <q-time v-model="Announce.eventTime" mask="YYYY-MM-DD HH:mm" format24h>
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
import {isDate} from "src/myFuncts";
const Announce = inject('Announce')
const props = defineProps({
  evDateTime: ref('2019-02-01 12:44')
})
const emit = defineEmits(['update:date'])
const dateet = ref(props.evDateTime)

</script>
