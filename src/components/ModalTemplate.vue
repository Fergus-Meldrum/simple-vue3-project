<script setup>
defineProps({
  open: Boolean
})
</script>

<template>
  <Transition
    enter-from-class="opacity-0 scale-125"
    enter-to-class="opacity-100 scale-100"
    enter-active-class="transition duration-300"
    leave-from-class="opacity-100 scale-100"
    leave-to-class="opacity-0 scale-125"
    leave-active-class="transition duration-200"
  >
    <div v-if="open" class="model-mask">
      <div class="modal-container">
        <slot name="header">
          <header>Default Header</header>
        </slot>

        <slot name="body">
          <div>Default Main</div>
        </slot>

        <slot name="footer">
          <footer class="footer">
            <button
              @click="$emit('close')"
              class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
            >
              Default Close
            </button>
          </footer>
        </slot>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.model-mask {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: grid;
  place-items: center;
}

.modal-container {
  background: white;
  padding: 1rem;
  width: 80vw;
  max-width: 500px;
}

.footer {
  border-top: 1px solid #ddd;
  margin-top: 1rem;
  padding-top: 0.5rem;
  font-size: 0.8rem;
}
</style>
