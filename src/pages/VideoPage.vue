<script setup>
import VideoList from 'components/VideoList.vue'
import { useMeta } from 'quasar'
import {getMeta} from "src/js/myFuncts";
import PageTitle from "components/main/PageTitle.vue";
import PageShell from "components/main/PageShell.vue";

const metaData = getMeta('Видео')
useMeta(metaData)

</script>

<template>
  <PageShell :page-title="metaData.title">
    <template v-slot:PageContent>
      <div class="centralCol">
        <VideoList method="allPublic" :limit="1000"></VideoList>
      </div>
    </template>
  </PageShell>
</template>

<style scoped>
.vidarea {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  grid-gap: 2vw;
}
.centralCol {
  padding: 1em;
}
</style>
