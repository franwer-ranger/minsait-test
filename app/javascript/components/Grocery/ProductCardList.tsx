import React from 'react'
import type { FC } from 'react'
import ProductCard from './ProductCard'
import { Product } from '../types'

interface Props {
  products: Product[];
}

const ProductCardList: FC<Props> = ({products}) => {
  return (
    <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-items-center gap-4 p-4">
      {products.map((product) => (
        <ProductCard 
          key={product.id} 
          id={product.id} 
          productName={product.productName}
          image_url={product.image_url}
          stock={product.stock}
          price={product.price}
          productDescription={product.productDescription}
          favorite={product.favorite}
        />
      ))}
    </div>
  )
}

export default ProductCardList