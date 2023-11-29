<template>
  <div>hello</div>
</template>

<script lang="ts">

import {defineComponent, PropType} from "vue";
import {FilterCriteria} from "../types/types.ts";

export default defineComponent({

  props: {
    filterCriteria: {
      type: Object as PropType<FilterCriteria>,
      required: true
    }
  },

  mounted() {
    console.log(this.filterCriteria)
  }
})

</script>