import { defineStore } from 'pinia'

export const useSignupStore = defineStore('Signup', {
  state: () => ({
    UserDetails: {
      useremail: '',
      username: '',
      password: ''
    }
  }),
  getters: {},
  actions: {
    changeVal(value) {
      this.UserDetails.useremail = value.useremail
      this.UserDetails.username = value.username
      this.UserDetails.password = value.password
    }
  }
})
