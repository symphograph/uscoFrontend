<template>
  <div class="newscol">
    <template v-if="Items?.length">
      <template v-for="item in Items" :key="item.id">
        <NewItem v-if="item.isShow || editMode"
                 :item="item"
                 @hideOrShow="(entryId) => { hideOrShow(entryId)}"
                 @delEntry="(entryId) => {delEntry(entryId)}"
        ></NewItem>
        <q-separator></q-separator>
      </template>
    </template>
    <h5 v-if="!Items && !progress" class="noEntyes">
      Ошибка при загрузке. Попробуйте обновить страницу.
    </h5>
  </div>

</template>

<script setup>
import {useQuasar} from 'quasar'
import {api} from 'boot/axios'
import NewItem from 'components/news/NewItem.vue'
import {inject, onMounted, ref, watch} from 'vue'
import {useRoute, useRouter} from 'vue-router'

const apiUrl = String(process.env.API)
const route = useRoute()
const router = useRouter()
const q = useQuasar()
const progress = inject('progress')
const editMode = inject('editMode')

const Items = ref([])

const props = defineProps({
  category: String,
  year: Number,
  limit: Number
})
const categ = ref(props.category)


watch(route, (newpath) => {

  categ.value = newpath.params.category
  loadData()
  //console.log(newpath.path)
  // LocalStorage.set('lastPath',newpath.path)
})

function loadData() {
  if (!categ.value) {
    return;
  }
  progress.value = true
  api.post(apiUrl + 'api/news/entry.php', {
    params: {
      method: props.limit === 100 ? 'list' : 'toplist',
      category: categ.value,
      year: props.year,
      limit: props.limit
    }
  })
    .then((response) => {
      Items.value = response?.data?.data ?? []
    })
    .catch((error) => {
      Items.value = []
    })
    .finally(() => {
      progress.value = false
    })
}

function hideOrShow(entryId) {
  const entry = Items.value.find(el=> el.id === entryId)
  entry.isShow = !entry.isShow
}

function delEntry(entryId) {
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

<style scoped>
.noEntyes {
  text-align: center;
}
</style>
