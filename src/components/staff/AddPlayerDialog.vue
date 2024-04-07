<script setup>
import 'src/css/dialog.css'
import {computed, inject, ref} from "vue";
import {imgUrl} from "src/js/myFuncts";

const showAddPlayerDialog = inject('showAddPlayerDialog')
const groups = inject('groups')
const condDate = inject('condDate')
const selectedGroup = inject('selectedGroup')
const selectedForAdd = ref([])

const emit = defineEmits(['onPlayersAdd'])

const players = computed(() => {
  return groups.value.find(el => el.groupId === 200)?.Players ?? []
})

function addPlayersToGroup() {
  const ungrouped = groups.value.find(el => el.groupId === 200);

  selectedForAdd.value.forEach(persId => {
    const player = ungrouped.Players.find(player => player.persId === persId);
    selectedGroup.value.Players.push(player);
    ungrouped.Players = ungrouped.Players.filter(p => p.persId !== persId);
  });

  selectedForAdd.value = [];
  emit('onPlayersAdd')
  showAddPlayerDialog.value = false;
}


function onHide() {
  selectedGroup.value = null
  selectedForAdd.value = []
}

function avaUrl(ava) {
  if (!ava) {
    return '/img/avatars/init_ava.png'
  }
  return imgUrl(apiStaff, ava.md5, ava.ext, 50);
}

</script>

<template>
  <q-dialog v-model="showAddPlayerDialog" @hide="onHide()">
    <q-card bordered class="dialogArea">
      <q-card-section>
        <q-item>
          <q-item-section>
            <q-item-label caption>Добавить в группу</q-item-label>
            <q-item-label><span class="cardTitle">{{selectedGroup.groupName}}</span></q-item-label>
            <q-item-label caption class="text-red">От {{ condDate }}</q-item-label>
            <q-item-label caption v-if="!players?.length">
              Похоже, что в этот день кандидатов в группу нет.
              Если это не так, проверьте входит ли эта дата в период, на который оформлен сотрудник.
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-card-section>
      <q-separator></q-separator>
      <q-card-section>
        <q-list>
          <template v-for="player in players" :key="player.persId">
            <q-item tag="label" v-ripple>
              <q-item-section avatar>
                <q-avatar size="50px">
                  <q-img :src="avaUrl(player?.avatar)" alt="img"
                         style="height: 100%;">
                    <template v-slot:error>
                      <q-img style="height: 100%;" src="/img/avatars/init_ava.png" alt="img"></q-img>
                    </template>
                  </q-img>
                </q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label>{{ player.name }} {{ player.lastName }}</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-checkbox v-model="selectedForAdd" :val="player.persId"></q-checkbox>
              </q-item-section>
            </q-item>
          </template>
        </q-list>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn class="goldBtn"
               label="Отмена"
               @click="showAddPlayerDialog = false"
        ></q-btn>
        <q-btn class="goldBtn"
               icon="save"
               label="ОК"
               :disable="!selectedForAdd.length"
               @click="addPlayersToGroup()"
               ></q-btn>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<style scoped>

</style>
