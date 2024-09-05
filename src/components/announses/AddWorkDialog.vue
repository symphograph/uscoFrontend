<script setup>
import 'src/css/dialog.css'
import { useQuasar } from 'quasar';
import { inject, ref } from 'vue';
import SelectComposer from 'components/lib/SelectComposer.vue';
import WorkSelectItem from 'components/announses/WorkSelectItem.vue';
import { api } from 'boot/axios';

const q = useQuasar()
const apiStaff = String(process.env.apiStaff)
const apiUrl = String(process.env.API);
const isOpenAddWorkDialog = inject('isOpenAddWorkDialog')
const loading = ref(false)

const selectedAuthorId = inject('selectedAuthorId')
const selectedAuthor = inject('selectedAuthor')

const emit = defineEmits(['workSelected'])

const worksList = ref([])
const selectedWorkId = ref(null)

function loadWorks() {
  console.log('authorSelected')
  if (!selectedAuthorId.value) return;

  loading.value = true;
  api.post(apiStaff + '/api/lib/work.php', {
    params: {
      method: 'list',
      authorId: selectedAuthorId.value,
    }
  })
    .then((response) => {
      worksList.value = response?.data?.data ?? [];
    })
    .catch((error) => {
      worksList.value = [];
      q.notify(notifyError(error));
    })
    .finally(() => {
      loading.value = false;
    });
}

function onHide() {
  loading.value = false
}
</script>

<template>
  <q-dialog v-model="isOpenAddWorkDialog" @before-hide="onHide">
    <q-card bordered class="dialogArea">
      <q-card-section>
        <SelectComposer @it-sel="loadWorks"></SelectComposer>
      </q-card-section>
      <q-card-section v-if="selectedAuthorId">
        <q-select
          v-model="selectedWorkId"
          :options="worksList"
          option-label="titleRu"
          option-value="id"
          map-options
          label="Произведение"
          @update:model-value="emit('workSelected', selectedWorkId)"
        >
          <template v-slot:option="scope">
            <WorkSelectItem :work="scope.opt"></WorkSelectItem>
          </template>
        </q-select>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<style scoped>

</style>
