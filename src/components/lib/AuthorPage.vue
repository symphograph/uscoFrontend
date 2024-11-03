<script setup>

import PageShell from "components/main/PageShell.vue";
import SelectComposer from "components/lib/SelectComposer.vue";
import {computed, inject, onMounted, provide, ref} from "vue";
import {LocalStorage, useQuasar} from "quasar";
import {useRoute, useRouter} from "vue-router";
import {api} from "boot/axios";
import {notifyError, notifyOK, numDeclension} from "src/js/myFuncts";
import {myUser} from "src/js/myAuth";
import BtnDelete from "components/main/BtnDelete.vue";
import BtnLibEdit from "components/lib/BtnLibEdit.vue";
import {Author} from "src/js/lib";

const q = useQuasar()
const route = useRoute()
const router = useRouter()

const editMode = inject('editMode');

const searchText = ref(null)
provide('searchText', searchText)

const selectedAuthorId = inject('selectedAuthorId')


function itSel(author) {
  selectedAuthorId.value = author.id
  LocalStorage.set('lastAuthor', author.id)
  route.params.id = author.id
  router.push({ path: '/lib/author/' +  author.id })
  loadAuthor()
}

async function loadAuthor() {
  if(!selectedAuthorId.value) return
  Author.selected.value = await Author.get(q, selectedAuthorId.value)
}

const wikiUrl = computed(() => {
  const { wikiIdRu, wikiIdEn } = Author.selected.value;

  return wikiIdRu
    ? `https://ru.wikipedia.org/?curid=${wikiIdRu}`
    : wikiIdEn
      ? `https://en.wikipedia.org/?curid=${wikiIdEn}`
      : '';
});


async function updateAuthor() {
  if(await Author.update(q, Author.selected.value)){
    await loadAuthor()
  }
}

function delAuthor(){
  Author.del(q, route.params.id)
}

onMounted(() => {
  selectedAuthorId.value = route.params.id * 1
  loadAuthor()
})
</script>

<template>
  <PageShell page-title="Композитор ">
    <template v-slot:ToolPanel>
      <SelectComposer @itSel="itSel"></SelectComposer>

    </template>
    <template v-slot:PageContent>
      <div class="centralCol">
        <template v-if="Author.selected.value">
          <q-card>
            <q-card-section>
              <q-input v-model="Author.selected.value.fioRu" :readonly="!editMode" label="Фамилия, Имя Отчество"></q-input>
              <q-input v-model="Author.selected.value.iofEn" :readonly="!editMode" label="Name LastName"></q-input>
            </q-card-section>
            <q-card-section>
              <q-btn icon="img:https://upload.wikimedia.org/wikipedia/commons/f/f6/Wikipedia-logo-v2-wordmark.svg"
                     v-if="wikiUrl"
                     size="6em"
                     :class="q.dark.isActive ? 'invert' : undefined"
                     :href="wikiUrl"
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
            <q-card-section>
              <q-item clickable :to="`/lib/works/${Author.selected.value.id}`">
                <q-item-section>
                  <q-item-label>{{ Author.selected.value.cntWorks }}
                    {{
                      numDeclension(
                        Author.selected.value.cntWorks,
                        ['произведение', 'произведения', 'произведений']) }}
                  </q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-icon name="open_in_new"></q-icon>
                </q-item-section>

              </q-item>
            </q-card-section>
          </q-card>
        </template>
      </div>
    </template>
  </PageShell>
</template>

<style scoped>
.invert {
  filter: invert(100%);
}
</style>
