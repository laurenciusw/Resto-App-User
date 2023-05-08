import { defineStore } from 'pinia'
import axios from 'axios'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    baseUrl: 'https://resto-wl-production.up.railway.app',
    cuisines: [],
    bookmark: [],
    currentPage: 1,
    totalPage: '',
    page: '',
    filter: '',
    categorySearch: '',
    cuisine: []
  }),

  actions: {
    async loginHandler(value) {
      try {
        console.log(value, 'darilogin')
        const { data } = await axios({
          url: this.baseUrl + '/pub/login',
          method: 'post',
          data: value
        })
        localStorage.access_token = data.access_token
        this.router.push('/')
      } catch (error) {
        console.log(error)
      }
    },

    async fetchCuisines(query) {
      const { page, filter, categorySearch } = query
      try {
        const { data } = await axios({
          url: this.baseUrl + '/pub/cuisines',
          method: 'get',
          params: {
            page,
            filter,
            categorySearch
          }
        })

        this.cuisines = data.data
        this.totalPage = data.totalPage
        this.currentPage = data.currentPage

        console.log(this.cuisines)
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: error.response.data.message
        })
      }
    },

    async registerHandler(value) {
      try {
        console.log(value)
        await axios({
          url: this.baseUrl + '/pub/register',
          method: 'post',
          data: value
        })
        this.router.push('/')
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: error.response.data.message
        })
      }
    },

    async fetchBookmark() {
      try {
        const { data } = await axios({
          url: this.baseUrl + '/pub/bookmark',
          method: 'get',
          headers: {
            acces_token: localStorage.access_token
          }
        })

        this.bookmark = data
      } catch (error) {
        console.log(error)
      }
    },

    async fetchDetail(value) {
      try {
        console.log(value, 'dari counter')
        const { data } = await axios({
          url: this.baseUrl + '/pub/cuisines/' + value,
          method: 'get'
        })
        console.log(data)
        this.cuisine = data
      } catch (error) {
        console.log(error)
      }
    },

    async addBookmark(id) {
      try {
        const { data } = await axios({
          url: this.baseUrl + '/pub/bookmark/' + id,
          method: 'post',
          headers: {
            acces_token: localStorage.access_token
          }
        })
        await this.fetchBookmark()
      } catch (error) {
        console.log(error)
      }
    },

    async handleGoogle(res) {
      try {
        const google_token = res.credential
        const { data } = await axios({
          method: 'post',
          url: this.baseUrl + '/pub/login-google',
          headers: { google_token }
        })

        localStorage.access_token = data.acces_token
        this.router.push('/')
      } catch (error) {
        console.log(error)
      }
    }
  }
})
