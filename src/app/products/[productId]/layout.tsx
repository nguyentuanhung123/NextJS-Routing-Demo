import React from 'react'

const ProductDetailsLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <>
           {children}
           <h2>Features products</h2>
           {/* Carousel here */}
        </>
    )
}

export default ProductDetailsLayout