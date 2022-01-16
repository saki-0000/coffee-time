<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="logo py-4 d-flex justify-center">
        <coffee-calculator />
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import CoffeeCalculator from '../components/CoffeeCalculator.vue'
export default {
  components: { CoffeeCalculator },
  name: 'IndexPage',
}
</script>
