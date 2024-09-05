<script setup>
import {useMeta, useQuasar} from 'quasar'
import {computed, onMounted} from "vue";
import {getMeta} from "src/js/myFuncts";
import WhatsApp from "components/contacts/WhatsApp.vue";
import EMail from "components/contacts/EMail.vue";
import PageShell from "components/main/PageShell.vue";
import TeleGram from 'components/contacts/TeleGram.vue';

const metaData = getMeta('Вакансии')
useMeta(metaData)

const q = useQuasar()
const blockClass = computed(() => q.platform.is.desktop ? 'contentBlock' : 'contentBlock-m')

onMounted(() => {

})
</script>

<template>
  <PageShell :pageTitle="metaData.title" use-header>
    <template v-slot:PageContent>
      <div class="contentArea">
        <div :class="blockClass">
          <br><br>
          <em>Струнные инструменты:</em>
          <ul>
            <li>Скрипка: солист-концертмейстер оркестра</li>
            <li>
              В группы:
              <ul>
                <li>Скрипка</li>
                <li>Альт</li>
                <li>Виолончель</li>
              </ul>
            </li>
            <li>Контрабас: концертмейстер группы</li>
            <li>Арфа</li>
          </ul>
          <br><br>

          <em>Деревянные духовые инструменты:</em>
          <ul>
            <li>Гобой: первый солист-концертмейстер группы</li>
            <li>Гобой: второй-регулятор первого</li>
          </ul>
          <br><br>

          <em>Медные духовые инструменты:</em>
          <ul>
            <li>Труба: первый солист-концертмейстер группы</li>
            <li v-if="false">Тромбон: второй-регулятор первого</li>
          </ul>
          <br><br>

          <em>Ударные инструменты:</em>
          <ul>
            <li>Ударные: концертмейстер группы</li>
            <li>Ударные: в группу</li>
          </ul>
          <br><br>
          <ul>
            <li>Заработная плата от 85.000р. после вычета налогов ("нетто", "на руки").</li>
            <li>Компенсация арендного жилья.</li>
            <li>Полный соц. пакет, включая оплату проезда к месту отдыха раз в два года.</li>
            <li>Различные социальные выплаты и премии.</li>
            <li>Возможность сольных выступлений с оркестром.</li>
            <li>Международная гастрольная деятельность.</li>
            <li>Интересная творческая работа в молодом развивающемся коллективе.</li>
          </ul>
          <br><br>
        </div>
        <q-list>
          <q-item-label header>Контакты для отправки резюме:</q-item-label>
          <EMail email="erazhisht@gmail.com"></EMail>
          <WhatsApp phone-number="+7-(984)-134-12-38"></WhatsApp>
          <TeleGram phone-number="+7-(984)-134-12-38"></TeleGram>
        </q-list>
      </div>
    </template>
  </PageShell>
</template>

<style scoped>
.contentArea {
  max-width: 900px;
  margin: auto;
  color: var(--mainText);
  font-size: 18px;
  padding: 1em 0;
}

.contentBlock {
  text-align: justify;
  font-size: 18px;
}

.contentBlock-m {
  padding: 0 1em;
  text-align: start;
  font-size: 16px;
}
</style>
