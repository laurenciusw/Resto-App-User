<template>
  <main class="min-h-screen w-full bg-gray-100 text-gray-700">
    <!-- header page -->
    <header
      class="flex w-full items-center justify-between border-b-2 border-gray-200 bg-white p-2"
    >
      <!-- logo -->
      <div class="flex items-center space-x-2">
        <button type="button" class="text-3xl" @click="asideOpen = !asideOpen">
          <i class="bx bx-menu"></i>
        </button>
        <div>Logo</div>
      </div>
      <div>
        <button
          type="button"
          @click="profileOpen = !profileOpen"
          class="h-9 w-9 overflow-hidden rounded-full"
        >
          <img src="https://plchldr.co/i/40x40?bg=111111" alt="plchldr.co" />
        </button>
      </div>
    </header>
    <!-- aside -->
    <div class="flex">
      <aside
        class="flex w-72 flex-col space-y-2 border-r-2 border-gray-200 bg-white p-2"
        style="height: 90.5vh"
        :class="{ hidden: !asideOpen }"
      >
        <a
          @click.prevent="handleFavorite"
          class="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600"
        >
          <span class="text-2xl"><i class="bx bx-heart"></i></span>
          <span>My Favourite</span>
        </a>
        <div>
          <form class="mt-4" @submit.prevent="handleSearch">
            <div class="mb-3">
              <label class="mb-2 block text-xs font-semibold">search</label>
              <input
                type="text"
                v-model="search"
                placeholder="search"
                class="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
              />
            </div>
          </form>
        </div>
        <a
          @click.prevent="handleLogin"
          class="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600"
        >
          <span class="text-2xl"><i class="bx bx-user"></i></span>
          <span>login</span>
        </a>
        <a
          @click.prevent="logoutHandler"
          href="#"
          class="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600"
        >
          <span class="text-2xl"><i class="bx bx-user"></i></span>
          <span>logout</span>
        </a>
      </aside>

      <!-- card -->
      <div
        class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5"
      >
        <card v-for="cuisine in cuisines" :key="cuisine.id" :cuisine="cuisine" />
      </div>
    </div>
    <div>
      <paginationButton />
    </div>
  </main>
</template>

<script>
import card from '../components/card.vue'
import { mapActions, mapState } from 'pinia'
import { useCounterStore } from '../stores/counter'
import paginationButton from '../components/paginationButton.vue'

export default {
  components: {
    card,
    paginationButton
  },
  computed: {
    ...mapState(useCounterStore, ['cuisines'])
  },
  data() {
    return {
      asideOpen: true,
      search: '',
      page: 1
    }
  },
  methods: {
    //fetch cuisine
    ...mapActions(useCounterStore, ['fetchCuisines']),

    //logout button
    logoutHandler() {
      localStorage.clear()
      this.fetchCuisines({}), this.$router.push('/')
    },
    // category filter
    handleCateogry(id) {
      const query = { ...this.$route.query, cat }
    },

    handleLogin() {
      this.$router.push('/login')
    },

    handleFavorite() {
      this.$router.push('/bookmark')
    },
    handleSearch() {
      const query = { filter: this.search, page: this.page }
      this.fetchCuisines(query)
    }
  },
  created() {
    this.fetchCuisines({})
  }
}
</script>
