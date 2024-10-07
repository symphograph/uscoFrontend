<script setup lang="ts">
import {ref} from "vue";

const selectedVal = ref()

const options = [
  {
    value: 'https://t.me/USKO2022',
    label: 'Телеграм ЮССО',
    icon: 'img:/img/auth/telegram.svg'
  },
  {
    value: 'https://youtube.com/@Южно-СахалинскийСимфоническийО',
    label: 'Youtube канал',
    icon: 'img:/img/logo/youtube/64px/red/youtube_social_icon_red.png'
  },
  {
    value: 'https://vk.com/public217297399',
    label: 'ВКонтакте',
    icon: 'img:/img/auth/vkontakte.svg'
  }
]
</script>

<template>
<q-select v-model="selectedVal"
          :options="options"
>
  <template v-slot:prepend>
    <q-icon name="img:/img/auth/telegram.svg" class="bw"></q-icon>
    <q-icon name="img:/img/logo/youtube/64px/red/youtube_social_icon_red.png" class="bw"></q-icon>
    <q-icon name="img:/img/auth/vkontakte.svg" class="bw"></q-icon>
  </template>
  <template v-slot:option="scope">
    <q-item clickable :href="scope.opt.value" target="_blank">
      <q-item-section avatar>
       <q-icon :name="scope.opt?.icon || ''"></q-icon>
      </q-item-section>
      <q-item-section>
        <q-item-label>
          {{ scope.opt.label}}
        </q-item-label>
      </q-item-section>
    </q-item>
  </template>
</q-select>
</template>

<style scoped>
.bw {
  filter: grayscale(100%);
}
</style>
