<script setup lang="ts">

import NewItem from 'components/news/NewItem.vue'
import {inject, onMounted, Ref, ref, watch} from 'vue'
import {useRoute} from 'vue-router'
import MainFooter from "components/main/footer/MainFooter.vue";
import {Entry} from "src/js/entry";
import {useQuasar} from "quasar";

const q = useQuasar()
const route = useRoute()
const progress = inject('progress') as Ref<boolean>

const editModes = inject('editModes') as Record<string, any>;
const editMode = editModes.entry;

const Items = ref([]) as Ref<any[]>

const props = defineProps<{
  category?: string,
  year?: number,
  isTop?: boolean
}>()
const categ = ref(props.category) as Ref<string>


watch(route, (newpath: any) => {

  categ.value = newpath.params.category
  loadData()
})

async function loadData() {
  progress.value = true
  if(props.isTop){
    Items.value = await Entry.listTop(q);
  }else {
    Items.value = await Entry.listByYear(q, props?.year || 0, categ.value);
  }
  progress.value = false
}

function delEntry(entryId: number) {
  const index = Items.value.findIndex(el => el.id === entryId);
  if (index !== -1) {
    Items.value.splice(index, 1);
  }
}

defineExpose({
  loadData
})

onMounted(() => {
  loadData()
})
</script>

<template>
    <q-scroll-area
      v-if="Items?.length && !isTop"
      id="scroll-area-with-virtual-scroll-1"
      style="height: 100%"
    >
      <q-virtual-scroll :items="Items"
                        virtual-scroll-item-size="40"
                        virtual-scroll-slice-size="5"
                        :virtual-scroll-sticky-size-start="148"
                        :virtual-scroll-sticky-size-end="132"
                        scroll-target="#scroll-area-with-virtual-scroll-1 > .scroll"

      >
        <template v-slot="{item}">
          <NewItem v-if="item.isShow || editMode"
                   class="EntryItem"
                   :item="item"
                   :key="`entry${item.id}`"
                   @delEntry="delEntry"
          ></NewItem>
        </template>
        <template v-slot:after v-if="!isTop">
          <MainFooter></MainFooter>
        </template>

      </q-virtual-scroll>
    </q-scroll-area>

    <template v-if="Items?.length && isTop">
      <template v-for="item in Items" :key="item.id">
        <NewItem v-if="item.isShow || editMode"
                 :item="item"
                 @delEntry="delEntry"
        ></NewItem>
        <q-separator></q-separator>
      </template>
    </template>
    <h5 v-if="!Items && !progress" class="noEntyes">
      Ошибка при загрузке. Попробуйте обновить страницу.
    </h5>

</template>

<style scoped>
.EntryItem {
  max-width: 1200px;
  margin: 0 auto;
}
.noEntyes {
  text-align: center;
}
</style>
