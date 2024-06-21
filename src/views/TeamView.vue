<script setup>
// import team from '@/team.json'
import TeamHeader from '@/components/TeamApp/TeamHeader.vue'
import TeamMembersTable from '@/components/TeamApp/TeamMembersTable.vue'
import TeamFooter from '@/components/TeamApp/TeamFooter.vue'
import { useTeamStore } from '@/stores/TeamStore.js'

let team = useTeamStore()

team.fill()
</script>

<template>
  <TeamHeader />

  <div class="place-self-center flex flex-col gap-y-3">
    <TeamMembersTable />
  </div>

  <TeamFooter />
</template>
