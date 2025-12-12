import { defineStore } from 'pinia'
import { ref, shallowRef } from 'vue'
import type { Bias } from '@/type/Bias'

import { getApiResponse } from '../scripts/services'

const getRandomIndex = (data: Bias[]): number => {
  const randomIndex = Math.floor(Math.random() * data.length)
  return randomIndex
}

export const useBiasStore = defineStore('bias', () => {
  const biases = shallowRef<Bias[]>([])
  const loading = ref<boolean>(false)
  const randomBias = ref<Bias | null | undefined>(undefined)

  const fetchBias = async () => {
    try {
      loading.value = true
      const response = await getApiResponse()
      if (response) {
        biases.value = response.list_biases
      }
    } catch (error) {
      console.log(error)
    } finally {
      loading.value = false
    }
  }
  const selectRandomBias = () => {
    if (biases.value.length > 0) {
      randomBias.value = biases.value[getRandomIndex(biases.value)]
    }
  }

  return { fetchBias, biases, loading, selectRandomBias, randomBias }
})
