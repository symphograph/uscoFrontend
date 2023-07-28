<template>
  <div class="content">
    <div class="text">
      <div class="p_title">Контакты</div>
      <br>
      <p>г. Южно-Сахалинск, ул.Ленина, д. 156</p><br>
      Директор<br>
      <b>Кириллова Майя Владимировна</b>
      <div class="tel"><a href="tel:+74242300518">+7-4242-300-518</a></div>
      <br>
      <div class="tel"><a href="tel:+79632892316">+7-963-289-23-16</a></div>
      <br><br>
      Художественный руководитель и главный дирижер<br>
      <b>Ахназарян Тигран Суренович</b>
      <div class="tel"><a href="tel:+74242300518">+7-4242-300-518</a></div>
      <br><br>
      Старший администратор
      <div class="tel"><a href="tel:+74242300518">+7-4242-300-518</a></div>
      <br><br>
      Специалист по кадрам
      <div class="tel"><a href="tel:+74242300518">+7-4242-300-518</a></div>
      <br>
      <br>
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
      <br><br>
      Emails:<br>
      <a href="mailto:mbu-gko@yandex.ru">mbu-gko@yandex.ru</a><br>
      <a href="mailto:yusgo.mbuyusko@sakhalin.gov.ru">yusgo.mbuyusko@sakhalin.gov.ru</a><br>
      <br><br>
      <br>
      <div class="map">
        <iframe src="https://yandex.ru/map-widget/v1/-/ZU0EaABiTkMFXEJuZWJ4d3phYQA=/?ll=142.727859%2C46.966131&z=19"
                width="100%" height="400" frameborder="1" allowfullscreen="true"></iframe>
      </div>
      <br><br>

      <div class="feedbackArea">
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
              type="email"
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
        <span>*Нажимая "отправить", Вы соглашаетесь с
          <router-link to="/pdn">правилами</router-link> обработки персональных данных.</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMeta, useQuasar } from 'quasar'
import { ref } from 'vue'


const metaData = {
  title: 'Контакты'
}
useMeta(metaData)

const $q = useQuasar()
const name = ref(null)
const email = ref(null)
const msg = ref(null)
const accept = ref(false)

function test () {
  //console.log(msg.value)
  $q.notify({
    color: 'green-4',
    textColor: 'white',
    icon: 'cloud_done',
    timeout: 300,
    position: 'center',
    message: 'Отправлено'
  })
}

function onSubmit () {
  if (accept.value !== true) {
    $q.notify({
      color: 'red-5',
      textColor: 'white',
      icon: 'warning',
      message: 'Пожалуйста, примите соглашение о персональных данных.'
    })
  } else {
    test()
  }
}

function onReset () {
  name.value = null
  email.value = null
  msg.value = null
  accept.value = false
}

</script>

<style scoped>
.feedbackArea {
  width: 100%;
}

</style>
