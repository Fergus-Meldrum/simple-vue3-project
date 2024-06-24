<script setup>
import RemoveTeamMemberButton from '@/components/RemoveTeamMemberButton.vue'

defineProps({
  id: Number,
  name: String,
  email: String
})
</script>

<template>
  <tr class="bg-gray-100 px-12">
    <td class="text-xl font-medium flex items-center gap-x-4 px-6 py-4">
      <img :src="`https://i.pravatar.cc/50?u=${email}`" alt="" class="rounded-full" />
      {{ name }}
    </td>
    <td class="text-gray-500 px-6 py-4">{{ email }}</td>
    <td class="px-6 py-4">
      <RemoveTeamMemberButton :id="id" :name="name" />
    </td>
  </tr>
</template>

<style scoped></style>
