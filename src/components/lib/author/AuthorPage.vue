<script setup lang="ts">

import PageShell from "components/main/PageShell.vue";
import SelectComposer from "components/lib/author/SelectComposer.vue";
import {computed, inject, onBeforeMount, onMounted, provide, ref} from "vue";
import {LocalStorage, useQuasar} from "quasar";
import {useRoute, useRouter} from "vue-router";
import {numDeclension} from "src/js/myFuncts";
import BtnDelete from "components/main/BtnDelete.vue";
import {Author} from "src/js/lib";

const q = useQuasar()
const route = useRoute()
const router = useRouter()

const editMode = inject('editMode');

const searchText = ref(null)
provide('searchText', searchText)

function onSelectAuthor(author: any) {
  //selectedAuthorId.value = author.id
  LocalStorage.set('lastAuthor', author.id)
  route.params.id = author.id
  router.push({path: '/lib/author/' + author.id})
  if (author.id) loadAuthor(author.id)

}

async function loadAuthor(authorId: number) {
  if (!authorId) return
  Author.selected.value = await Author.get(q, authorId)
}

const imslpUrl = computed(() => {
  if(!Author.selected.value?.imslpId) return ''
  return `https://imslp.org/wiki/Category:${Author.selected.value?.fioEn}`
});

const wikiUrl = computed(() => {
  const wikiIdRu = Author.selected.value?.wikiIdRu
  const wikiIdEn = Author.selected.value?.wikiIdEn

  return wikiIdRu
    ? `https://ru.wikipedia.org/?curid=${wikiIdRu}`
    : wikiIdEn
      ? `https://en.wikipedia.org/?curid=${wikiIdEn}`
      : '';
});




async function updateAuthor() {
  if (await Author.update(q, Author.selected.value)) {
    await loadAuthor(Author.selected.value.id)
  }
}

function delAuthor() {
  Author.del(q, Number(route.params.id))
}

function getWorkNumDeclension() {
  const wordForms = ['произведение', 'произведения', 'произведений']
  const declension = numDeclension(Author.selected.value.cntWorks, wordForms)
  return `${Author.selected.value.cntWorks} ${declension}`
}

onBeforeMount(() => {
  let id = Number(route.params.id)
  if (id) loadAuthor(id)
})

onMounted(() => {

})
</script>

<template>
  <PageShell page-title="Композитор ">
    <template v-slot:ToolPanel>
      <SelectComposer @itSel="onSelectAuthor"></SelectComposer>

    </template>
    <template v-slot:PageContent>
      <div class="centralCol">
        <template v-if="Author.selected.value">
          <q-card>
            <q-card-section>
              <q-input v-model="Author.selected.value.fioRu" :readonly="!editMode"
                       label="Фамилия, Имя Отчество"></q-input>
              <q-input v-model="Author.selected.value.iofEn" :readonly="!editMode" label="Name LastName"></q-input>
            </q-card-section>
            <q-card-section>
              <q-item clickable :to="`/lib/works/${Author.selected.value.id}`">
                <q-item-section>
                  <q-item-label>
                    {{ getWorkNumDeclension() }}
                  </q-item-label>
                  <q-item-label caption>Перейти к списку</q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-icon name="open_in_new"></q-icon>
                </q-item-section>
              </q-item>
            </q-card-section>
            <q-separator></q-separator>
            <q-card-section>
              <q-btn icon="img:https://upload.wikimedia.org/wikipedia/commons/f/f6/Wikipedia-logo-v2-wordmark.svg"
                     v-if="wikiUrl"
                     size="6em"
                     :class="q.dark.isActive ? 'invert' : undefined"
                     :href="wikiUrl"
                     target="_blank"
              ></q-btn>

              <q-btn icon="img:https://upload.wikimedia.org/wikipedia/commons/9/98/IMSLP_logo_%282016%29.svg"
                     v-if="imslpUrl"
                     size="6em"
                     :class="q.dark.isActive ? 'invert' : undefined"
                     :href="imslpUrl"
                     target="_blank"
              ></q-btn>
            </q-card-section>

            <q-separator></q-separator>
            <q-card-actions align="right" v-if="editMode">
              <q-btn label="Сохранить" color="green" @click="updateAuthor"></q-btn>
              <BtnDelete label="Удалить"
                         title="Удалить композитора"
                         throw-confirm
                         danger
                         @onOk="delAuthor"
                         tooltip="Удалить композитора"></BtnDelete>
            </q-card-actions>

          </q-card>
        </template>
      </div>
    </template>
  </PageShell>
</template>

<style scoped>

</style>
