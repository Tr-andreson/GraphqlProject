"use client"
import { useFetchProductByIdQuery } from '__generated__/graphql'
import React from 'react'

const ProductPage = ({ params }: { params: { product: string } }) => {
  const [product] = useFetchProductByIdQuery({
    variables: { getSingleProductByIdId: params.product }
  })

  const { data, fetching } = product

  if (fetching) return (
    <div>Fetching .........</div>
  )


  return (
    <div>
      <h4 className='text-sm font-bold'>
        {data?.getSingleProductById.sku}
      </h4>
      {data?.getSingleProductById.name}
      <img loading='eager' src={data?.getSingleProductById.imageUrl} />
    </div>
  )
}

export default ProductPage
