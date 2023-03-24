import {createClient} from '@sanity/client'

export const client = createClient({
    projectId: 'agkqi49r',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2021-10-21'
})