import { defineStore } from 'pinia'
import { ref, shallowRef } from 'vue'
import type { Bias } from '@/type/Bias'
import { getApiResponse } from '../services/services'

/**
 * Génère un index aléatoire  pour accéder au tableau de biais
 * @param data Tableau de biais
 * @returns Index aléatoire entre 0 et data.length
 */
const getRandomIndex = (data: Bias[]): number => {
  const randomIndex = Math.floor(Math.random() * data.length)
  return randomIndex
}

export const useBiasStore = defineStore('bias', () => {
  const biases = shallowRef<Bias[]>([])
  const loading = ref<boolean>(false)
  const randomBias = ref<Bias | null | undefined>(undefined)
  const dataLoaded = ref<boolean>(false)

  /**
   * récupère le tableau de biais avec gestion de cache
   * @returns tableau de biais
   */
  const fetchBias = async () => {
    //data already loaded
    if (dataLoaded.value) {
      return
    }
    try {
      loading.value = true
      const response = await getApiResponse()
      if (response && response.list_biases.length > 0) {
        biases.value = response.list_biases
        dataLoaded.value = true
      }
    } catch (error) {
      console.error('fetch api failed', error)
    } finally {
      loading.value = false
    }
  }

  /**
   * Sélectionne un biais de manière aléatoire parmi la liste chargée
   */
  const selectRandomBias = () => {
    if (biases.value.length > 0) {
      randomBias.value = biases.value[getRandomIndex(biases.value)]
    }
  }

  /**
   * cherche un biais
   * @param slug
   * @returns les dats d'un biais troiuvé
   */
  const getBiasBySlug = (slug: string) => {
    return biases.value.find((bias) => slug === bias.slug)
  }

  return { fetchBias, biases, loading, selectRandomBias, randomBias, getBiasBySlug }
})
