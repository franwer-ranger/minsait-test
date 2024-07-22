import React, { useState } from 'react'
import type { FC } from 'react'
import { Product } from '../types'
import Cart from './Cart'
import ProductCardList from './ProductCardList'

interface Props {
  products: Product[];
}

const Index: FC<Props> = ({products}) => {
  const [allProducts, setAllProducts] = useState([])
  const [total, setTotal] = useState(0)
  const [count, setCount] = useState(0)
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-4 w-full">
        <div className="col-span-3 p-4">
          <ProductCardList 
            products={products}
            allProducts={allProducts}
            setAllProducts={setAllProducts}
            total={total}
            setTotal={setTotal}
            count={count}
            setCount={setCount}
          />
        </div>
        <div className="w-96 flex-none hidden sm:block p-4">
          <Cart
            allProducts={allProducts}
            setAllProducts={setAllProducts}
            total={total}
            setTotal={setTotal}
            count={count}
            setCount={setCount}
          />
        </div>
      </div>
    </div>
  )
}

export default Index