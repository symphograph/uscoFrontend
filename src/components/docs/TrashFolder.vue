<script setup>

import {computed, inject, onMounted, ref, watch} from "vue";
import {useQuasar} from "quasar";
import {fDate, notifyError} from "src/js/myFuncts";
import DocItem from "components/docs/DocItem.vue";
import BtnDelete from "components/main/BtnDelete.vue";
import {api} from "boot/axios";

const q = useQuasar()
const apiUrl = String(process.env.API)
const editMode = inject('editMode')
const emit = defineEmits(['onDelete', 'cleared'])

const trashList = ref([])

const sortType = inject('sortType')


const byTitleFn = (a, b) => a.title.localeCompare(b.title)
const byDateAscFn = (a, b) => a.atDate.localeCompare(b.atDate)
const byDateDescFn = (a, b) => b.atDate.localeCompare(a.atDate);

const byDateAsc = (a, b) => byDateAscFn(a, b) || byTitleFn(a, b)
const byDateDesc = (a, b) => byDateDescFn(a, b) || byTitleFn(a, b)

const sortedByTitle = computed(() =>
  trashList.value.slice().sort(byTitleFn)
);

const sortedByDateAsc = computed(() =>
  trashList.value.slice().sort(byDateAsc)
)

const sortedByDateDesc = computed(() =>
  trashList.value.slice().sort(byDateDesc)
)

const sortedList = computed(() => {

  switch (sortType.value) {
    case "title":
      return sortedByTitle.value
    case "dateAsc":
      return sortedByDateAsc.value
    case "dateDesc":
      return sortedByDateDesc.value
  }
  return []
})

function fileExt(url) {
  const fileName = url.split("/").pop();
  return fileName.split(".").pop();
}


const dialog = inject('dialog')


function clearTrash() {
  const formData = {
    params: {
      method: 'clearTrash'
    }
  }
  api.post(apiUrl + 'api/docs/doc.php', formData)
    .then((response) => {
      if (!!!response?.data?.result) {
        throw new Error();
      }

      emit('cleared')

    })
    .catch((error) => {
      q.notify(notifyError(error))
    })
}


const folderRef = ref()
const collapseTrigger = inject('collapseTrigger')

watch(() => collapseTrigger.value, () => {
  folderRef.value.hide()
});

function loadTrash() {
  const formData = {
    params: {
      method: 'trashList'
    }
  }
  api.post(apiUrl + 'api/docs/doc.php', formData)
    .then((response) => {
      if (!!!response?.data?.result) {
        throw new Error();
      }

      if(trashList.value.length) {
        trashList.value.push({id: 0})
      }

      trashList.value = response.data.data.list

    })
    .catch((error) => {
      console.log(error)
      q.notify(notifyError(error))
    })
}

defineExpose({
  loadTrash
})

onMounted(() => {
  loadTrash()
})
</script>

<template>
  <q-expansion-item default-opened
                    ref="folderRef"
                    style="border: none"
                    icon="folder"
                    :header-style="{color: 'gray', fontSize: '25px'}"
                    label="Корзина"
                    popup
                    hide-expand-icon
                    :duration="200"
                    :content-inset-level="1">
    <template v-slot:header>
      <q-item style="width: 100%; border-radius: 1em">
        <q-item-section avatar>
          <q-icon name="delete_sweep" style="color: gray"></q-icon>
        </q-item-section>
        <q-item-section>Корзина</q-item-section>
        <q-item-section side v-if="trashList.length">
          <BtnDelete title="Очистить корзину"
                     label="Очистить"
                     @onOk="clearTrash()"
                     throwConfirm
                     danger
                     message="Все файлы будут удалены"
                     tooltip="Очистить корзину">
          </BtnDelete>
        </q-item-section>
      </q-item>
    </template>
    <q-card flat style="background: none" class="no-padding">
      <q-card-section>
        <q-list separator>
          <template v-for="(doc, idx) in sortedList" :key="idx">
            <DocItem :doc="doc" @deleted="(evt) => emit('onDelete', evt)"></DocItem>
          </template>
        </q-list>
      </q-card-section>
      <q-card-actions align="right">

      </q-card-actions>
    </q-card>
  </q-expansion-item>
</template>

<style scoped>



</style>
