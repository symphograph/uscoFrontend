<template>
  <div class="content">
    <div class="filesarea">
      <div class="p_title">Документы</div>
      <br>
      <template v-for="block in blocks" :key="block.title">
        <details open="open">
          <summary>{{ block.title }}</summary>
          <div class="docarea">
            <template v-for="(link, idx) in block.links" :key="idx">
              <p>
                <a :class="['flink', !link.href ? 'disabled' : '']" :href="api + link.href">
                  {{ link.text }}
                </a>
              </p><br>
            </template>
          </div>
        </details>
        <br>
        <hr>
        <br>
      </template>
      <details open="open">
        <summary>Платные услуги</summary>
        <br>
        <a class="flink" :href="api + 'documents/provisionOnPaidServices.pdf'">
          Положение о платных услугах
        </a>
        <br>
        <ol>
          <li>Организация и проведение концерта для детей детских садов, школьников, студентов.<br>
            <span>Стоимость: Договорная</span><br></li>

          <li>Концерт с приглашением солиста из Сахалинского края<br>
            <span>Стоимость: Договорная</span><br></li>
          <li>Концерт с приглашением солиста из другого федерального округа<br>
            <span>Стоимость: Договорная</span><br></li>
          <li>Концерт без участия приглашенного солиста<br>
            <span>Стоимость: Договорная</span><br></li>
          <li>Организация и (или) проведение выездного концерта<br>
            <span>Стоимость: Договорная</span><br></li>
        </ol>
        <div class="tel"><a href="tel:+74242300518">+7-4242-300-518</a></div>
        <br>
      </details>
      <br>
      <hr>
      <br>

      <q-table :expanded="[]"
               title="Материально-техническая база"
               :pagination="mtb.initialPagination"
               :columns="mtb.columns"
               :rows="mtb.rows"
               hide-bottom
               :grid="$q.screen.xs"
               separator="cell"
      >
      </q-table>

    </div>

  </div>
</template>

<script setup>
import { useMeta } from 'quasar'

const metaData = {
  title: 'Документы'
}
useMeta(metaData)

const api = String(process.env.API)
const blocks = [
  {
    title: 'Учредительные документы',
    links: [
      {
        href: 'documents/ustav_2018_09_17_with_egrul.pdf',
        text: 'Устав учреждения от 17.09.2018'
      },
      {
        href: 'documents/ustav_edit_2019-01-16.pdf',
        text: 'Изменения в Устав от 16.01.2019'
      },
      {
        href: 'documents/ustav_edit_2020-04-14.pdf',
        text: 'Изменения в Устав от 14.04.2020'
      },
      {
        href: 'documents/ustav_edit_2023-04-10.pdf',
        text: 'Изменения в Устав от 10.04.2023'
      },
      {
        href: 'documents/Certificate_of_registration_2023-04-10.pdf',
        text: 'Свидетельство о постановке на учет от 10.04.2023'
      },
      {
        href: 'documents/extractFromEGRN.pdf',
        text: 'Выписка из ЕГРН'
      },
      {
        href: 'ofdocs/inn.pdf',
        text: 'ИНН/ОГРН: 6501109377/1026500550086'
      },
      {
        href: '',
        text: 'КПП: 650101001'
      },
      {
        href: '',
        text: 'ОКПО: 55655001'
      }
    ]
  },
  {
    title: 'ФХД',
    links: [
      {
        href: 'documents/Plan_FHD_2018.pdf',
        text: 'План ФХД 2018'
      },
      {
        href: 'documents/Plan_FHD_2019.pdf',
        text: 'План ФХД 2019'
      },
      {
        href: 'documents/Plan_FHD_2020.pdf',
        text: 'План ФХД 2020'
      },
      {
        href: 'documents/Plan_FHD_2021.pdf',
        text: 'План ФХД 2021'
      },
      {
        href: 'documents/Plan_FHD_2022.pdf',
        text: 'План ФХД 2022'
      },
      {
        href: 'documents/Performance_reportFHD.pdf',
        text: 'Отчет об исполнении ФХД'
      },
      {
        href: 'documents/Performance_reportFHD1.pdf',
        text: 'Отчет об исполнении ФХД1'
      },
      {
        href: 'documents/Performance_reportFHD2.pdf',
        text: 'Отчет об исполнении ФХД2'
      },
      {
        href: 'documents/salary.pdf',
        text: 'Заработная плата руководителей'
      }
    ]
  },
  {
    title: 'Муниципальное задание',
    links: [
      {
        href: 'documents/MUP_Task_2018.pdf',
        text: 'Муниципальное задание 2018'
      },
      {
        href: 'documents/MUP_Task_2019.pdf',
        text: 'Муниципальное задание 2019'
      },
      {
        href: 'documents/MUP_Task_2020.pdf',
        text: 'Муниципальное задание 2020'
      },
      {
        href: 'documents/MUP_Task_2021.pdf',
        text: 'Муниципальное задание 2021'
      },
      {
        href: 'documents/MUP_Task_2021edit.pdf',
        text: 'Муниципальное задание 2021 изменения'
      },
      {
        href: 'documents/MUP_Task_2022.pdf',
        text: 'Муниципальное задание 2022'
      },
      {
        href: 'documents/MUP_Task_2022edit.pdf',
        text: 'Муниципальное задание 2022 изменения'
      },
      {
        href: 'documents/MUP_Task_2023.pdf',
        text: 'Муниципальное задание 2023'
      },
      {
        href: 'documents/MUP_Task_2023edit.pdf',
        text: 'Муниципальное задание 2023 изменения'
      },
      {
        href: 'documents/report_MTask_2018.doc',
        text: 'Отчеты по выполнению Муниципального задания 2018'
      },
      {
        href: 'documents/report_MTask_2019.pdf',
        text: 'Отчеты по выполнению Муниципального задания 2019'
      },
      {
        href: 'documents/report_MTask_2020.pdf',
        text: 'Отчеты по выполнению Муниципального задания 2020'
      },
      {
        href: 'documents/report_MTask_2021.pdf',
        text: 'Отчеты по выполнению Муниципального задания 2021'
      },
      {
        href: 'documents/report_MTask_2022.pdf',
        text: 'Отчеты по выполнению Муниципального задания 2022'
      },
      {
        href: 'documents/report_MTask_2023_q2.pdf',
        text: 'Отчеты по выполнению Муниципального задания 2кв 2023'
      },
      {
        href: 'documents/report_MTask_2023_q3.pdf',
        text: 'Отчеты по выполнению Муниципального задания 3кв 2023'
      },

    ]
  },
  {
    title: 'Антикоррупционная деятельность',
    links: [
      {
        href: 'documents/CorruptPlan_2023-2024.doc',
        text: 'План мероприятий Муниципального бюджетного учреждения «Южно-Сахалинский симфонический оркестр» по противодействию коррупции на 2023-2024 годы'
      },
      {
        href: 'documents/AboutConflictDiscords.pdf',
        text: 'Положение «О конфликте интересов в Муниципальном бюджетном учреждении «Южно-Сахалинский симфонический оркестр»'
      },
      {
        href: 'documents/AboutUncorruptPolicy.pdf',
        text: 'Положение «Об антикоррупционной политике в Муниципальном бюджетном учреждении «Южно-Сахалинский симфонический оркестр»'
      },
      {
        href: 'documents/BusinessGiftExchangeRules.pdf',
        text: 'Правила обмена деловыми подарками и знаками делового гостеприимства в Муниципальном бюджетном учреждении «Южно-Сахалинский симфонический оркестр»'
      },
      {
        href: 'documents/ProfessionalCodeOfEthics.pdf',
        text: 'Кодекс профессиональной этики и служебного поведения работников Муниципального бюджетного учреждения «Южно-Сахалинский симфонический оркестр»'
      },
      {
        href: 'documents/Order38-20.pdf',
        text: 'Приказ №38/20 от 14.12.2020'
      },
      {
        href: 'documents/Order39-20.pdf',
        text: 'Приказ №39/20 от 14.12.2020'
      },
      {
        href: 'documents/corruptUSSO2023.pdf',
        text: 'Отчет за 2023'
      }

    ]
  },
  {
    title: 'Результаты проведения специальной оценки условий труда',
    links: [
      {
        href: 'documents/AssessmentOfWorkingConditions.pdf',
        text: 'Оценка условий труда ЮССО'
      }
    ]
  },
  {
    title: 'Локальные нормативные акты',
    links: [
      {
        href: 'documents/EnergyEfficiencyProgram_2022-2024.pdf',
        text: 'Программа энергоэффективности ЮССО 2022-2024'
      }
    ]
  }
]

