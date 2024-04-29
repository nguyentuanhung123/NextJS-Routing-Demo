import { Metadata } from "next"

export const generateMetadata = ({ params }: Props): Metadata => {
    return {
        title: `Product ${params.productId}`
    }
}

type Props = {
    params: { 
        productId: string 
    }
}

const ProductDetails = ( { params }: Props ) => {
    return (
        <h1>Details about product {params.productId}</h1>
    )
}

export default ProductDetails