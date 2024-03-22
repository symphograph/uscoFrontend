<script setup>
import {useQuasar} from "quasar";
import {inject, ref} from "vue";
import {fDateTime} from "src/js/myFuncts";

const apiUrl = String(process.env.API)
const q = useQuasar()

const Announce = inject('Announce')
const props = defineProps({
  ticket: {},
  price: Number
})

const emit = defineEmits(['reserve', 'returnTicket'])
const transClass = ref('')
function returnTicket(id) {
  transClass.value = ' returning'
  setTimeout(() => {
    emit('returnTicket', id)
  }, 600)

}
</script>

<template>
  <q-card :class="'ticketCard' + transClass">
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
            <q-item-label caption>{{ fDateTime(Announce.eventTime) }}</q-item-label>
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
          <div><div style="border: 1px solid white; width: 100px; height: 100px"></div>

          </div>
          <div>
            <q-btn @click="returnTicket(ticket.id)" flat>
              <q-icon name="delete" color="red"></q-icon>
            </q-btn>
          </div>
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

.returning {
  border: 1px solid #808080FF;
  transform: scale(10%);
}

.progName {
  font-family: GoudyTrajan, serif;
}
</style>
