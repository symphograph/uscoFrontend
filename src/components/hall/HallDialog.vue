<script setup lang="ts">
import 'src/css/dialog.css'
import { useQuasar } from 'quasar';
import { inject, onMounted, ref, Ref } from 'vue';
import { Hall } from 'src/js/hall';
import SuggestSelect from 'components/SuggestSelect.vue';
import BtnDelete from 'components/main/BtnDelete.vue';

const q = useQuasar()
const clickedHall = inject('clickedHall') as Ref<Hall>
const IsHallDialogOpen = inject('IsHallDialogOpen') as Ref<boolean>
const isLoading = ref(false)
onMounted(() => {

})

async function save() {
  isLoading.value = true
  const success = await clickedHall.value.save(q)
  if(success) {
    Hall.List.value = await Hall.getList(q)
    IsHallDialogOpen.value = false
  }
  isLoading.value = false
  // далее код, который должен выполниться только после ответа сервера
}

function onSaveSuggest(id: number) {
  clickedHall.value.suggestId = id
}



function onShow()
{
  if(!clickedHall.value) {
    clickedHall.value = new Hall()
  }
}

function onHide() {
  //clickedHall.value = undefined
}

async function delHall(hall: Hall) {
  isLoading.value = true
  if(await hall.del(q)){
    IsHallDialogOpen.value = false
  }
  isLoading.value = false
}
</script>

<template>
  <q-dialog v-model="IsHallDialogOpen"
            @before-show="onShow" @before-hide="onHide">
    <q-card bordered class="dialogArea">
      <q-item-section>
        <div class="text-h6">
          {{clickedHall.id > 0 ? 'Редактировать зал' : "Добавить зал"}}
        </div>
      </q-item-section>
      <q-card-section>
        <q-input v-model="clickedHall.name"
                 label="Название"
                 stack-label></q-input>

        <SuggestSelect v-if="clickedHall.id === -1" @saved="onSaveSuggest"></SuggestSelect>
        <q-item v-else>
          <q-item-section>
            <q-item-label>{{clickedHall?.suggest?.address?.formatted}}</q-item-label>
          </q-item-section>
        </q-item>
      </q-card-section>
      <q-card-actions>
        <q-space></q-space>
        <BtnDelete label="Удалить"
                   v-if="clickedHall.id > 0"
                   :loading="isLoading"
                   throw-confirm
                   title="Удалить зал"
                   danger
                   @onOk="delHall(clickedHall)"></BtnDelete>
        <q-btn label="Сохранить"
               :disable="!clickedHall.suggestId"
               :loading="isLoading"
               color="green"
               @click="save()"></q-btn>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<style scoped>

</style>
