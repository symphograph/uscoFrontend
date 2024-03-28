<script setup>
import moment from 'moment'
import { useMeta, useQuasar } from 'quasar'
import { api } from 'boot/axios'
import draggable from 'vuedraggable'
import {inject, onMounted, provide, ref} from 'vue'
import {getMeta, notifyError} from "src/js/myFuncts";
import AvatarDialog from "components/account/AvatarDialog.vue";
import {myUser} from "src/js/myAuth";



const q = useQuasar()
const apiUrl = String(process.env.API)
const editMode = inject('editMode')
const enabled = ref(true)
const groups = ref([])
const condDate = ref(moment(new Date()).format('YYYY-MM-DD'))
const showUploader = ref(false)
provide('showUploader', showUploader)
const pwUrl = ref('')
provide('pwUrl', pwUrl)
const persId = myUser.self.persId()

const metaData = getMeta('Состав оркестра')
useMeta(metaData)

    function loadData () {
      api.post(apiUrl + 'api/staff/list.php', {
        params: {
          date: condDate.value
        }
      })
        .then((response) => {
          groups.value = Object.values(response?.data?.data ?? [])
        })
        .catch((error) => {
          groups.value = []
          q.notify(notifyError(error))
        })
    }
    function staffEdit () {
      api.post(String(process.env.API) + '/api/staff/update.php', {
        params: {
          groups: groups.value,
          date: condDate.value
        }
      })
        .then((response) => {
          // console.log('ok')
        })
        .catch((error) => {
          q.notify(notifyError(error))
        })
    }
    function goToPers (id) {
      showUploader.value = true
      //window.open(String(process.env.STAFF) + '/pers/' + id, '_blank');
    }
onMounted(() => {
  loadData()
})

</script>

<template>
  <div class="content">
    <div class="eventsarea">
      <div class="p_title">Состав оркестра
        <div>
          <q-input type="date" @change="loadData" label="Дата состояния" v-model="condDate" stack-label></q-input>
        </div>
      </div>
      <div class="gridarea">
        <template v-for="group in groups" :key="group.groupId">
          <div class="group" v-if="editMode || group.groupId !== 200">
            <span class="groupname">{{ group.groupName }}</span>
            <hr>
            <br>
            <draggable
              :list="group.Players"
              itemKey="persId"
              :disabled="!editMode"
              group="people"
            >
              <template #item="{ element, index }">
                <q-item :clickable="editMode || persId === element.persId" @click="goToPers(element.persId)">
                  <q-item-section avatar>
                    <q-avatar size="50px">
                      <img :src="apiUrl + element.ava" :alt="index">
                    </q-avatar>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>{{ element.name }} {{ element.lastName }}</q-item-label>
                    <q-item-label v-for="label in element.labels" :key="label.name" caption>{{ label.name }}</q-item-label>
                  </q-item-section>
                </q-item>
              </template>
            </draggable>
          </div>
        </template>
      </div>
      <q-btn v-if="editMode" @click="staffEdit">Сохранить</q-btn>
    </div>
  </div>
<AvatarDialog></AvatarDialog>
</template>

<style scoped>
.gridarea {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  grid-gap: 0.2vw;
}

.group {
  /*border: 1px solid rgba(242, 237, 232, 1.00);*/
  border-radius: 3px;
  min-width: 260px;
  padding: 1.5em 1em;
  /* margin: 10px; */
  display: inline-block;
  float: left;
  min-height: 210px;
  font-family: Gotham, "Helvetica Neue", Helvetica, Arial, sans-serif;
  background-image: var(--cardGradient);
  /*background-image: -webkit-linear-gradient(
    270deg, rgba(248, 244, 238, 1.00) 0%, rgba(237, 225, 209, 1.00) 100%);
  background-image: -moz-linear-gradient(270deg, rgba(248, 244, 238, 1.00) 0%, rgba(237, 225, 209, 1.00) 100%);
  background-image: -o-linear-gradient(270deg, rgba(248, 244, 238, 1.00) 0%, rgba(237, 225, 209, 1.00) 100%);
  background-image: linear-gradient(
    180deg, rgba(248, 244, 238, 1.00) 0%, rgba(237, 225, 209, 1.00) 100%);*/
  text-shadow: var(--texturedText);
  box-shadow: 1px 1px 1px rgb(108 77 12 / 78%);
}

.groupname {
  font-family: Cambria, "Hoefler Text", "Liberation Serif", Times, "Times New Roman", serif;
  font-size: 20px;
  color: var(--docTitle);
}

@media screen and (min-device-width: 800px) {
  .group {
    min-height: 25em;
  }
}
</style>
