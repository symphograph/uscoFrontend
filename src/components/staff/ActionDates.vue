<script setup>

import {inject, ref} from "vue";
import {fDate, isDate} from "src/js/myFuncts";
import moment from "moment/moment";

const actionDates = inject('actionDates')
const condDate = inject('condDate')
const loadData = inject('loadData')
const today = moment(new Date()).format('YYYY-MM-DD')
const staffEditMode = inject('staffEditMode')

function events() {
  let dates = actionDates.value.map(date => fDate(date, 'YYYY/MM/DD'));
  dates.push(moment(new Date()).format('YYYY/MM/DD'))
  return Array.from(new Set(dates)).sort();
}

function minYearMonth() {
  const date = actionDates.value[0] ?? undefined
  if(date) return moment(date).format('YYYY/MM')
  return undefined
}

function maxYearMonth() {
  return moment(new Date()).format('YYYY/MM')
}

function prevDate() {
  const filtered = actionDates.value.filter(date => date < condDate.value)
  const date = filtered.reduce((a, b) => (a > b ? a : b), '');
  console.log('prev',date)
  if(!date) {
    return
  }
  condDate.value = date
  loadData()
}

function nextDate() {
  const filtered = actionDates.value.filter(date => date > condDate.value)
  console.log(filtered)
  const date = filtered[0] || today;
  if(date === condDate.value) {
    return
  }
  console.log('next',date)
  condDate.value = date
  loadData()
}

</script>

<template>
  <q-input v-model="condDate"
           :disable="!actionDates.length"
           style="max-width: 14em"
           dense
           ref="dateRef"
           mask="####-##-##"
           label="Дата изменения"
           stack-label
           hide-hint
           borderless
           @change="loadData"
           color="orange"
           :rules="[val => (val && val.length > 0 && isDate(val, ['YYYY-MM-DD'])) || '']">
    <template v-slot:prepend>
      <q-btn icon="arrow_back_ios"
             flat dense
             :disable="condDate === actionDates[0]"
             @click="prevDate()"
      ><q-tooltip>Предыдущее изменение</q-tooltip></q-btn>
    </template>

    <template v-slot:append>
      <q-btn icon="arrow_forward_ios" flat dense @click="nextDate()" :disable="condDate === today">
        <q-tooltip>Следующее изменение</q-tooltip>
      </q-btn>
      <q-icon name="event" class="cursor-pointer">
        <q-popup-proxy cover transition-show="scale" transition-hide="scale">
          <q-date v-model="condDate"
                  :events="staffEditMode ? events() : undefined"
                  :options="!staffEditMode ? events() : undefined"
                  :navigation-min-year-month="minYearMonth()"
                  :navigation-max-year-month="maxYearMonth()"
                  years-in-month-view
                  @update:model-value="loadData"
                  today-btn
                  mask="YYYY-MM-DD">
            <div class="row items-center justify-end">
              <q-btn v-close-popup label="Закрыть" flat dark/>
            </div>
          </q-date>
        </q-popup-proxy>
      </q-icon>
    </template>
  </q-input>
</template>

<style scoped>

</style>
