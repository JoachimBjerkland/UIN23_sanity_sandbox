import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchProduct } from '../lib/sanity/productServices'

export default function ProductPage() {

    //bruker useParams for å hente parameter fra URL (produkt-slug)
    const {slug} = useParams()

    //gjøre klart en state for å lagre returnert data fra sanity
    const [product, setProduct] = useState(null)

    //løse opp promise, og få ut data fra Sanity
    const getProduct = async (slug) => {
        const data = await fetchProduct(slug)
        setProduct(data[0])
    }

        //Kjøre getProduct når komponentet lastes
        useEffect(() => {
            getProduct(slug)
        }, [slug])

        //test om vi har fått innhold
        console.log(product)

    return (
        <h1>{product.product_title}</h1>
    )
}