import { defineStore } from 'pinia'
import { computed, ref, shallowRef } from 'vue'
import type { Bias, Category, Typesort } from '@/type/Bias'
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

//type Typesort = 'order' | 'category' | 'date'

export const useBiasStore = defineStore('bias', () => {
  const biases = shallowRef<Bias[]>([])
  const categories = shallowRef<Category[]>([])
  const loading = ref<boolean>(false)
  const randomBias = ref<Bias | null | undefined>(undefined)
  const dataLoaded = ref<boolean>(false)
  const typesSort = ref<Typesort>('order')

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
        categories.value = response.categories_biases
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

  /**
   * filtrer les bias par catégorie
   * @param category
   * @returns teableau de biais filtré par categorie_id
   */
  const filtredByCategory = (category: string) => {
    const filteredBiases = biases.value.filter((bias) => category === bias.category_id)
    return filteredBiases
  }

  /**
   *
   * @param data
   * @returns
   */
  const sortedBiases = computed(() => {
    const newSortedTable = [...biases.value]
    if (typesSort.value === 'category') {
      return newSortedTable.sort((a, b) => a.category_name.localeCompare(b.category_name))
    }

    return newSortedTable.sort((a, b) => a.name.localeCompare(b.name))
  })

  return {
    fetchBias,
    biases,
    categories,
    loading,
    selectRandomBias,
    randomBias,
    getBiasBySlug,
    filtredByCategory,
    sortedBiases,
    typesSort,
  }
})
