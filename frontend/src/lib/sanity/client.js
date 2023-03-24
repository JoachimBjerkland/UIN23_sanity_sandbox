import {createClient} from '@sanity/client'

export const client = createClient({
    projectId: 'i5li9yxs',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2021-10-21'
})