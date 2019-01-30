import { client } from './client';
const USER_ENDPOINT = 'users'


export const fetchUsersFromApi = async () => {
    const {data} = await client.get(USER_ENDPOINT)
    return data
}
export const fetchUsersByIdFromApi = async (id) => {
    const {data} = await client.get(`${WOMEN_ENDPOINT}/${id}`)
    return data
}