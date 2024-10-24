<script setup lang="ts">
import {ref} from "vue";
import SocialItem from "components/main/social/SocialItem.vue";

const selectedVal = ref()

const options = [
  {
    id: 1,
    url: 'https://t.me/USKO2022',
    label: 'Телеграм канал',
    caption: 'Лента новостей в телеграм',
    iconFileName: 'telegram.svg'
  },
  {
    id: 2,
    url: 'https://t.me/USKO2022',
    label: 'Телеграм канал',
    caption: 'Лента новостей в телеграм',
    iconFileName: 'telegram.svg'
  },
  {
    id: 3,
    url: 'https://youtube.com/@Южно-СахалинскийСимфоническийО',
    label: 'Youtube',
    caption: 'Youtube канал',
    iconFileName: 'youtube.svg'
  },
  {
    id: 4,
    url: 'https://vk.com/public217297399',
    label: 'ВКонтакте',
    caption: 'Сообщество в VK',
    iconFileName: 'vkontakte.svg'
  }
]


</script>

<template>
<q-select v-model="selectedVal"
          :options="options"
          map-options
          label="hgfdhg"
          stack-label
          option-value="id"
>
  <template v-slot:prepend>
    <q-icon name="img:/img/auth/telegram.svg" class="bw"></q-icon>
    <q-img src="/img/auth/youtube.svg" class="bw" style="width: 1.5em"></q-img>
    <q-icon v-if="false" name="img:/img/logo/youtube/64px/red/youtube_social_icon_red.png" class="bw"></q-icon>

    <q-icon name="img:/img/auth/vkontakte.svg" class="bw"></q-icon>
  </template>
  <template v-slot:option="scope">
    <SocialItem :iconFileName="scope.opt.iconFileName"
                :caption="scope.opt.caption"
                :label="scope.opt.label"
                :url="scope.opt.url"></SocialItem>
  </template>
</q-select>
</template>

<style scoped>
.bw {
  width: 1.5em;
  /*filter: grayscale(100%);*/
}
</style>
