<script setup>
import 'src/css/article.css'
import {useMeta, useQuasar} from 'quasar'
import {computed} from "vue";
import {fDate, getMeta} from "src/js/myFuncts";
import PageShell from "components/main/PageShell.vue";

const q = useQuasar()
const blockClass = computed(() => q.platform.is.desktop ? 'contentBlock' : 'contentBlock-m')

const orgProps = {
  fullName: "МуНиЦиПаЛьНоЕ БЮДЖЕТНОЕ УЧРЕЖДЕНИЕ «ЮЖНО-САХАЛИНСКИЙ СИМФОНИЧЕСКИЙ ОРКЕСТР»",
  shortName: "МБУ «ЮССО»",
  registrationDate: "2001-01-05",
  director: {
    fullFIO: "Кириллова Майя Владимировна",
    href: ""
  },
  founder: {
    fullName: "Департамент культуры и туризма администрации города Южно-Сахалинска",
    href: "https://culture.yuzhno-sakh.ru/"
  },
}

const title = 'Основные сведения'
const metaData = getMeta(title)
useMeta(metaData)
</script>

<template>
  <PageShell :page-title="title">
    <template v-slot:PageContent>
      <div class="contentArea">
        <div :class="blockClass">
          <q-list separator>
            <q-item>
              <q-item-section>
                <q-item-label caption>Полное название:</q-item-label>
                <q-item-label class="text-uppercase">{{orgProps.fullName}}</q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label caption>Сокращенное название:</q-item-label>
                <q-item-label class="text-uppercase">{{orgProps.shortName}}</q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label caption>Дата постановки на учет:</q-item-label>
                <q-item-label>{{fDate(orgProps.registrationDate)}}</q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label caption>Директор учреждения:</q-item-label>
                <q-item-label class="text-uppercase">{{orgProps.director.fullFIO}}</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable :href="orgProps.founder.href" target="_blank">
              <q-item-section>
                <q-item-label caption>Учредитель:</q-item-label>
                <q-item-label class="text-uppercase">{{orgProps.founder.fullName}}</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-icon name="open_in_new"></q-icon>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
    </template>
  </PageShell>

</template>



<style scoped>
.contentArea {
  min-height: 80vh;
}
</style>
