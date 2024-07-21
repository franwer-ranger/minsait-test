import React from 'react'
import type { FC } from 'react'

interface Props {
  id: string,
  image_url: string,
  stock: number,
  productName: string,
  price: 43,
  productDescription: string,
  favorite: string
}

const ProductCard: FC<Props> = ({id, image_url, stock, productName, price, productDescription, favorite}) => {
  return (
    <div className="rounded-md shadow overflow-hidden w-50 h-56 flex flex-col">
      <img src={image_url} alt={productName} className="block w-full h-1/3 object-cover"/>
      <div className="flex items-start justify-between gap-2 w-full p-3 text-sm flex-grow">
        <div>
          <h1>{productName}</h1>
          <div className="text-xs line-clamp-2">{productDescription}</div>
        </div>
        <div>{price}€</div>
      </div>
      <div className="w-full p-2 flex justify-center">
        <button 
          className="rounded px-2 py-1 border border-gray-300 text-xs hover:bg-gray-100" 
          onClick={() => {
            console.log(`Added ${productName} to cart!`)
          }}>
          Add!
        </button>
      </div>
    </div>
  )
}

export default ProductCard