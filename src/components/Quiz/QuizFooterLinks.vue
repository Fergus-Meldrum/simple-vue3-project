<script setup>
import { state } from '@/stores/quizStore.js'
</script>

<template>
  <div>
    <button @click="state.name = 'A new Quiz name'">Change the Quiz Name</button>

    <h5>{{ state.name }}</h5>
    <ul>
      <li><a href="#">Get a Job</a></li>
      <li><a href="#">Contact Us</a></li>
    </ul>
  </div>
</template>
