<script setup>
import {CircleStencil, Cropper } from 'vue-advanced-cropper'
import 'vue-advanced-cropper/dist/style.css';
//import 'vue-advanced-cropper/dist/theme.compact.css';
import {computed, inject, ref} from "vue";
import {notifyError} from "src/js/myFuncts";
import {useQuasar} from "quasar";
import {myUser} from "src/js/myAuth";

const apiUrl = String(process.env.API)
const apiStaff = String(process.env.apiStaff)
const q = useQuasar()

const props = defineProps({
  persId: {
    type: Number,
    required: true
  },
  type: String
})


const refCropper = ref()
const refUploader = ref()
const model = {}

const emit = defineEmits(['onUploaded'])


const img = ref('')
const blob = ref('')
const image = ref({
  src: '',
  type: ''
})

const result = ref({
  coordinates: null,
  image: null
})
const pwUrl = inject('pwUrl')

function change() {
  updateBlob()
}

function getMimeType(file, fallback = null) {
  const byteArray = (new Uint8Array(file)).subarray(0, 4);
  let header = '';
  for (let i = 0; i < byteArray.length; i++) {
    header += byteArray[i].toString(16);
  }
  switch (header) {
    case "89504e47":
      return "image/png";
    case "47494638":
      return "image/gif";
    case "ffd8ffe0":
    case "ffd8ffe1":
    case "ffd8ffe2":
    case "ffd8ffe3":
    case "ffd8ffe8":
      return "image/jpeg";
    default:
      return fallback;
  }
}



function crop() {
  updateBlob()
  const source = refUploader.value.queuedFiles[0]
  const fileName = source.name.replace(/[\[\]]/g, '_')
  const file = new File([blob.value], fileName, {type: source.type});

  refUploader.value.reset()
  refUploader.value.addFiles([file])
  refUploader.value.upload()
}

let currentMimeType = 'image/jpeg';
function onAdd(ffff) {
  img.value = URL.createObjectURL(ffff[0]);
  currentMimeType = ffff[0].type;
}

function updateBlob() {
  const {canvas} = refCropper.value.getResult();

  canvas.toBlob((blobb) => {
    blob.value = blobb
    pwUrl.value = URL.createObjectURL(blobb);
  }, currentMimeType);
}

function onRemove() {
  img.value = ''
  pwUrl.value = ''
}

function failed(info) {
  let msg = JSON.parse(info?.xhr?.response)?.error ?? ''
  q.notify(notifyError(null, msg))
}

function onUploaded() {
  refUploader.value.reset()
  pwUrl.value = ''
  emit('onUploaded')
}

function uploadAvatar() {
  return {
    url: apiStaff + `api/avatar.php`,
    headers: [
      {
        name: 'ACCESSTOKEN',
        value: myUser.self.AccessToken
      }
    ],
    formFields: [
      {
        name: 'persId',
        value: props.persId
      }, {
        name: 'method',
        value: 'add',
      }
    ]
  }
}

function defaultSize({ imageSize, visibleArea }) {
  return {
    width: (visibleArea || imageSize).width,
    height: (visibleArea || imageSize).height,
  };
}

const defaultPosition = {
  left: 0,
  top: 0
}

const unStrictRatio = ref(false)

const stencil = computed(() => {
  if(!unStrictRatio.value) {
    return {aspectRatio: 1, previewClass: 'CircleStencil'}
  }
  return {}
})


</script>

<template>
    <q-uploader
      v-model="model"
      accept="image/*"
      style="width: 100%"
      field-name="uploadFileName"
      label="Загрузить эскиз 16:9"
      :factory="uploadAvatar"
      :multiple="false"
      hide-upload-btn
      ref="refUploader"
      @added="onAdd"
      @removed="onRemove"
      @uploaded="onUploaded"
      @failed="failed"
      no-thumbnails
    >
      <template v-slot:header="scope">
        <div class="row no-wrap items-center q-pa-sm q-gutter-xs">
          <q-item dense>
            <q-item-section avatar>
              <q-avatar>
                <q-img :src="pwUrl"></q-img>
              </q-avatar>
            </q-item-section>
          </q-item>
          <q-btn v-if="scope.uploadedFiles.length > 0" icon="done_all" @click="scope.removeUploadedFiles" round dense flat >
            <q-tooltip>Remove Uploaded Files</q-tooltip>
          </q-btn>
          <q-spinner v-if="scope.isUploading" class="q-uploader__spinner" />
          <div class="col">
            <div class="q-uploader__title">Загрузить аватар</div>
            <div class="q-uploader__subtitle">{{ scope.uploadSizeLabel }} / {{ scope.uploadProgressLabel }}</div>
          </div>
          <q-btn v-if="scope.canAddFiles" type="a" icon="add_box" @click="scope.pickFiles" round dense flat>
            <q-uploader-add-trigger />
            <q-tooltip>Выбрать файл</q-tooltip>
          </q-btn>
          <q-btn v-if="scope.canUpload" icon="cloud_upload" @click="crop" round dense flat >
            <q-tooltip>Загрузить</q-tooltip>
          </q-btn>

          <q-btn v-if="scope.isUploading" icon="clear" @click="scope.abort" round dense flat >
            <q-tooltip>Abort Upload</q-tooltip>
          </q-btn>
        </div>
      </template>
    </q-uploader>
  <template v-if="refUploader?.queuedFiles.length">
    <q-card dark style="width: 100%">
      <q-card-section>
        <cropper
          class="cropper"
          ref="refCropper"
          :src="img"

          :stencil-props="stencil"
          :stencil-component="CircleStencil"
          :default-size="defaultSize"
          :default-position="defaultPosition"
          @change="change"
        ></cropper>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn label="Готово" color="green" @click="crop"></q-btn>
      </q-card-actions>
    </q-card>

  </template>

</template>

<style scoped>
.cropper {
  width: 100%;
  background: #DDD;
}

.CircleStencil {
  border: dashed 1px rgba(255,255,255, 0.25);
}
</style>
