<script setup>
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

<template>
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
</template>

<style scoped>

</style>
