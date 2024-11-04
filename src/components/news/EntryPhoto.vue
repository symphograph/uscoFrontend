<script setup lang="ts">


import BtnDelete from "components/main/BtnDelete.vue";
import {inject} from "vue";
import {Photo} from "src/js/entry";

const editMode = inject('editMode')

export interface PhotoProps {
  id: number;
  md5: string;
  ext: string;
  size?: number;
}

const props = withDefaults(defineProps<PhotoProps>(), {
  size: 1080
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
      :src="Photo.getSrc(md5,ext, size)"
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
