<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="logo py-4 d-flex justify-center">
        <v-text-field
          v-model.number="second"
          type="number"
          label="秒"
          hint="何秒はかりますか？？"
        />
        <Timer :second="second" />
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import Timer from '../components/Timer.vue'
export default defineComponent({
  name: 'TimerPage',
  components: { Timer },
  setup: () => {
    const second: Number = 180
    return {
      second,
    }
  },
})
</script>
