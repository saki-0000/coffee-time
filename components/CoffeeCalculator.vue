<template>
  <div>
    <v-text-field v-model="weight" />
    {{ weight }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup: (props, context) => {
    return { weight: 0 }
  },
})
</script>
