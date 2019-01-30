import { client } from './client'
const CATEGORIES_BASE_ENDPOINT = 'product_categories/'

export const fetchCategoriesFromApi = async () => {
    const {data} = await client.get(CATEGORIES_BASE_ENDPOINT)
    return data
}