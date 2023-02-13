<template>
  <div class="newscol">
    <q-linear-progress v-if="progress" indeterminate color="secondary" class="q-mt-sm"/>
    <template v-if="Items">
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
import { LocalStorage, useQuasar } from 'quasar'
import { api } from 'boot/axios'
import NewItem from 'components/news/NewItem.vue'
import { inject, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const apiUrl = String(process.env.API)
const route = useRoute()
const router = useRouter()
const token = inject('token')
const q = useQuasar()
const progress = ref(false)

const Items = ref(null)
const emptymsg = ref('Лучшие новости - это их отсутствие.')
const props = defineProps({
  query: ref(null),
  category: ref(null),
  year: ref(null),
  limit: ref(null)

})
const categ = ref(props.category)
watch(() => props.query, (fdf) => {
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
  progress.value = true
  if(!categ.value){
    progress.value = false
    return;
  }
  api.post(apiUrl + 'api/news.php', {
    params: {
      category: categ.value,
      year: props.year,
      limit: props.limit,
      token: token.value
    }
  })
    .then((response) => {
      if (response.data.result) {
        Items.value = response.data.data
      } else {
        Items.value = null
      }
      progress.value = false
    })
    .catch(() => {
      progress.value = false
      Items.value = null
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
