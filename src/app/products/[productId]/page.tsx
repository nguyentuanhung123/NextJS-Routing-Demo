import React from 'react'

const ProductDetails = ( { params }: {
    params: { productId: string }
} ) => {
    return (
        <div>Details about product {params.productId}</div>
    )
}

export default ProductDetails