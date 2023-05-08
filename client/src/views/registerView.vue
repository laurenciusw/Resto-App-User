<template>
  <!-- Container -->
  <div class="flex flex-wrap min-h-screen w-full content-center justify-center bg-gray-200 py-10">
    <!-- Login component -->
    <div class="flex shadow-md">
      <!-- Login form -->
      <div
        class="flex flex-wrap content-center justify-center rounded-l-md bg-white"
        style="width: 30rem; height: 40rem"
      >
        <div class="w-72">
          <!-- Heading -->
          <h1 class="text-xl font-semibold">Welcome back</h1>
          <small class="text-gray-400">Welcome back! Please enter your details</small>

          <!-- Form -->

          <form @submit.prevent="registerSumbit" class="mt-4">
            <div class="mb-3">
              <label class="mb-2 block text-xs font-semibold">username</label>
              <input
                type="username"
                v-model="username"
                placeholder="Enter your username"
                class="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
              />
            </div>

            <div class="mb-3">
              <label class="mb-2 block text-xs font-semibold">Email</label>
              <input
                type="email"
                v-model="email"
                placeholder="Enter your email"
                class="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
              />
            </div>

            <div class="mb-3">
              <label class="mb-2 block text-xs font-semibold">Password</label>
              <input
                type="password"
                v-model="password"
                placeholder="*****"
                class="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
              />
            </div>

            <div class="mb-3">
              <label class="mb-2 block text-xs font-semibold">Phone Number</label>
              <input
                type="phoneNumber"
                v-model="phoneNumber"
                placeholder="Enter your Phone Number"
                class="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
              />
            </div>

            <div class="mb-3">
              <label class="mb-2 block text-xs font-semibold">address</label>
              <input
                type="addresss"
                v-model="address"
                placeholder="Enter your address"
                class="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
              />
            </div>

            <div class="mb-3">
              <button
                class="mb-1.5 block w-full text-center text-white bg-purple-700 hover:bg-purple-900 px-2 py-1.5 rounded-md"
              >
                Sign in
              </button>
            </div>
          </form>

          <!-- Footer -->
          <div class="text-center">
            <span class="text-xs text-gray-400 font-semibold">have account?</span>
            <router-link v-bind:to="'/login'" class="text-xs font-semibold text-purple-700"
              >login</router-link
            >
          </div>
        </div>
      </div>

      <!-- Login banner -->
      <div
        class="flex flex-wrap content-center justify-center rounded-r-md"
        style="width: 24rem; height: 32rem"
      >
        <img
          class="w-full h-full bg-center bg-no-repeat bg-cover rounded-r-md"
          src="https://i.imgur.com/9l1A4OS.jpeg"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'pinia'
import { useCounterStore } from '../stores/counter'
export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
      phoneNumber: '',
      address: ''
    }
  },
  methods: {
    ...mapActions(useCounterStore, ['registerHandler']),
    registerSumbit() {
      const value = {
        username: this.username,
        email: this.email,
        password: this.password,
        phoneNumber: this.phoneNumber,
        address: this.phoneNumber
      }
      this.registerHandler(value)
      this.$router.push('/login')
    }
  }
}
</script>

<style></style>
