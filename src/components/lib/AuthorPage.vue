<script setup>

import PageShell from "components/main/PageShell.vue";
import SelectComposer from "components/lib/SelectComposer.vue";
import {inject, onMounted, provide, ref} from "vue";
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
const apiStaff = String(process.env.apiStaff)


const editMode = inject('editMode');

const searchText = ref(null)
provide('searchText', searchText)

const selectedAuthorId = inject('selectedAuthorId')
const selectedAuthor = inject('selectedAuthor')

function itSel(author) {
  selectedAuthorId.value = author.id
  LocalStorage.set('lastAuthor', author.id)
  route.params.id = author.id
  router.push({ path: '/lib/author/' +  author.id })
  loadAuthor()
}

async function loadAuthor() {
  if(!selectedAuthorId.value) return
  selectedAuthor.value = await Author.get(q, selectedAuthorId.value)
}


function updateAuthor(){
  api.post(apiStaff + 'epoint/lib/author.php', {
    params: {
      method: 'update',
      id: route.params.id,
      author: selectedAuthor.value
    }
  })
    .then((response) => {
      if (!!!response?.data?.result) {
        throw new Error();
      }
      q.notify(notifyOK(response?.data?.result ?? null))
    })
    .catch((error) => {
      q.notify(notifyError(error))
    })
}

function delAuthor(){
  api.post(apiStaff + 'epoint/lib/author.php', {
    params: {
      method: 'del',
      workId: route.params.id,
    }
  })
    .then((response) => {
      if (!!!response?.data?.result) {
        throw new Error();
      }
      q.notify(notifyOK(response?.data?.result ?? null))
    })
    .catch((error) => {
      q.notify(notifyError(error))
    })
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
        <template v-if="selectedAuthor">
          <q-card>
            <q-card-section>
              <q-input v-model="selectedAuthor.fioRu" :readonly="!editMode" label="Фамилия, Имя Отчество"></q-input>
              <q-input v-model="selectedAuthor.iofEn" :readonly="!editMode" label="Name LastName"></q-input>
            </q-card-section>
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
              <q-item clickable :to="`/lib/works/${selectedAuthor.id}`">
                <q-item-label>{{ selectedAuthor.cntWorks }}
                  {{ numDeclension(selectedAuthor.cntWorks, ['произведение', 'произведения', 'произведений']) }}</q-item-label>
              </q-item>
            </q-card-section>
          </q-card>
        </template>
      </div>
    </template>
  </PageShell>
</template>

<style scoped>

</style>
