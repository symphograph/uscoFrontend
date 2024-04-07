<script setup>
import moment from 'moment'
import {useMeta, useQuasar} from 'quasar'
import {api} from 'boot/axios'
import draggable from 'vuedraggable'
import {inject, onMounted, provide, ref} from 'vue'
import {getMeta, imgUrl, isDate, notifyError} from "src/js/myFuncts";
import AvatarDialog from "components/account/AvatarDialog.vue";
import ActionDates from "components/staff/ActionDates.vue";
import {myUser} from "src/js/myAuth";
import StatusDialog from "components/staff/StatusDialog.vue";
import AddPlayerDialog from "components/staff/AddPlayerDialog.vue";


const q = useQuasar()
const apiUrl = String(process.env.API)
const apiStaff = String(process.env.apiStaff)
const editMode = inject('editMode')
const staffEditMode = ref(false)
provide('staffEditMode',staffEditMode)

const groups = ref([])
provide('groups', groups)

const pwUrl = ref('')

const condDate = ref(moment(new Date()).format('YYYY-MM-DD'))
provide('condDate', condDate)

const showUploader = ref(false)
provide('showUploader', showUploader)

provide('pwUrl', pwUrl)
const persId = myUser.self.persId()

const selectedPersId = ref(0)
provide('selectedPersId', selectedPersId)

const selectedPers = ref({})
provide('selectedPers', selectedPers)

const selectedGroup = ref(null)
provide('selectedGroup', selectedGroup)

const actionDates = ref([])
provide('actionDates', actionDates)

const statusNames = ref([
  {id: 1, name: "Ассистент дирижера"},
  {id: 2, name: "Концертмейстер оркестра"},
  {id: 3, name: "Концертмейстер группы"},
  {id: 4, name: "Помощник концертмейстера"},
  {id: 5, name: "Регулятор"}
])
provide('statusNames', statusNames)

const showStatusDialog = ref(false)
provide('showStatusDialog', showStatusDialog)

const showAddPlayerDialog = ref(false)
provide('showAddPlayerDialog', showAddPlayerDialog)

const title = ref('Состав оркестра')
const metaData = getMeta(title.value)
useMeta(metaData)

function loadActionDates(force = false) {
  actionDates.value = []
  console.log('start loadActionDates')
  return api.post(apiStaff + 'api/staff.php', {
    params: {
      method: 'actionDates',
      force: force
    }
  })
    .then((response) => {
      actionDates.value = response?.data?.data ?? []
      console.log('end loadActionDates')
    })
    .catch((error) => {
      actionDates.value = []
      q.notify(notifyError(error))
      throw error
    })
}

function loadData() {
  console.log('start loadData')
  api.post(apiStaff + 'api/staff.php', {
    params: {
      method: 'get',
      date: condDate.value
    }
  })
    .then((response) => {
      groups.value = []
      groups.value = Object.values(response?.data?.data ?? [])
    })
    .catch((error) => {
      groups.value = []
      q.notify(notifyError(error))
    })
}
provide('loadData', loadData)

function staffEdit() {
  api.post(apiStaff + '/api/staff.php', {
    params: {
      method: 'update',
      groups: groups.value,
      date: condDate.value
    }
  })
    .then((response) => {
      loadActionDates()
    })
    .catch((error) => {
      q.notify(notifyError(error))
    })
}

function openAvaDialog(id) {
  if(!staffEditMode.value && persId !== id) {
    return
  }
  selectedPersId.value = id
  showUploader.value = true
  //window.open(String(process.env.STAFF) + '/pers/' + id, '_blank');
}

function openStatusDialog(pers) {
  if(!staffEditMode.value) {
    return
  }
  console.log(pers)
  selectedPers.value = pers
  showStatusDialog.value = true
}

function openAddPlayerDialog(group) {
  selectedGroup.value = group
  showAddPlayerDialog.value = true
}

function avaUrl(ava) {
  if (!ava) {
    return '/img/avatars/init_ava.png'
  }
  return imgUrl(apiStaff, ava.md5, ava.ext, 50);
}

onMounted(() => {
  loadActionDates().then(() => {
    loadData()
  })
  console.log(moment(new Date()).format('YYYY-MM-DD'))

})

</script>

<template>
  <div class="pageToolbar" :class="$q.platform.is.desktop ? 'no-wrap' : 'wrap'">
    <q-toolbar>
      <q-toolbar-title>
        {{ title }}
      </q-toolbar-title>
    </q-toolbar>
    <q-toolbar>
      <q-space></q-space>
      <q-btn icon="update"
             v-if="myUser.self.isPermit([1,2])"
             flat
             @click="loadActionDates(true)">
        <q-tooltip>Жестко обновить даты</q-tooltip>
      </q-btn>
      <q-btn icon="edit"
             v-if="myUser.self.isPermit([1,2,3])"
             flat
             :color="staffEditMode ? 'red' : 'grey'"
             @click="staffEditMode = !staffEditMode">
        <q-tooltip>Редактировать состав</q-tooltip>
      </q-btn>
      <ActionDates></ActionDates>
    </q-toolbar>
  </div>

  <div class="gridarea">
    <template v-for="group in groups" :key="group.groupId">
      <div class="group" v-if="staffEditMode || group.groupId !== 200">
        <q-list>
          <q-item dense>
            <q-item-section avatar>
              <q-item-label><span class="cardTitle">{{ group.groupName }}</span></q-item-label>
            </q-item-section>
            <q-space></q-space>
            <q-item-section side v-if="staffEditMode">
              <q-btn round icon="add" @click="openAddPlayerDialog(group)"></q-btn>
            </q-item-section>
          </q-item>

          <q-separator inset></q-separator>

          <br>
          <draggable
            :list="group.Players"
            itemKey="persId"
            :disabled="!staffEditMode"
            group="people"
          >
            <template #item="{ element }">
              <q-item :clickable="staffEditMode">
                <q-item-section avatar>
                  <q-avatar size="50px">
                    <q-img :src="avaUrl(element?.avatar)" alt="img"
                           @click="openAvaDialog(element.persId)"
                           style="height: 100%;">
                      <template v-slot:error>
                        <q-img style="height: 100%;" src="/img/avatars/init_ava.png" alt="img"></q-img>
                      </template>
                    </q-img>
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <q-item-label>{{ element.name }} {{ element.lastName }}</q-item-label>
                  <q-item-label v-for="(statusId, idx) in element.statuses" :key="`${idx}_${statusId}`" caption>{{
                      statusNames.find(el => el.id === statusId).name
                    }}
                  </q-item-label>
                </q-item-section>
                <q-item-section side v-if="staffEditMode">
                  <q-btn icon="edit" size="0.5em" flat @click.stop.prevent="openStatusDialog(element)"></q-btn>
                </q-item-section>
              </q-item>
            </template>
          </draggable>
        </q-list>

      </div>
    </template>
  </div>
  <q-card-actions align="right">
    <q-btn v-if="staffEditMode" class="goldBtn" @click="staffEdit">Сохранить</q-btn>
  </q-card-actions>

  <AvatarDialog @updated="loadData()"></AvatarDialog>
  <StatusDialog></StatusDialog>
  <AddPlayerDialog @onPlayersAdd="staffEdit"></AddPlayerDialog>
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
  padding: 1.5em 0.5em;
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



@media screen and (min-device-width: 800px) {
  .group {
    min-height: 25em;
  }
}

</style>
