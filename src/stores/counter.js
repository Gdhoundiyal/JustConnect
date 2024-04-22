import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {


// Changing Profile Sections by Header Icons //
state: () => ({ count: 0, screen: 'Profile' }),

  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    changeVal(val) {
      this.screen = val
    },
  },

})
