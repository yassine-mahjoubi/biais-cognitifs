const url: string = '../../back/json/biases_cognitif_v3.json'
import type { BiasListAndCategories, Bias, Category } from '../type/Bias'
export const getApiResponse = async (): Promise<BiasListAndCategories | null> => {
  try {
    const response = await fetch(url)
    const result = await response.json()
    const list_biases: Bias[] = result.biases
    const categories_biases: Category[] = result.categories
    console.log('list_biases.biases: ', list_biases)
    console.log('biases_categories: ', categories_biases)
    return { list_biases, categories_biases }
  } catch (error) {
    console.log(error)
    return null
  }
}
