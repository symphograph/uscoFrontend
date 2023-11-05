<template>
  <div class="newscol">
    <q-linear-progress v-if="progress" indeterminate color="secondary" class="q-mt-sm"/>
    <template v-if="Items.length">
      <NewItem
        v-for="item in Items"
        :key="item.id"
        :item="item"
      ></NewItem>
    </template>
    <h5 v-if="!Items && !progress" class="noEntyes">
      Ошибка при загрузке. Попробуйте обновить страницу.
    </h5>
  </div>
</template>

<script setup>
import { useQuasar } from 'quasar'
import { api } from 'boot/axios'
import NewItem from 'components/news/NewItem.vue'
import { inject, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const apiUrl = String(process.env.API)
const route = useRoute()
const router = useRouter()
const q = useQuasar()
const progress = inject('progress')

const Items = ref([])
const emptymsg = ref('Лучшие новости - это их отсутствие.')
const props = defineProps({
  query: ref(null),
  category: ref(null),
  year: ref(null),
  limit: ref(null)

})
const categ = ref(props.category)
watch(() => props.query, () => {
  //Items.value = null
  loadData()
}, { deep: true })

watch(route, (newpath) => {

  categ.value = newpath.params.category
  loadData()
  //console.log(newpath.path)
  // LocalStorage.set('lastPath',newpath.path)
})

function loadData () {
  if(!categ.value){
    return;
  }
  progress.value = true
  api.post(apiUrl + 'api/news/entry.php', {
    params: {
      method: 'list',
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

onMounted(() => {
  loadData()
})
</script>

<style scoped>
.noEntyes {
  text-align: center;
}
</style>
