<script setup>


import {computed, ref} from "vue";
import PhoneNumber from "components/contacts/PhoneNumber.vue";


const apiUrl = String(process.env.API)

const serviceList = [
  {
    descr: "Организация и проведение концерта для детей детских садов, школьников, студентов.",
    price: 'Договорная'
  },
  {
    descr: "Концерт с приглашением солиста из Сахалинского края",
    price: 'Договорная'
  },
  {
    descr: "Концерт с приглашением солиста из другого федерального округа",
    price: 'Договорная'
  },
  {
    descr: "Концерт без участия приглашенного солиста",
    price: 'Договорная'
  },
  {
    descr: "Организация и (или) проведение выездного концерта",
    price: 'Договорная'
  }
]


</script>

<template>
  <details open="open">
    <summary>Платные услуги</summary>
    <br>
    <a class="flink" :href="apiUrl + 'documents/provisionOnPaidServices.pdf'">
      Положение о платных услугах
    </a>
    <br>
    <q-list separator>
      <template v-for="(service, idx) in serviceList" :key="idx">
        <q-item>
          <q-item-section>
            <q-item-label>
              {{ service.descr}}
            </q-item-label>
            <q-item-label caption>
              Стоимость: {{ service.price}}
            </q-item-label>
          </q-item-section>
        </q-item>
      </template>
    </q-list>
    <PhoneNumber :phoneNumber="'+7-4242-300-518'"></PhoneNumber>
  </details>
</template>

<style scoped>
.tel {
  height: 25px;
  background-image: url(/img/tel.png);
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: contain;
  padding-left: 35px;
  display: table-cell;
  vertical-align: bottom;
}

.tel:hover {
  background-image: url(/img/telh.png);
}
</style>
