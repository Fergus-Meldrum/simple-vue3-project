<script setup>
import ModalTemplate from '@/components/ModalTemplate.vue'
import { ref } from 'vue'
import { useTeamStore } from '@/stores/TeamStore.js'

let showModal = ref(false)
let team = useTeamStore()

const props = defineProps({
  id: Number,
  name: String
})

async function removeTeamMember() {
  await team.removeMember(props.id)
  showModal.value = false
}
</script>

<template>
  <button class="text-red-400 text-xl" @click="showModal = true">Remove</button>

  <Teleport to="body">
    <ModalTemplate :open="showModal" @close="showModal = false">
      <template #header>
        <header>Remove User</header>
      </template>
      <template #body>
        <p>Are you sure you want to remove {{ name }} from the team?</p>
        <div class="flex mt-2">
          <input type="email" class="flex-1" />
          <button
            class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
            @click="removeTeamMember()"
          >
            Remove User
          </button>
        </div>
      </template>
      <template #footer>
        <footer class="footer">
          <button
            @click="showModal = false"
            class="bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
        </footer>
      </template>
    </ModalTemplate>
  </Teleport>
</template>

<style scoped>
.footer {
  border-top: 1px solid #ddd;
  margin-top: 1rem;
  padding-top: 0.5rem;
  font-size: 0.8rem;
}
</style>
