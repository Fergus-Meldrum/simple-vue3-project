<script setup>
import ModalTemplate from '@/components/ModalTemplate.vue'
import { ref } from 'vue'
import { useTeamStore } from '@/stores/TeamStore.js'

let showModal = ref(false)
let team = useTeamStore()

</script>

<template>
  <button
    class="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded disabled:bg-gray-400"
    :disabled="team.maxSpotsReached"
    @click="showModal = true"
  >
    <font-awesome-icon :icon="['fas', 'gear']" />
  </button>

  <Teleport to="body">
    <ModalTemplate :open="showModal" @close="showModal = false">
      <template #header>
        <header class="font-bold text-lg">Update Team Settings</header>
      </template>
      <template #body>
        <div class="mb-4">
          <label for="email" class="block text-gray-700">Team Name:</label>
          <input
            type="text"
            v-model="team.name"
            id="name"
            class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div class="mb-4 mt-3">
          <label for="name" class="block text-gray-700">Max Spots:</label>
          <input
            type="number"
            v-model="team.spots"
            id="spots"
            class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div class="flex mt-2">
          <button
            class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded ml-auto"
            @click="showModal = false"
          >
            Confirm
          </button>
        </div>
      </template>
      <template #footer>
        <div></div>
      </template>
    </ModalTemplate>
  </Teleport>
</template>

<style scoped></style>
