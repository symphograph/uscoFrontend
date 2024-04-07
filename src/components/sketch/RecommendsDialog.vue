<script setup>
import 'src/css/dialog.css'
import {inject} from "vue";

/**
 *
 * @type Ref<boolean>
 */
const showRecommends = inject('showRecommends')
const emit = defineEmits(['confirmed'])

function confirm () {
  emit('confirmed')
  showRecommends.value = false
}
</script>

<template>
  <q-dialog v-model="showRecommends">
    <q-card className="dialogArea">
      <q-card-section class="cardTitle">
        <q-item dense>
          <q-item-label>Рекомендации к Эскизу</q-item-label>
        </q-item>
      </q-card-section>
      <q-separator inset></q-separator>
      <q-card-section>
        <q-list>
          <q-item>
            <q-item-section>
              <q-item-label>Соотношение сторон:</q-item-label>
              <q-item-label caption>16:9 Например, 1920x1080</q-item-label>
              <q-item-label caption>Изменение соотношения сторон крайне негативно сказывается на
                качестве изображения
              </q-item-label>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-item-label>Содержание:</q-item-label>

              <q-item-label caption>
                Эскиз призван отражать основную эмоциональную мысль в виде рисунка.
              </q-item-label>

              <q-item-label caption>
                Следует избегать наличия в нем какого-либо текста.
                В особенности, дублирующего техническую информацию, такую как время и место.
              </q-item-label>

              <q-item-label caption>
                Исключением может быть название концерта в том случае, если его шрифт, цвет и прочие свойства имеют
                высокую художественную ценность.
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
      <q-card-section>
        <q-item-label>Хороший пример</q-item-label>
        <q-img src="/img/sketch/good-example.png"
               :ratio="16/9"
        ></q-img>
      </q-card-section>
      <q-card-section>
        <q-item-label>Плохой пример</q-item-label>
        <q-img src="/img/sketch/bad-example.jpg"
               :ratio="16/9"
        ></q-img>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn class="goldBtn" label="Понятно" @click="confirm()"></q-btn>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<style scoped>

</style>
