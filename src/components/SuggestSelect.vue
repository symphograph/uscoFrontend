<script setup lang="ts">
import { api, apii } from 'boot/axios';
import { notifyError } from 'src/js/myFuncts';
import { useQuasar } from 'quasar';
import { onBeforeMount, Ref, ref } from 'vue';

const q = useQuasar();
const apiUrl = String(process.env.API);
const apiStaffUrl = String(process.env.apiStaff);
const apiKey = ref("")

const selectedSuggest = ref(null) as Ref<any>;
const suggestList = ref([
    {
      'title': {
        'text': 'Сахалинский международный театральный центр имени Антона Павловича Чехова',
        'hl': [
          {
            'begin': 26,
            'end': 31
          }
        ]
      },
      'subtitle': {
        'text': 'Театр · Коммунистический проспект, 35',
        'hl': [
          {
            'begin': 0,
            'end': 5
          }
        ]
      },
      'tags': [
        'business',
        'theatre',
        'museum',
        'concert hall'
      ],
      'distance': {
        'value': 1178.70231,
        'text': '1.18 км'
      }
    },
    {
      'title': {
        'text': 'Сахалинский театр кукол',
        'hl': [
          {
            'begin': 12,
            'end': 17
          }
        ]
      },
      'subtitle': {
        'text': 'Театр · Коммунистический проспект, 28А',
        'hl': [
          {
            'begin': 0,
            'end': 5
          }
        ]
      },
      'tags': [
        'business',
        'theatre',
        'office service'
      ],
      'distance': {
        'value': 1224.330864,
        'text': '1.22 км'
      }
    },
    {
      'title': {
        'text': 'Московский драматический театр имени М. Н. Ермоловой',
        'hl': [
          {
            'begin': 25,
            'end': 30
          }
        ]
      },
      'subtitle': {
        'text': 'Театр · Москва, Тверская улица, 5/6',
        'hl': [
          {
            'begin': 0,
            'end': 5
          }
        ]
      },
      'tags': [
        'business',
        'theatre'
      ],
      'distance': {
        'value': 6655148.389,
        'text': '6655.15 км'
      }
    },
    {
      'title': {
        'text': 'Татарский государственный театр кукол Экият',
        'hl': [
          {
            'begin': 26,
            'end': 31
          }
        ]
      },
      'subtitle': {
        'text': 'Театр · Казань, Петербургская улица, 57',
        'hl': [
          {
            'begin': 0,
            'end': 5
          }
        ]
      },
      'tags': [
        'business',
        'theatre'
      ],
      'distance': {
        'value': 6077098.052,
        'text': '6077.10 км'
      }
    },
    {
      'title': {
        'text': 'Театр драмы и комедии',
        'hl': [
          {
            'begin': 0,
            'end': 5
          }
        ]
      },
      'subtitle': {
        'text': 'Театр · Петропавловск-Камчатский, Ленинская улица, 75',
        'hl': [
          {
            'begin': 0,
            'end': 5
          }
        ]
      },
      'tags': [
        'business',
        'theatre'
      ],
      'distance': {
        'value': 1321394.665,
        'text': '1321.39 км'
      }
    },
    {
      'title': {
        'text': 'Театр Колесо',
        'hl': [
          {
            'begin': 0,
            'end': 5
          }
        ]
      },
      'subtitle': {
        'text': 'Остановка общественного транспорта · Тольятти, Ленинградская улица, 33Ас1'
      },
      'tags': [
        'business',
        'bus stop'
      ],
      'distance': {
        'value': 6203127.608,
        'text': '6203.13 км'
      }
    },
    {
      'title': {
        'text': 'Театральная',
        'hl': [
          {
            'begin': 0,
            'end': 5
          }
        ]
      },
      'subtitle': {
        'text': 'Остановка общественного транспорта · Сочи, А-147'
      },
      'tags': [
        'business',
        'bus stop'
      ],
      'distance': {
        'value': 7445799.203,
        'text': '7445.80 км'
      }
    }
  ]
);
const options = ref([...suggestList.value]);
const emit = defineEmits<{
  saved: [id: number]
}>();

function filterFn(val: string, update: any) {
  if (!val) {
    options.value = [];
    return;
  }
  update(() => {

    getSuggestList(val);
  });
}

function getSuggestList(inputAddressStr: string) {
  const url = 'https://suggest-maps.yandex.ru/v1/suggest';
  //const apikey = '79fc56ed-2b44-4a58-939e-64f51f059691';

  apii.get(url, {
    params: {
      apikey: apiKey.value,
      text: inputAddressStr,
      ull: '142.728060,46.966085', // todo
      print_address: 1,
      strict_bounds: 1,
      attrs: 'uri'
    },
    withCredentials: false,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }).then((response) => {
    if (!response?.data?.results) {
      return;
    }

    const results = response.data.results;
    results.forEach((item: any, index: number) => {
      item.label = item.address.formatted_address;
      item.value = index;
    });
    options.value = results;
  })
    .catch((error) => {
      console.error(error)
      q.notify(notifyError(error));
    });
}

function addSuggest() {
  api.post(apiUrl + 'epoint/ya/suggest.php', {
    params: {
      method: 'add',
      suggest: selectedSuggest.value
    }
  })
    .then((response) => {
      if (!response?.data?.result) {
        throw new Error();
      }
      emit('saved', response.data.data.id);
    })
    .catch((error) => {
      q.notify(notifyError(error));
    });
}

function onSelect() {
  if (!selectedSuggest.value) {
    return;
  }
  addSuggest();
}

function getSuggestApiKey() {
  const url = apiStaffUrl + 'epoint/ya/suggest.php';
  const params = { method: 'getApiKey' };
  api.post(url, { params })
    .then((response) => {
      if (!response?.data?.result) throw new Error('SuggestApiKey Error');

      apiKey.value = response.data.data.key;
    })
    .catch((error) => {
      console.error(error)
      q.notify(notifyError(error));
    });
}

onBeforeMount(() => {
  getSuggestApiKey()
})
</script>

<template>
  <q-select v-model="selectedSuggest"
            v-if="apiKey"
            :options="options"
            use-input
            fill-input
            hide-selected
            clearable
            @update:model-value="onSelect"
            @filter="filterFn"
  >
    <template v-slot:option="scope">
      <q-item v-bind="scope.itemProps">
        <q-item-section>
          <q-item-label>{{ scope.opt.title.text }}</q-item-label>
          <q-item-label caption>{{ scope.opt?.address?.formatted_address }}</q-item-label>
        </q-item-section>
      </q-item>
    </template>
  </q-select>
</template>

<style scoped>

</style>
