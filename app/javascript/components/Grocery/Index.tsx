import React from 'react'
import type { FC } from 'react'
import { Product } from '../types'
import ProductCardList from './ProductCardList'

interface Props {
  products: Product[];
}

const Index: FC<Props> = ({products}) => {
  return (
    <div className="container mx-auto">
      <ProductCardList products={products}/>
    </div>
  )
}

export default Index