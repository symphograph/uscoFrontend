<template>
  <div class="group" @dragover="onGrpoup(group.group_id)">

    <template v-for="player in group.Players" :key="player.pers_id">
        <q-item
          draggable="true"
          @dragstart="onDragStart(player.pers_id)"
          @dragleave="onDrop"
        >
          <q-item-section avatar>
            <q-avatar>
              <img :src="api + player.ava">
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ player.name }} {{ player.lastName }}</q-item-label>
            <q-item-label caption lines="1">gfdsfgdsgf</q-item-label>
          </q-item-section>
        </q-item>
    </template>
  </div>
</template>

<script>

export default {
  name: 'StaffGroup',
  data () {
    return {
      api: String(process.env.API),
      drPersFrom: 0,
      drGroupTo: 0
    }
  },
  props: {
    group: {}
  },
  methods: {
    onDragStart (e) {
      this.drPersFrom = e
      console.log(this.drPersFrom)
    },
    onGrpoup (gr) {
      this.drgroupTo = gr
      console.log(this.drgroupTo)
    },
    onDrop () {
      console.log('dr' + this.drgroupTo)
    }
  }
}
</script>

<style scoped>

</style>
