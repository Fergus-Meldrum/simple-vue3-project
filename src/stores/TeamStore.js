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

    grow(spots) {
      this.spots = spots
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
