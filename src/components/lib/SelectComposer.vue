<script setup>

import {computed, inject, onMounted, ref, watch} from 'vue';
import {useRouter} from 'vue-router';
import AuthorItem from "components/lib/AuthorItem.vue";

const router = useRouter()
const refSelect = ref()
const AuthorSelectList = inject('AuthorSelectList')

const options = ref([...AuthorSelectList.value])

const emit = defineEmits(['itSel'])

const selectedAuthor = ref()
const loadingAuthors = inject('loadingAuthors')

function filterFn(val, update, abort) {
  update(() => {
    if(!val) {
      options.value = [...AuthorSelectList.value]
      return
    }
    const needle = val.toLowerCase()
    let List = [...AuthorSelectList.value]

    if (val) {
      List = List.filter(author =>
        (author.fioRu ? author.fioRu.toLowerCase().includes(needle) : false) ||
        (author.iofEn ? author.iofEn.toLowerCase().includes(needle) : false)
      );
    }
    options.value = List
  })
}

watch(loadingAuthors, () => {
  if(loadingAuthors.value) {
    return
  }
  options.value = [...AuthorSelectList.value]
  console.log('loadingAuthors',loadingAuthors.value)
})

onMounted(() => {

})
</script>

<template>
  <q-select :options="options"
            ref="refSelect"
            v-model="selectedAuthor"
            option-label="fioRu"
            option-value="id"
            map-options
            :use-input="!loadingAuthors"
            hide-selected
            fill-input
            autocomplete="off"
            input-debounce="0"
            @filter="filterFn"
            clearable
            style="width: 100%"
            @update:model-value="emit('itSel', selectedAuthor)"
            label="Композитор"
            :loading="loadingAuthors"

  >
    <template v-slot:prepend v-if="selectedAuthor">
      <q-avatar>
        <q-img :src="selectedAuthor.iconUrl"
               class="authorAva"
               eager
               no-spinner
               no-transition
               placeholder-src="/img/avatars/init_ava.png"
               style="width: 50px; cursor: pointer"
               @click="() => router.push({ path: '/lib/author/' +  selectedAuthor.id})"
        />
      </q-avatar>
    </template>
    <template v-slot:option="scope">
      <AuthorItem v-bind="scope.itemProps" :id="scope.opt?.id"
                  :iofEn="scope.opt?.iofEn"
                  :iconUrl="scope.opt?.iconUrl"
                  :fioRu="scope.opt?.fioRu">
        <template v-slot:sections>
          <q-item-section side>
            <q-item-label caption> {{scope.opt.cntWorks}}</q-item-label>
          </q-item-section>
        </template>
      </AuthorItem>
      <q-item v-bind="scope.itemProps" v-if="false">
        <q-item-section avatar>
          <q-avatar>
            <q-img :src="scope.opt.iconUrl"
                   class="authorAva"
                   :eager="false"
                   decoding="sync"
                   no-spinner
                   no-transition
                   placeholder-src="/img/avatars/init_ava.png"

            />
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ scope.opt.fioRu }}</q-item-label>
          <q-item-label caption>{{ scope.opt.iofEn }}</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-item-label caption>{{ scope.opt.cntWorks }}</q-item-label>
        </q-item-section>
      </q-item>
    </template>
  </q-select>
</template>
<style scoped>
.authorAva {
  width: 40px;
  height: 40px;
}
</style>
