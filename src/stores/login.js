import { defineStore } from 'pinia'

export const useLoginStore = defineStore('login', {
  state: () => ({
    formValues: {
      username: '',
      password: ''
    },
    Autheicate: false
  }),

  getters: {},
  actions: {
    changeVal(val) {
      this.formValues.username = val.username
      this.formValues.password = val.password
    }
  }
})
