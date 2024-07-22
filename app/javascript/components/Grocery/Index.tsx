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
  const [active, setActive] = useState(false)

  return (
    <>
      <div className="relative h-svh overflow-y-scroll md:grid md:grid-cols-4 w-full">
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
        <div className="w-full flex-none hidden md:block p-4">
          <Cart
            allProducts={allProducts}
            setAllProducts={setAllProducts}
            total={total}
            setTotal={setTotal}
            count={count}
            setCount={setCount}
          />
        </div>
        <button 
          className="fixed md:hidden h-14 w-14 rounded-full bg-black text-white bottom-5 right-5 flex items-center justify-center"
          onClick={() => setActive(!active)}      
        >
          <span className="absolute top-0 right-0 bg-red-500 text-xs text-white rounded-full h-5 w-5 flex items-center justify-center">
            {allProducts.length}
          </span>
          <span className="material-symbols-outlined">
            shopping_cart
          </span>
        </button>
        <div className={`fixed top-0 right-0 flex items-center justify-center bg-white z-10 h-svh w-full ${active ? '' : 'hidden'}`}>
          <button 
            className="absolute top-5 right-5 h-14 w-14 rounded-full bg-black text-white flex items-center justify-center"
            onClick={() => setActive(false)}
          >
            <span className="material-symbols-outlined">
              close
            </span>
          </button>
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
    </>
  )
}

export default Index