const mtb = {
  columns: [
    {
      name: 'Наименование',
      label: 'Наименование',
      align: 'center',
      required: true,
      bold: true,
      field: row => row.name,
      format: val => `${val}`,
      style: 'white-space: normal'
    },
    {
      name: 'data',
      align: 'center',
      label: 'Показатели по учреждению',
      field: row => row.data,
      format: val => `${val}`,
      style: 'white-space: normal'
    }
  ],
  rows: [
    {
      name: 'Учреждение занимает отдельное здание, арендует (у кого), совместно с другими организациями (какими)',
      data: 'Арендует часть здания у ООО «Либерти»'
    },
    {
      name: 'Система отопления здания',
      data: 'Централизованное теплоснабжение'
    },
    {
      name: 'Наличие водопровода в здании (да \\ нет)',
      data: 'Да'
    },
    {
      name: 'Наличие канализации в здании (да \\ нет)',
      data: 'Да'
    },
    {
      name: 'Наличие средств противопожарной защиты',
      data: 'Имеется'
    },
    {
      name: 'Наличие средств пожарного оповещения',
      data: 'Здания оборудованы автоматической пожарной сигнализацией, системами управления и оповещения людей'
    },
    {
      name: 'Техническое состояние здания (удовлетворительное, требует кап. ремонта, аварийное, требует текущего ремонта, подлежит сносу)',
      data: 'Удовлетворительное'
    },
    {
      name: 'Дополнительные оборудования здания',
      data: 'Пандус для инвалидов'
    },
    {
      name: 'Сооружения на прилегающей территории здания',
      data: 'Парковочная зона'
    }
  ],
  initialPagination: {
    sortBy: 'desc',
    descending: false,
    page: 1,
    rowsPerPage: 0
    // rowsNumber: xx if getting data from a server
  }
}


</script>

<style>
* {
  margin: 0;
}

.filesarea {
  max-width: 800px;
  margin: auto;
  padding: 30px;
}

.docarea {
  padding: 1em 2em;
}

summary {
  font-size: 25px;
  /* font-weight: bold; */
  cursor: pointer;
  color: #ba892f;
}

.filesarea a {
  color: #333366;
}

.flink {
  vertical-align: middle;
  text-decoration: none;
  font-size: 18px;
  /* margin-left: 1em; */
  color: #2f2e2e;
  transition: 300ms;
}

.table {
  color: black;
}

ol li {
  margin: 1em;
  font-size: 18px;
  color: black;
}

ol span {
  font-size: 14px;
  color: dimgray;
}

@media (max-width: 600px) {

  summary {
    font-size: 18px;

  }

  .flink, li {
    font-size: 15px;

  }

  .table div {
    font-size: 14px;
  }

}

th {
  font-weight: bold;
}
</style>
