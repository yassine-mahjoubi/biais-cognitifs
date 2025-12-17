const URL_API = import.meta.env.VITE_API_URL_FR
import type { BiasListAndCategories, Bias, Category } from '../type/Bias'

/**
 * Récupère la liste des biais cognitifs et leurs catégories depuis l'API
 * @returns Objet contenant list_biases et categories_biases, ou null en cas d'erreur
 */

export const getApiResponse = async (): Promise<BiasListAndCategories | null> => {
  try {
    const response = await fetch(URL_API)
    const result = await response.json()
    const list_biases: Bias[] = result.biases
    const categories_biases: Category[] = result.categories
    return { list_biases, categories_biases }
  } catch (error) {
    console.error('fetch url api failed', error)
    return null
  }
}
