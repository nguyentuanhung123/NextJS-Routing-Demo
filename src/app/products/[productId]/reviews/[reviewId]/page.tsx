import { notFound } from 'next/navigation';
import React from 'react'

const ReviewDetail = ({ params }: {
    params: {
        productId: string;
        reviewId: string;
    }
}) => {
    if(parseInt(params.reviewId) > 100) {
        notFound()
    }
    return (
        <h1>
            Review {params.reviewId} for product {params.productId}
        </h1>
    )
}

export default ReviewDetail