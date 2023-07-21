<template>
  <div
    :class="'cell2' + (seatN.exist ? ' ' +  seatN.pricing : '')"
    @click="editCell(seatN)"></div>
</template>

<script setup>
import {inject, ref} from "vue";

const props = defineProps({
  seat: Object
})

const seatN = ref(props.seat)

const selectedMode = inject('selectedMode')

function editCell(seat) {
  switch (selectedMode.value) {
    case 'Existing': {
      seat.exist = !seat.exist
      return;
    }
    default: {
      if(seat.pricing === selectedMode.value){
        seat.pricing = 'Invite'
        return;
      }
      seat.pricing = selectedMode.value
    }
  }
}
</script>

<style scoped>

</style>
