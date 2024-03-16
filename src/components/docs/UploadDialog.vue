<script setup>
import 'src/css/dialog.css'
import {computed, inject, onMounted, ref} from "vue";
import {api} from "boot/axios";
import {
  baseFileName,
  fileExtension,
  extractDate as ddd,
  isMostlyRussian,
  notifyError,
  notifyOK,
  fDate, fDateAnyFormat, isDate
} from "src/myFuncts";
import {useQuasar} from "quasar";

const q = useQuasar()
const apiUrl = String(process.env.API)
const emit = defineEmits(['fileUploaded'])

const dialog = inject('dialog')


const dateRef = ref()
const folderId = inject('folderId')
const newCateg = ref('Новая папка')
const docTitle = ref('')
const titleRef = ref()
const closeRef = ref()
const force = ref(false)
const atDate = ref(null)
const folderList = inject('folderList')
const folderTitle = computed(() =>
  folderList.value.find(el => el.id === folderId.value).title
)

const formRef = ref()

function validProps() {
  switch (false) {
    case titleRef.value.validate():
    case !!folderId.value:
    case dateRef.value.validate():
    case files.value.length > 0:
      return false
    default:
      return true
  }
}

function send() {

  const ext = fileExtension(files.value[0].name)
  if (!validProps()) {
    console.log('stopSend')
    return
  }

  const params = {
    [`tmpFileName.${ext}`]: files.value[0],
    method: 'add',
    title: docTitle.value,
    folderId: folderId.value,
    force: Boolean(force.value),
    atDate: fDateAnyFormat(atDate.value, 'YYYY-MM-DD')
  };

  const config = {
    headers: {'Content-Type': 'multipart/form-data'},
    onUploadProgress: progressEvent => {
      const percentCompleted = Math.round(
        (progressEvent.loaded * 100) / progressEvent.total
      );
      uploadProgress.value[0].percent = percentCompleted / 100;
    }
  };

  api.post(apiUrl + 'api/docs/doc.php', params, config)
    .then((response) => {
      if (!!!response?.data?.result) {
        throw new Error();
      }
      q.notify(notifyOK(response?.data?.result ?? ''))
      emit('fileUploaded')
      closeDialog()
    })
    .catch((error) => {
      q.notify(notifyError(error))
    })
}

function isRuTitle(fileName) {
  const basedName = baseFileName(fileName)
  return isMostlyRussian(basedName)
}

function setFileNameAsTitle() {
  if (!isFilePicked.value) {
    return
  }
  docTitle.value = baseFileName(files.value[0].name)
}

function closeDialog() {
  docTitle.value = ''
  files.value = null
  atDate.value = null
  newCateg.value = null
  force.value = false
  dialog.value = false
}

// ---File-------------
const files = ref(null)
const uploadProgress = ref([])
const uploading = ref(null)

const isUploading = computed(() => uploading.value !== null)
const isFilePicked = computed(() => files.value !== null && files.value.length)

const canUpload = computed(() =>
  (files.value !== null)
  && files.value.length
  && folderId.value
  && atDate.value
)


function cancelFile(index) {
  uploadProgress.value[index] = {
    ...uploadProgress.value[index],
    error: true,
    color: 'orange-2'
  }
}

function updateFiles(newFile) {
  let filesArr = []
  if (newFile) {
    filesArr.push(newFile)

    if (isRuTitle(newFile.name)) {
      docTitle.value = baseFileName(newFile.name)
    }

    extractDate(newFile.name)
  }
  files.value = filesArr
  uploadProgress.value = (filesArr || []).map(file => ({
    error: false,
    color: 'green-2',
    percent: 0,
    icon: file.type.indexOf('video/') === 0
      ? 'movie'
      : (file.type.indexOf('image/') === 0
          ? 'photo'
          : (file.type.indexOf('audio/') === 0
              ? 'audiotrack'
              : 'insert_drive_file'
          )
      )
  }))
}

function extractDate(str) {
  if (atDate.value) return

  const extracted = ddd(str)
  if (extracted) {
    atDate.value = fDate(extracted.result)
  }
}

const isMounted = ref(false)
onMounted(() => {
  isMounted.value = true
})
</script>

<template>
  <q-dialog v-model="dialog">
    <q-card dark bordered class="dialogArea">
      <q-btn flat
             round
             size="0.7em"
             icon="close"
             ref="closeRef"
             @click="closeDialog()"
             style="position: absolute; top: 0.7em; right: 0.7em">
        <q-tooltip anchor="top middle" :offset="[30, 30]">Закрыть</q-tooltip>
      </q-btn>
      <q-form ref="formRef">
        <q-card-section>
          <q-item dark dense>
            <q-item-section>
              <q-item-label caption>Загрузка документа в категорию:</q-item-label>
              <q-item-label>
                <div class="text-h6" style="color: goldenrod">{{ folderTitle }}</div>
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-card-section>
        <q-card-section>
          <q-file
            :model-value="files"
            @update:model-value="updateFiles"
            label="Файл. Выбирайте или перетаскивайте сюда"
            label-color="goldenrod"
            stack-label
            outlined
            :clearable="!isUploading"
            dark
            accept=".doc, .docx, .xls, .xlsx, .csv, .pdf"
          >
            <template v-slot:prepend>
              <q-icon name="file_present" color="amber"></q-icon>
            </template>
            <template v-slot:file="{ index, file }">
              <q-chip
                class="full-width q-my-xs"
                :removable="isUploading && uploadProgress[index].percent < 1"
                square
                @remove="cancelFile(index)"
              >
                <q-linear-progress
                  class="absolute-full full-height"
                  :value="uploadProgress[index].percent"
                  :color="uploadProgress[index].color"
                  track-color="grey-2"
                />

                <q-avatar>
                  <q-icon :name="uploadProgress[index].icon"/>
                </q-avatar>

                <div class="ellipsis relative-position">
                  {{ file.name }}
                </div>

                <q-tooltip>
                  {{ file.name }}
                </q-tooltip>
              </q-chip>
            </template>

            <template v-slot:after v-if="canUpload">
              <q-btn
                color="primary"
                size="0.8em"
                dense
                icon="cloud_upload"
                round
                @click="send"
                :disable="!canUpload"
                :loading="isUploading"
              />
            </template>
          </q-file>
          <br>
          <q-input v-model="docTitle"
                   ref="titleRef"
                   clearable
                   outlined
                   dark
                   label="Имя документа [ru]"
                   stack-label
                   lazy-rules
                   @update:model-value="extractDate(docTitle)"
                   :rules="[ val => val && val.length > 0 || 'Название']"
                   autogrow
                   color="amber">
            <template v-slot:append>
              <q-btn label="Взять имя файла"
                     v-if="!docTitle && isFilePicked"
                     @click="setFileNameAsTitle()"
                     no-caps></q-btn>
            </template>
          </q-input>
          <q-input v-model="atDate"
                   ref="dateRef"
                   mask="##.##.####"
                   label="Дата документа"
                   stack-label
                   color="amber"
                   prefix="от "
                   hide-hint
                   :rules="[val => (val && val.length > 0 && isDate(val, ['DD.MM.YYYY'])) || '']"
                   dark outlined clearable>
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer" color="amber">
                <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                  <q-date v-model="atDate"
                          dark
                          color="yellow-9"
                          mask="DD.MM.YYYY">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Закрыть" class="dialog-goldBtn" flat dark/>
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </q-card-section>
      </q-form>

    </q-card>
  </q-dialog>
</template>

<style scoped>

</style>
