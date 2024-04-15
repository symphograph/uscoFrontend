<script setup>
import {useMeta, useQuasar} from 'quasar'
import {computed, nextTick, onMounted, ref, watch} from "vue";
import {getMeta} from "src/js/myFuncts";
import WhatsApp from "components/contacts/WhatsApp.vue";
import EMail from "components/contacts/EMail.vue";
import PageTitle from "components/main/PageTitle.vue";
import MainFooter from "components/main/footer/MainFooter.vue";
import PageShell from "components/main/PageShell.vue";

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
        <div :class="blockClass" >
          <br><br>
          <em>Группа струнных инструментов:</em>
          <ul>
            <li>Контрабас: концертмейстер группы</li>
            <li>Скрипка: солист-концертмейстер оркестра</li>
          </ul>
          <br><br>

          <em>Группа деревянных духовых инструментов:</em>
          <ul>
            <li>Гобой: первый солист-концертмейстер группы</li>
            <li>Гобой: второй-регулятор первого</li>
            <li>Кларнет: первый солист-концертмейстер группы</li>
            <li>Фагот: первый солист-концертмейстер группы</li>
          </ul>
          <br><br>

          <em>Группа медных духовых инструментов:</em>
          <ul>
            <li>Труба: первый солист-концертмейстер группы</li>
            <li>Тромбон: второй-регулятор первого</li>
          </ul>
          <br><br>

          <em>Группа ударных инструментов:</em>
          <ul>
            <li>Ударные: концертмейстер группы</li>
          </ul>
          <br><br>

          <ul>
            <li>Заработная плата от 80.000р. (по результатам собеседования и прослушивания).</li>
            <li>Полный соц. пакет, включая оплату проезда к месту отдыха раз в два года.</li>
            <li>Различные социальные выплаты и премии.</li>
            <li>Возможность сольных выступлений с оркестром, дополнительной преподавательской деятельности.</li>
            <li>Международная гастрольная деятельность.</li>
            <li>Интересная творческая работа в молодом, развивающемся коллективе.</li>
          </ul>
          <br><br>
        </div>
        <q-list>
          <q-item-label header>Контакты для отправки резюме:</q-item-label>
          <EMail email="erazhisht@gmail.com"></EMail>
          <WhatsApp phone-number="+7-(984)-134-12-38"></WhatsApp>
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
