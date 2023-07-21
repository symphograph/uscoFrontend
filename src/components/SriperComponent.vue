<template>
  <div>swiper</div>
  <swiper
    :slides-per-view="1"
    :space-between="50"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >

    <swiper-slide v-for="img in album?.images" :key="img"><q-img :src="apiUrl + '/img/albums/' + album.name + '/' + img"></q-img></swiper-slide>

    <div class="swiper-pagination"></div>

    <!-- If we need navigation buttons -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

    <!-- If we need scrollbar -->
    <div class="swiper-scrollbar"></div>
  </swiper>

</template>

<script setup>
// Import Swiper Vue.js components
import {Swiper, SwiperSlide} from 'swiper/vue';

// Import Swiper styles
import 'swiper/css'
import {inject, ref} from "vue"

const apiUrl = String(process.env.API)
const onSwiper = (swiper) => {
  console.log(swiper);
}
const onSlideChange = () => {
  console.log('slide change');
}
const album = inject('album')

</script>

<style scoped>

</style>
