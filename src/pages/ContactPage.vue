<script setup>
import {useMeta, useQuasar} from 'quasar'
import {computed, ref} from 'vue'
import {getMeta} from "src/js/myFuncts";
import PhoneNumber from "components/contacts/PhoneNumber.vue";
import EMail from "components/contacts/EMail.vue";
import PageTitle from "components/main/PageTitle.vue";
import MainFooter from "components/main/footer/MainFooter.vue";
import PageShell from "components/main/PageShell.vue";


const metaData = getMeta('Контакты')
useMeta(metaData)

const q = useQuasar()
const blockClass = computed(() => q.platform.is.desktop ? 'contentBlock' : 'contentBlock-m')

const name = ref(null)
const email = ref(null)
const msg = ref(null)
const accept = ref(false)

const contactList = ref([
  {
    id: 1,
    jobName: 'Директор',
    fullFIO: 'Кириллова Майя Владимировна',
    contacts: [
      {
        type: 'phoneNumber',
        value: '+7-4242-300-518'
      },
      {
        type: 'phoneNumber',
        value: '+7-963-289-23-16'
      }
    ]
  },
  {
    id: 2,
    jobName: 'Художественный руководитель и главный дирижер',
    fullFIO: 'Ахназарян Тигран Суренович',
    contacts: [
      {
        type: 'phoneNumber',
        value: '+7-4242-300-518'
      }
    ]
  },
  {
    id: 3,
    jobName: 'Старший администратор',
    contacts: [
      {
        type: 'phoneNumber',
        value: '+7-4242-300-518'
      }
    ]
  },
  {
    id: 4,
    jobName: 'Специалист по кадрам',
    contacts: [
      {
        type: 'phoneNumber',
        value: '+7-4242-300-518'
      }
    ]
  },
])

function test() {
  q.notify({
    color: 'green-4',
    textColor: 'white',
    icon: 'cloud_done',
    timeout: 300,
    position: 'center',
    message: 'Отправлено'
  })
}

function onSubmit() {
  if (accept.value !== true) {
    q.notify({
      color: 'red-5',
      textColor: 'white',
      icon: 'warning',
      message: 'Пожалуйста, примите соглашение о персональных данных.'
    })
  } else {
    test()
  }
}

function onReset() {
  name.value = null
  email.value = null
  msg.value = null
  accept.value = false
}

</script>

<template>
  <PageShell :page-title="metaData.title">
    <template v-slot:PageContent>
      <div class="contentArea">
        <div :class="blockClass">
          <q-list separator>
            <q-item clickable href="#map">
              <q-item-section avatar>
                <q-icon name="location_on"></q-icon>
              </q-item-section>
              <q-item-section>
                <q-item-label>
                  г. Южно-Сахалинск, ул.Ленина, д. 156
                </q-item-label>
              </q-item-section>
            </q-item>
            <template v-for="employ in contactList" :key="employ.id">
              <q-item>
                <q-item-section>
                  <q-item-label caption>{{ employ.jobName }}</q-item-label>
                  <q-item-label v-if="employ?.fullFIO && employ?.fullFIO.length">
                    <b><span style="color: var(--docTitle)">{{ employ.fullFIO }}</span></b>
                  </q-item-label>
                  <template v-for="contact in employ.contacts" :key="employ.id + '_' + contact.value">
                    <PhoneNumber :phoneNumber="contact.value"></PhoneNumber>
                  </template>
                </q-item-section>
              </q-item>
            </template>
          </q-list>
        </div>
        <q-separator spaced="2em"></q-separator>
        <div :class="blockClass">
          <b>График работы</b>
          <ul>
            <li>
              <div>Понедельник - Пятница</div>
              <b>9:00 - 17:15</b></li>
            <br>
            <li>
              <div>Суббота - Воскресенье</div>
              Выходные дни
            </li>
          </ul>
        </div>


        <q-separator spaced="2em"></q-separator>
        <EMail email="mbu-gko@yandex.ru"></EMail>
        <EMail email="yusgo.mbuyusko@sakhalin.gov.ru"></EMail>

        <q-separator spaced="2em"></q-separator>
        <div id="map">
          <iframe src="https://yandex.ru/map-widget/v1/-/ZU0EaABiTkMFXEJuZWJ4d3phYQA=/?ll=142.727859%2C46.966131&z=19"
                  width="100%" height="400" allowfullscreen="allowfullscreen"></iframe>
        </div>
        <q-separator spaced="2em"></q-separator>

        <div :class="blockClass">
          <div class="q-pa-md">

            <q-form
              @submit="onSubmit"
              @reset="onReset"
              class="q-gutter-md"
            >
              <q-input
                filled
                v-model="name"
                label="Ваше имя"
                hint="(ФИО)"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Обязательное поле']"
              ></q-input>
              <q-input
                filled
                v-model="email"
                label="mail@example.com"
                hint="Ваш email"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Обязательное поле']"
              ></q-input>
              <q-input
                filled
                v-model="msg"
                type="textarea"
                label="Текст сообщения"
                hint=""
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Напишите что-нибудь']"
              ></q-input>

              <q-toggle v-model="accept" label="Соглашаюсь на обработку персональных данных"></q-toggle>

              <div>
                <q-btn label="Отправить" :disable="!accept" type="submit" color="primary"></q-btn>
                <q-btn label="очистить" type="reset" color="primary" flat class="q-ml-sm"></q-btn>
              </div>
            </q-form>
          </div>
          <q-item clickable to="/pdn">
            <q-item-label caption>
              *Нажимая "отправить", Вы соглашаетесь с правилами обработки персональных данных.
            </q-item-label>
          </q-item>

        </div>
      </div>
    </template>
  </PageShell>
</template>

<style scoped>

.contentArea {
  max-width: 900px;
  margin: auto;
  color: var(--mainText);
  padding: 1em 0;
}

.contentBlock {
  text-align: justify;
  font-size: 18px;
}

.contentBlock-m {
  padding: 0 1em;
  text-align: start;
}

</style>
