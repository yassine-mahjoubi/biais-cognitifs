import { defineStore } from 'pinia'
import { computed, ref, shallowRef, watch } from 'vue'
import type { Bias, Category, Filter, Language } from '@/type/Bias'
import { getApiResponse } from '../services/services'
import i18n from '@/plugins/i18'

const newLocale = ref<Language>(i18n.global.locale.value)
const URL_API_FR = import.meta.env.VITE_API_URL_FR
const URL_API_EN = import.meta.env.VITE_API_URL_EN
const URL_API = ref<string>(URL_API_FR)
const randomBiasId = ref<string | undefined>(undefined)

/**
 * Génère un index aléatoire pour accéder au tableau de biais
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

  const typesSort = ref<Filter>('order')
  const biasToFind = ref<string>('')
  const resetSearchInput = ref<boolean>(false)

  /**
   * Cache des biais par langue pour éviter de refaire des appels API
   * Structure : { fr: Bias[], en: Bias[] }
   * Si un tableau contient des données (length > 0), la langue est déjà en cache
   */
  const biasesCached = shallowRef<{ fr: Bias[]; en: Bias[] }>({
    fr: [],
    en: [],
  })

  /**
   * Retourne l'URL de l'API selon la langue actuelle
   * @returns URL_API_FR ou URL_API_EN selon newLocale.value
   */
  const getUrlApiByLocale = () => {
    if (newLocale.value === 'fr') {
      URL_API.value = URL_API_FR
    } else if (newLocale.value === 'en') {
      URL_API.value = URL_API_EN
    }
    return URL_API.value
  }

  /**
   * Récupère les biais depuis l'API avec gestion de cache
   *
   * Logique du cache :
   * 1. Vérifie si les données de la langue actuelle sont en cache (length > 0)
   * 2. Si oui : return immédiat (pas de fetch)
   * 3. Si non : fetch l'API et stocke dans biasesCached[newLocale.value]
   *
   * @returns Promise<void>
   */
  const fetchBias = async () => {
    // Vérifie si les données sont déjà en cache pour la langue actuelle
    if (biasesCached.value[newLocale.value].length > 0) {
      return
    }
    const url = getUrlApiByLocale()

    try {
      loading.value = true
      const response = await getApiResponse(url)

      if (response && response.list_biases.length > 0) {
        biases.value = response.list_biases
        categories.value = response.categories_biases
        // Stocke les données dans le cache pour la langue actuelle
        biasesCached.value[newLocale.value] = biases.value
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
  const selectedBiasID = () => {
    if (biases.value.length > 0) {
      const selectedBias = biases.value[getRandomIndex(biases.value)]
      randomBiasId.value = selectedBias?.id
    }
  }

  /**
   * Retourne le biais actuellement sélectionné
   * @returns Le biais correspondant à randomBiasId
   */
  const currentSelectedBias = computed(() => {
    return biases.value.find((biais) => biais.id === randomBiasId.value)
  })

  /**
   * Cherche un biais par slug
   * @param slug Identifiant unique du biais
   * @returns Les données du biais trouvé ou undefined
   */
  const getBiasBySlug = (slug: string) => {
    return biases.value.find((bias) => slug === bias.slug)
  }

  /**
   * Filtre les biais par catégorie
   * @param category ID de la catégorie
   * @returns Tableau de biais filtré par category_id
   */
  const filtredByCategory = (category: string) => {
    const filteredBiases = biases.value.filter((bias) => category === bias.category_id)
    return filteredBiases
  }

  /**
   * Met à jour le terme de recherche
   * @param term Terme recherché par l'utilisateur
   */
  const updateSearchBias = (term: string) => {
    biasToFind.value = term
  }

  /**
   * Réinitialise la recherche
   */
  const resetSearch = () => {
    biasToFind.value = ''
  }

  /**
   * Calcule les biais filtrés et triés selon les critères actuels
   * @returns Tableau de biais filtré par recherche et trié par nom ou catégorie
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
   * Gère le changement de langue
   * 1. Appelle fetchBias() qui charge uniquement si pas en cache
   * 2. Récupère les données depuis biasesCached pour la nouvelle langue
   * 3. Met à jour biases.value avec les données de la langue actuelle
   */
  watch(newLocale, async () => {
    i18n.global.locale.value = newLocale.value
    await fetchBias()
    biases.value = biasesCached.value[newLocale.value]
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
