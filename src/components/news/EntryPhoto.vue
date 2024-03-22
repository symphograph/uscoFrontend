<script setup>

import {imgUrl} from "src/js/myFuncts";
import BtnDelete from "components/main/BtnDelete.vue";
import {inject} from "vue";

const apiUrl = String(process.env.API)
const editMode = inject('editMode')

const props = defineProps({
  id: {
    type: Number,
    required: true
  },
  md5: {
    type: String,
    required: true
  },
  ext: {
    type: String,
    required: true
  },
  size: {
    type: Number,
    required: false,
    default: 1080
  }
})

const emit = defineEmits(['onDel'])
</script>

<template>
  <div class="newsImg">
    <div class="btnArea" v-if="editMode">
      <BtnDelete tooltip="Удалить"
                 title="Удалить фото"
                 throw-confirm
                 @onOk="emit('onDel', id)"
      ></BtnDelete>
    </div>

    <q-img
      :src="imgUrl(apiUrl,md5,ext, size)"
      fit="fill"
    >
    </q-img>
  </div>

</template>

<style scoped>
.newsImg {
  width: 100%;
  box-shadow: 0 0 0.5em black;
  margin: 1em 0;
  position: relative;
}

.btnArea {
  width: max-content;
  height: max-content;
  position: absolute;
  top: 1em;
  right: 1em;
  z-index: 10;
}
</style>
