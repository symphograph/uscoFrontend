<script setup lang="ts">
import 'src/css/dialog.css'
import {inject, Ref, ref} from "vue";
import {useQuasar} from "quasar";
import {Work} from "src/js/lib";

const q = useQuasar()
const isOpenDialog = inject('isOpenWorkDialog') as Ref<boolean>

export interface workITF {
  id?: number,
  titleRu?: string,
  titleEn?: string,
  authorId: number,
  opus?: string,
  icatno?: string
}

const props = withDefaults(defineProps<workITF>(), {
  titleRu: '',
  titleEn: ''
})

const work = ref({
  ...props,
});

const loading = ref(false)


const refTitle = ref()

function close() {
  isOpenDialog.value = false
}

const emit = defineEmits(['onSave'])

function onSubmit() {
  if (!isValid()) {
    return
  }

  save()
}

async function save() {
  if (await Work.add(q, work.value)) {
    emit('onSave', work.value.authorId)
    close()
  }
}

function onHide() {
  loading.value = false
}

function isValid() {
  return   refTitle.value.validate()
}
</script>

<template>
  <q-dialog v-model="isOpenDialog" @before-hide="onHide">
    <q-card bordered class="dialogArea">
      <q-form @submit.prevent.stop="onSubmit">
        <q-card-section>
          <q-item style="font-size: 23px">
            <q-item-section><q-item-label>Добавить произведение</q-item-label></q-item-section>
          </q-item>
        </q-card-section>

        <q-card-section>
          <q-input v-model="work.titleRu"
                   ref="refTitle"
                   prefix="RU"
                   stack-label
                   label="Русское название"></q-input>

          <q-input v-model="work.titleEn"
                   prefix="EN"
                   stack-label
                   label="Международное название"></q-input>

          <q-input v-model="work.opus"
                   prefix="Op."
                   label="Опус"
                   stack-label></q-input>

        </q-card-section>

        <q-card-actions align="right">
          <q-btn label="Отмена" @click="close"></q-btn>
          <q-btn type="submit"
                 label="Сохранить"
                 icon-right="save"
                 color="green"
                 :flat="q.dark.isActive"></q-btn>
        </q-card-actions>
      </q-form>
    </q-card>
  </q-dialog>
</template>

<style scoped>

</style>
