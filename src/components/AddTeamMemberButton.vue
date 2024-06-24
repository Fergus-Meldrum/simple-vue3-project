<script setup>
import ModalTemplate from '@/components/ModalTemplate.vue'
import { ref } from 'vue'
import { useTeamStore } from '@/stores/TeamStore.js'

let showModal = ref(false)
let team = useTeamStore()
</script>

<template>
  <button
    class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded disabled:bg-gray-400"
    :disabled="team.maxSpotsReached"
    @click="showModal = true"
  >
    Add Member ({{ team.spotsRemaining }} Spots Left)
  </button>

  <Teleport to="body">
    <ModalTemplate :open="showModal" @close="showModal = false">
      <template #header>
        <header>Add User</header>
      </template>
      <template #body>
        <p>Add a new user to your group</p>
        <div class="flex mt-2">
          <input type="email" class="flex-1" />
          <button class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
            Add User
          </button>
        </div>
      </template>
    </ModalTemplate>
  </Teleport>
</template>

<style scoped></style>
