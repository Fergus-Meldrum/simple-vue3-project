import { defineStore } from 'pinia'

export let useTeamStore = defineStore('team', {
  state: () => ({
    name: '',
    spots: 0,
    members: []
  }),

  actions: {
    async fill() {
      let r = await import('@/team.json')
      let data = r.default
      // this.name = data.name
      // this.spots = data.spots
      // this.members = data.members

      this.$patch({
        name: data.name,
        spots: data.spots,
        members: data.members
      })

      // this.$state = r.default
    },

    addMember(name, email) {
      // Determine the new ID based on the last member's ID in the array
      const newId = this.members.length > 0 ? this.members[this.members.length - 1].id + 1 : 1

      const newMember = {
        id: newId,
        name: name,
        email: email
      }

      this.members.push(newMember)
    },

    removeMember(id) {
      this.members = this.members.filter((obj) => obj.id !== id)
    }
  },

  getters: {
    spotsRemaining() {
      return this.spots - this.members.length
    },

    maxSpotsReached() {
      return this.members.length === this.spots
    }
  }
})
