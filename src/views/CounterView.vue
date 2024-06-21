<script setup>
import { useCounterStore } from '@/stores/CounterStore.js'

let counter = useCounterStore()
</script>

<template>
  <p>{{ counter.count }}</p>
  <button @click="counter.increment()" :disabled="!counter.remaining">
    Increment ({{ counter.remaining }} Remaining)
  </button>
</template>

<style scoped></style>
