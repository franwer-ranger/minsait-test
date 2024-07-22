import React from 'react'
import type { FC } from 'react'
import { Product } from '../types'

interface Props {
  products: Product[];
}

const ProductCardList: FC<Props> = ({products, allProducts, setAllProducts}) => {
  const onAddProduct = (product: Product) => {
    setAllProducts([...allProducts, product])
  }
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center gap-4">
      {products.map((product) => (
        <div className="rounded-md shadow overflow-hidden w-40 h-52 flex flex-col" key={product.id}>
          <img src={product.image_url} alt={product.productName} className="block w-full h-1/3 object-cover"/>
          <div className="flex items-start justify-between gap-2 w-full p-3 text-sm flex-grow">
            <div>
              <h1 className="line-clamp-2">{product.productName}</h1>
              <div className="text-xs line-clamp-2">{product.productDescription}</div>
            </div>
            <div>{product.price}€</div>
          </div>
          <div className="w-full p-2 flex justify-center">
            <button 
              className="rounded px-2 py-1 border border-gray-300 text-xs hover:bg-gray-100" 
              onClick={() => onAddProduct(product)}>
              Add!
            </button>
          </div>
      </div>
      ))}
    </div>
  )
}

export default ProductCardList