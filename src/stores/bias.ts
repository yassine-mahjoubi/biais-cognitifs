import { defineStore } from 'pinia'
import { computed, ref, shallowRef, watch } from 'vue'
import type { Bias, Category, Filter } from '@/type/Bias'
import { getApiResponse } from '../services/services'
import i18n from '@/plugins/i18'

const newLocale = ref<string>(i18n.global.locale.value)
const URL_API_FR = import.meta.env.VITE_API_URL_FR
const URL_API_EN = import.meta.env.VITE_API_URL_EN
const URL_API = ref<string>(URL_API_FR)

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
  const categories = shallowRef<Category[]>([])
  const loading = ref<boolean>(false)
  //const randomBias = ref<Bias | null | undefined>(undefined)

  const typesSort = ref<Filter>('order')
  const biasToFind = ref<string>('')
  const resetSearchInput = ref<boolean>(false)

  /**
   * récupère le tableau de biais avec gestion de cache
   * @returns tableau de biais
   */
  const fetchBias = async () => {
    //data already loaded
    // if (dataLoadedFR.value && dataLoadedEN.value) {
    //   return
    // }
    if (newLocale.value === 'fr') {
      URL_API.value = URL_API_FR
    } else if (newLocale.value === 'en') {
      URL_API.value = URL_API_EN
    }
    try {
      loading.value = true
      const response = await getApiResponse(URL_API.value)

      if (response && response.list_biases.length > 0) {
        biases.value = response.list_biases
        categories.value = response.categories_biases
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
  const randomBiasId = ref<string | undefined>(undefined)

  const selectedBiasID = () => {
    if (biases.value.length > 0) {
      const selectedBias = biases.value[getRandomIndex(biases.value)]
      randomBiasId.value = selectedBias?.id
    }
  }

  /**
   * find biais
   * @param id
   * @returns biais traduit
   */
  const currentSelectedBias = computed(() => {
    return biases.value.find((biais) => biais.id === randomBiasId.value)
  })

  /**
   * cherche un biais par slug
   * @param slug
   * @returns les data d'un biais trouvé
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

  const updateSearchBias = (term: string) => {
    biasToFind.value = term
  }

  const resetSearch = () => {
    biasToFind.value = ''
  }

  /**
   *
   * @param data
   * @returns
   */
  const filteredAndSortedBiases = computed(() => {
    let biasesToDisplay = [...biases.value]

    if (biasToFind.value) {
      biasesToDisplay = biasesToDisplay.filter((bias) => {
        return bias.name.toLocaleLowerCase().includes(biasToFind.value.toLocaleLowerCase())
      })
    }

    if (typesSort.value === 'category') {
      return biasesToDisplay.sort((a, b) => a.category_name.localeCompare(b.category_name))
    }

    return biasesToDisplay.sort((a, b) => a.name.localeCompare(b.name))
  })

  /**
   * handle language and refetch data
   */
  watch(newLocale, async () => {
    await fetchBias()
  })

  return {
    fetchBias,
    biases,
    categories,
    loading,
    selectedBiasID,
    getBiasBySlug,
    filtredByCategory,
    typesSort,
    biasToFind,
    updateSearchBias,
    filteredAndSortedBiases,
    resetSearch,
    resetSearchInput,
    newLocale,
    currentSelectedBias,
  }
})
