<template>
  <div class="max-w-2xl mx-auto">
    <nav aria-label="Page navigation example">
      <ul class="inline-flex -space-x-px">
        <li>
          <a
            @click.prevent="handlePage(+currentPage - 1)"
            class="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 ml-0 rounded-l-lg leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >Previous</a
          >
        </li>
        <li v-for="page in +totalPage" :key="page">
          <a
            @click.prevent="handlePage(page)"
            class="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            {{ page }}</a
          >
        </li>

        <li>
          <a
            @click.prevent="handlePage(+currentPage + 1)"
            class="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 rounded-r-lg leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >Next</a
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { useCounterStore } from '../stores/counter'

export default {
  computed: {
    ...mapState(useCounterStore, ['totalPage', 'currentPage'])
  },

  methods: {
    ...mapActions(useCounterStore, ['fetchCuisines']),
    handlePage(id) {
      const query = { ...this.$route.query, page: id }
      this.fetchCuisines(query)
    }
  }
}
</script>

<style></style>
