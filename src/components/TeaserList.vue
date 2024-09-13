<template>
  <div class="eventsarea">
    <br>
    <hr>
    <br><br>
    <div class="teasers">
      <div class="nimg_block" v-for="teaser in teasers" :key="teaser.id">
          <q-img style="border-radius: 1em"
                 :src="teaser.img"
                 @click="window.open(teaser.href,'_blank')"></q-img>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeaserList',
  props: {
    teasers: Object
  }
}
</script>

<style scoped>
.nimg_block{

  /*width: auto;
  height: 0;
  padding-bottom: 63.33%;
  overflow: hidden;*/
  box-shadow: 1px 2px 2px #555353;
  border-radius: 1em;
  background-color: white;
}

.nimg_block:hover{
  box-shadow: 1px 2px 5px #000000;
}

.teasers {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.teasers>*{
  display: block;
  width: 30%;
  cursor: pointer;
}
@media screen and (max-width: 500px) {
  .teasers>*{
    width: 100%;
    margin-bottom: 1em;
  }
}

</style>
