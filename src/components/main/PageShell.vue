<script setup lang="ts">
import {computed, inject, ref, useSlots, Ref} from "vue";
import ProgressLine from "components/main/ProgressLine.vue";
import MainFooter from "components/main/footer/MainFooter.vue";
import AnderHeader from "components/main/header/AnderHeader.vue";

const props = defineProps({
  pageTitle: {
    type: String
  },
  pageTitleSize: {
    type: String,
    default: '25px'
  },
  noStickTitle: {
    type: Boolean,
    default: undefined
  },
  useHeader: {
    type: Boolean,
    default: undefined
  }
})
function titleStyle () {
  return {
    fontSize: props.pageTitleSize
  }
}
const activeTools = ref(true)


const progress = inject('progress') as Ref<boolean>

const slots = useSlots();
const hasToolPanel = computed(() => !!slots.ToolPanel);
const hasPageContent = computed(() => !!slots.PageContent);


const scrollPos = inject('scrollPos') as Ref<number>
const scrollWatch = inject('scrollWatch') as Ref<boolean>
const stopScrollWatch = inject('stopScrollWatch') as Function

function onScroll(evt: { verticalPosition: number; }) {
  console.log('scroll')
  if (!scrollWatch.value) {
    scrollPos.value = evt.verticalPosition
    return;
  }
  const direction = evt.verticalPosition >= scrollPos.value
  activeTools.value = !direction || evt.verticalPosition === 0
  scrollPos.value = evt.verticalPosition
}

</script>

<template>
    <AnderHeader v-if="useHeader && scrollPos < 2"></AnderHeader>

  <div class="pageToolbar no-wrap" v-if="$q.platform.is.desktop || !hasToolPanel">
    <q-toolbar v-if="pageTitle && !noStickTitle">
      <q-item class="pageTitle">
        <q-item-label lines="0">{{ pageTitle }}</q-item-label>
      </q-item>
      <q-space></q-space>
      <slot name="ToolPanel"></slot>
      <slot name="SideTools"></slot>
    </q-toolbar>
  </div>
  <template v-else>
    <q-expansion-item expand-icon="tune"
                      :label="pageTitle"
                      v-model="activeTools"
                      expanded-icon=""
                      @before-show="stopScrollWatch()"
                      @before-hide="stopScrollWatch()"
                      :header-style="{fontSize: '20px'}"
    >
      <q-toolbar>
        <q-space></q-space>
        <slot name="ToolPanel"></slot>
      </q-toolbar>
    </q-expansion-item>
  </template>
  <q-separator></q-separator>
  <ProgressLine :progress="progress"></ProgressLine>
  <slot name="menuBar"></slot>
  <slot name="virtualScroll"></slot>
  <q-scroll-area class="col myScrollArea"
                 v-if="hasPageContent"
                 ref="refScrollArea"
                 @scroll="onScroll">
    <div class="pageToolbar" v-if="noStickTitle">
      <q-toolbar>
        <q-item class="pageTitle">
          <q-item-label lines="0">{{ pageTitle }}</q-item-label>
        </q-item>
      </q-toolbar>
      <q-separator></q-separator>
    </div>
    <slot name="PageContent"></slot>
    <MainFooter></MainFooter>
  </q-scroll-area>
</template>

<style scoped>
.pageTitle {
  font-size: 25px;
  color: var(--PageTitle);
}

.pageToolbar {
  width: 100%;
  max-width: 1200px;
  margin: auto;
  display: flex;
  /*border-bottom: 1px solid var(--PageTitle);*/
}

.pageToolbar .selectors {
  min-width: 50%;
  display: flex;
  justify-content: flex-end;
}

.pageToolbar .selectors > * {
  margin-left: 1em;
  display: block;
}

</style>
