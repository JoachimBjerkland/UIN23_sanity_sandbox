export default {
    name: 'products',
    type: 'document',
    title: 'Produkter',
    fields: [
        {
            name: 'product_title',
            type: 'string',
            title: 'Produktnavn',
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'URL-tittel',
            options: {
                source: 'product_title',
                slugify: input => input.toLowerCase().replace((/\s+/g, /[^\w+/]/g), '-').slice(0,150)
            }
        },
        {
            name: 'price',
            type: 'number',
            title: 'Pris'
        },
        {
            name: 'quantity',
            type: 'number',
            title: 'Lagerstatus'
        },
        {
            name: 'product_image',
            type: 'image',
            title: 'Bilde'
        },
        {
            name: 'category',
            title: 'kategori',
            type: 'reference',
            to: [{type: 'categories'}]
        }
    ]
}