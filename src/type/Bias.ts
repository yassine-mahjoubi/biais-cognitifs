interface Bias {
  id: string
  name: string
  description: string
  category_id: string
  category_name: string
  slug: string
  url: string
}
interface Category {
  id: Filter
  name: string
  description: string
  count: number
}
interface Metadata {
  total_biases: number
  categories_count: number
  source: string
  last_updated: string
  url_base: string
}

interface ApiResponse {
  metadata: Metadata
  categories: Category[]
  biases: Bias[]
}

interface BiasListAndCategories {
  list_biases: Bias[]
  categories_biases: Category[]
}
type StyleView = 'Random' | 'Detail'
type Filter =
  | 'order'
  | 'category'
  | 'date'
  | 'need_for_speed'
  | 'what_to_remember'
  | 'information_overload'
  | 'lack_of_meaning'
type Language = 'fr' | 'en'

export type { BiasListAndCategories, Bias, Category, StyleView, Filter, Language }
