<script setup>
import 'src/css/article.css'
import {useMeta, useQuasar} from 'quasar'
import {getMeta} from "src/js/myFuncts";
import PageShell from "components/main/PageShell.vue";
import {computed} from "vue";

const q = useQuasar()
const blockClass = computed(() => q.platform.is.desktop ? 'contentBlock' : 'contentBlock-m')

const metaData = getMeta('Вместе против коррупции!')
useMeta(metaData)


</script>

<template>
  <PageShell :page-title="metaData.title">
    <template v-slot:PageContent>
      <div class="contentArea">
        <div :class="blockClass">
          <q-img src="/img/docs/logo-md.webp" no-spinner width="30%" alt="img"></q-img><br><br>
          Генеральной прокуратурой Российской Федерации в 2021 году организован Международный молодежный конкурс
          социальной антикоррупционной рекламы «Вместе против коррупции!» для молодежи всех государств мира.
          <br><br>
          Подробная информация о конкурсе, в том числе анонсирующие материалы и правила конкурса, размещена на сайте
          <q-btn href="https://anticorruption.life"
                 target="_blank"
                 flat
                 no-caps
                 label="anticorruption.life"
                 icon-right="open_in_new"
                 class="link"></q-btn>
          .
          <br><br>
          Прием работ будет осуществляться с 1 мая по 1 октября 2021 года на официальном сайте конкурса в двух
          номинациях
          - социальный плакат и социальный видеоролик.
        </div>
      </div>
    </template>
  </PageShell>
</template>

<style scoped>

</style>
