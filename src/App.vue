<script lang="ts">

import {defineComponent} from "vue";
import {CustomFilterWeekday, FilterCriteria} from "./types/types.ts";
import ChildComp from "./components/ChildComp.vue";

export default defineComponent({
  components: {ChildComp},
  data(): {
    filterCriteria: FilterCriteria
  } {
    return {
      filterCriteria: {
        dateRange: { start: undefined, end: undefined },
        timeRange: { start: undefined, end: undefined },
        variants: [],
        customFilterWeekday: CustomFilterWeekday.ENTIRE_WEEK
      },
    }
  }
})
</script>

<template>
  <ChildComp :filter-criteria="filterCriteria" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
