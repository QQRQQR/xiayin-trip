import { defineStore } from 'pinia'
import { getCityAll } from '@/service'

const useCityStore = defineStore('city', {
  state: () => ({
    allCities: {},
    currentCity: {
      cityName: '宁波'
    }
  }),
  actions: {
    async fetchAllCitiesData() {
      const res = await getCityAll()
      this.allCities = res.data
    }
  }
})

export default useCityStore
