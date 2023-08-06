<script setup>
import {useQuasar} from "quasar";
import {inject} from "vue";
import {fDateTime} from "src/myFuncts";

const apiUrl = String(process.env.API)
const q = useQuasar()

const Announce = inject('Announce')
const props = defineProps({
  ticket: {},
  price: Number
})

const emit = defineEmits(['reserve'])
</script>

<template>
  <q-card class="ticketCard">
    <q-card-section class="progName">{{ Announce.progName }}</q-card-section>
    <q-item dense>
      <q-item-section avatar>
        <q-img width="10em" :ratio="16/9" :src="apiUrl + Announce.Sketch.verLink"></q-img>
      </q-item-section>
      <q-item-section avatar>
        <q-item v-ripple dense>
          <q-item-section avatar>
            <q-icon name="schedule" color="amber"></q-icon>
          </q-item-section>
          <q-item-section>
            <q-item-label caption>{{ fDateTime(Announce.datetime) }}</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable dense :href="Announce.Hall.map" target="_blank">
          <q-item-section avatar>
            <q-icon color="amber" name="place"></q-icon>
          </q-item-section>
          <q-item-label>
            <span class="mapLink">{{ Announce.Hall.name }}</span>
          </q-item-label>
        </q-item>
        <q-item v-ripple dense>
          <q-item-section avatar>
            <q-icon name="ion-person" color="amber"></q-icon>
          </q-item-section>
          <q-item-section>
            <q-item-label lines="1">Ряд: {{ ticket.seatRow }} | Место: {{ ticket.seatNum }}</q-item-label>
          </q-item-section>
        </q-item>
        <q-item v-if="price" v-ripple dense>
          <q-item-section avatar>
            <q-icon name="ion-wallet" color="amber"></q-icon>
          </q-item-section>
          <q-item-section>
            <q-item-label :lines="1">Цена: {{ price }}</q-item-label>
          </q-item-section>
        </q-item>


      </q-item-section>
      <q-item-section></q-item-section>
      <q-item-section side>
        <div style="height: 100%; display: flex; flex-direction: column; justify-content: space-between">
          <div><q-btn @click="emit('reserve', ticket.id)"><q-icon name="add"></q-icon></q-btn></div>
          <div><q-btn><q-icon name="delete"></q-icon></q-btn></div>
        </div>
      </q-item-section>
    </q-item>
  </q-card>
</template>

<style scoped>
.ticketCard {
  width: 100%;
  max-width: 1200px;
  margin: 1em auto;
  padding: 1em;
  border: 1px solid #f5c672;
  transition-duration: 600ms;
}

.progName {
  font-family: GoudyTrajan, serif;
}
</style>
