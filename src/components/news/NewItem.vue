<template>
  <div class="narea">
    <div class="nimg_block">
      <div>
        <a :href="link()">
          <q-img
            :src="imgUrl()"
            :ratio="1080/684"
          ></q-img>
        </a>
      </div>
    </div>
    <div class="tcol">
      <div class="ntitle">
        <a :href="link()">
          {{ item.title }}
        </a>
      </div>
      <br>
      <a :href="link()">
        {{ item.descr }}
      </a>
      <br><br>
      <span class="ndate">{{ fDate(item.date) }}</span>
      <br>
    </div>
  </div>
  <br>
  <hr>
  <br>
</template>

<script setup>
import { inject, ref } from 'vue'
import { fDate } from 'src/myFuncts.js'

const apiUrl = String(process.env.API)

const props = defineProps({
  item: ref(null)
})

function imgUrl () {
  return String(process.env.API) + props.item.img
}

function link () {
  if (props.item.evid) {
    return '/announce/' + props.item.evid
  }
  if(props.item.refLink){
    return props.item.refLink
  }
  return '/new/' + props.item.id

}
</script>

<style scoped>
.ntitle {
  font-size: 20px;
  /*padding: 20px;*/
}

.narea {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.nimg_block {
  width: 260px;
  height: 162px;
  overflow: hidden;
  box-shadow: 1px 2px 2px #555353;
}

.nimg_block:hover {
  box-shadow: 1px 2px 5px #000000;
}

.tcol {
  font: caption;
  /* margin: auto; */
  color: black;
  padding: 10px;
  font-size: 16px;
  text-align: justify;
}

.tcol a {
  text-decoration: none;
}

@media screen and (min-device-width: 800px) {
  .tcol {
    width: 60%;
    min-width: 290px;
  }
}

</style>
