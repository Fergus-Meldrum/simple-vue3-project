<script setup>
import ModalTemplate from '@/components/ModalTemplate.vue'
import { ref, watch } from 'vue'
import { useTeamStore } from '@/stores/TeamStore.js'

let showModal = ref(false)
let name = ref()
let email = ref()
let team = useTeamStore()

function clearData() {
  name.value = ''
  email.value = ''
}

async function addTeamMember() {
  await team.addMember(name.value, email.value)
  showModal.value = false
}

watch(showModal, () => {
  clearData()
})
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
        <header class="font-bold text-lg">Add User</header>
      </template>
      <template #body>
        <p>Add a new user to your group</p>
        <div class="mb-4 mt-3">
          <label for="name" class="block text-gray-700">Name:</label>
          <input
            type="text"
            v-model="name"
            id="name"
            class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div class="mb-4">
          <label for="email" class="block text-gray-700">Email:</label>
          <input
            type="email"
            v-model="email"
            id="email"
            class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div class="flex mt-2">
          <button
            class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded ml-auto"
            @click="addTeamMember"
          >
            Add User
          </button>
        </div>
      </template>
    </ModalTemplate>
  </Teleport>
</template>

<style scoped></style>
