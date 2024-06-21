<script setup>
import { useFlash } from '@/composeables/useFlash.js'

let { flash } = useFlash()
</script>

<template>
  <div>
    <p>
      <button @click="flash('Information!', 'it works on the about page', 'info')">Click Me</button>
    </p>
  </div>
</template>
