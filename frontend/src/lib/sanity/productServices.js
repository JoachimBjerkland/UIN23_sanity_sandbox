import {client} from './client'

//Service for å hente alle produkter
export const fetchAllProducts = async () => {
    const data = await client.fetch(`*[_type == "products"]`)
    return data
}

//Service for å hende et bestemp produkt, basert på slug
export const fetchProduct = async () => {
    const data = await client.fetch(`
    *[_type == "products" && slug.current == $slug]{product_title, price, quantity, "imageURL":product_image.asset}
    ` ,{slug})
    return data
}