<template>
  <div>
    <div class="p-4 dark:bg-black-800 dark:text-gray-100">
      <div class="container flex justify-between h-16 mx-auto">
        <div class="items-center flex-shrink-0 hidden lg:flex">
          <button
            @click.prevent="handleHome"
            class="px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
          >
            home
          </button>
        </div>
        <button class="p-4 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="w-6 h-6 dark:text-gray-100"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </div>
    <div class="grid grid-cols-3">
      <card v-for="data in bookmark" :key="data.id" :cuisine="data.Cuisine" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import card from '../components/card.vue'
import { useCounterStore } from '../stores/counter'

export default {
  components: {
    card
  },
  computed: {
    ...mapState(useCounterStore, ['bookmark'])
  },
  methods: {
    ...mapActions(useCounterStore, ['fetchBookmark']),
    handleHome() {
      this.$router.push('/')
    }
  },
  created() {
    this.fetchBookmark()
  }
}
</script>

<style></style>
