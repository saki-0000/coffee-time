<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="logo py-4 d-flex justify-center">
        <v-text-field
          type="number"
          v-model.number="second"
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
  components: { Timer },
  name: 'TimerPage',
  setup: () => {
    const second: Number = 180
    return {
      second,
    }
  },
})
</script>
