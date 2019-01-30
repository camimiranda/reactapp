import { client } from './client';
const PRODUCT_ENDPOINT = 'products'

//fetches all the products
export const fetchProductsFromApi = async () => {
    const {data} = await client.get(PRODUCT_ENDPOINT)
    return data
}

//fetches product by id 
export const fetchProductFromApi = async (id) => {
    const {data} = await client.get(`${PRODUCT_ENDPOINT}/${id}`)
    return data
}