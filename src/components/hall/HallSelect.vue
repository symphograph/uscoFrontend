<script setup lang="ts">

import BtnDelete from 'components/main/BtnDelete.vue';
import { inject, onBeforeMount, provide, ref, Ref } from 'vue';
import { Hall } from 'src/js/hall';
import HallDialog from 'components/hall/HallDialog.vue';
import { useQuasar } from 'quasar';

const q = useQuasar()

const selectedHall = inject('selectedHall') as Ref<Hall>
const IsHallDialogOpen = ref(false)
const isLoading = ref(false)
provide('IsHallDialogOpen', IsHallDialogOpen)

const selRef = ref()

const emit = defineEmits<{
  selected: [hall: Hall]
}>()

function openHallEditor(hall: any = null) {
  if(!hall) {
    hall = new Hall()
  }
  clickedHall.value = new Hall(hall)
  IsHallDialogOpen.value = true
}

function onSelect() {
  clickedHall.value = selectedHall.value
  emit('selected', selectedHall.value)

}

async function delHall(hall: Hall) {
  isLoading.value = true
  if(await hall.del(q)){
    IsHallDialogOpen.value = false
  }
  isLoading.value = false
}

const clickedHall = ref(new Hall())
provide('clickedHall', clickedHall)

onBeforeMount(() => {

})
</script>

<template>
  <q-select
    v-model="selectedHall"
    label="Место проведения"
    map-options
    option-label="name"
    option-value="id"
    :options="Hall.List?.value ?? []"
    ref="selRef"
    @update:model-value="onSelect()"
  >
    <template v-slot:append>
      <q-btn icon="add" round @click.prevent.stop="openHallEditor()">
        <q-tooltip>Добавить зал</q-tooltip>
      </q-btn>
    </template>
    <template v-slot:option="scope">
      <q-item v-bind="scope.itemProps">
        <q-item-section>
          <q-item-label>{{scope.opt.name}}</q-item-label>
          <q-item-label caption>{{scope.opt.suggest.address.formatted}}</q-item-label>
        </q-item-section>
        <q-item-section side>
          <BtnDelete danger throw-confirm flat :loading="isLoading"
                     tooltip="Удалить зал"
                     :title="'Удалить зал: ' + scope.opt.name"
                     @onOk="delHall(scope.opt)"
          ></BtnDelete>
        </q-item-section>
        <q-item-section side>
          <q-btn icon="edit" flat @click.prevent.stop="openHallEditor(scope.opt)"></q-btn>
        </q-item-section>
      </q-item>
    </template>
  </q-select>
  <HallDialog></HallDialog>
</template>

<style scoped>

</style>
