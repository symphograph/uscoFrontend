<script setup>
import {useRouter} from "vue-router";

const props = defineProps({
  id: Number,
  fioRu: String,
  iofEn: String,
  iconUrl: String
})

const router = useRouter()

function avaUrl() {
  return `url(${props.iconUrl || '/img/avatars/init_ava.png'})`
}
</script>

<template>
  <q-item style="width: 100%" clickable :to="`/lib/author/${id}`">
    <q-item-section avatar>
      <q-avatar>
        <div class="authorAva"
             @click="() => router.push({ path: `/lib/author/${id}`})"
             :style="{backgroundImage: avaUrl()}"></div>
        <q-img :src="iconUrl"
               v-if="false"
               class="authorAva"
               no-spinner
               no-transition
               placeholder-src="/img/avatars/init_ava.png"
               style="width: 50px; cursor: pointer"
               @click="() => router.push({ path: '/lib/author/' +  id})"
        />
      </q-avatar>
    </q-item-section>
    <q-item-section>
      <q-item-label>{{ fioRu }}</q-item-label>
      <q-item-label caption>{{ iofEn }}</q-item-label>
    </q-item-section>
    <slot name="sections"></slot>
  </q-item>
</template>

<style scoped>
.authorAva {
  width: 40px;
  height: 40px;
  background: no-repeat center;
  background-size: cover;
  border-radius: 50%;
}
</style>
