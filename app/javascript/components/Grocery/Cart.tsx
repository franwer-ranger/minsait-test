import React from 'react'
import type { FC } from 'react'
import { Product } from '../types'

interface Props {
  allProducts: Product[];
}

const Cart: FC<Props> = ({allProducts, setAllProducts}) => {
  const addOneProduct = (product: Product) => {
    setAllProducts([...allProducts, product])
  }

  const removeOneProduct = (product: Product) => {
    const index = allProducts.findIndex((p) => p.id === product.id)
    if (index === -1) {
      return
    }
    const newProducts = [...allProducts]
    newProducts.splice(index, 1)
    setAllProducts(newProducts)
  }

  const productsById = allProducts.reduce((acc, product) => {
    if (!acc[product.id]) {
      acc[product.id] = 0
    }
    acc[product.id] += 1
    return acc
  }, {})
  
  const uniqProducts = allProducts.filter((value, index, array) => array.indexOf(value) === index)

  return (
    <div className="rounded-md shadow p-4">
      <h1 className="cart__title">Cart</h1>
      <div className="flex flex-col gap-2 mt-4">
        {allProducts.length === 0 ? (
          <div className="text-sm text-gray-500">No products in cart</div>
          ) : (
            uniqProducts.map((product) => (
              <div key={product.id} className="flex justify-between items-start">
                <img src={product.image_url} alt={product.productName} className="cart__logo"/>
                <div className="flex flex-col items-center justify-center">
                  <div>{product.productName}</div>
                  <div className="flex items-center justify-center gap-2">
                    {/* quiero un boton de quitar de uno en uno y de añadir más de uno en uno a cada lado */}
                    <button onClick={() => removeOneProduct(product)}>-</button>
                    {productsById[product.id]}
                    <button onClick={() => addOneProduct(product)}>+</button>
                  </div>
                </div>
                <div>{product.price}€</div>
              </div>
            ))
          )
        }
        <div className="flex justify-between mt-4">
          <div>Total:</div>
          <div>{allProducts.reduce((acc, product) => acc + product.price, 0)}€</div>
        </div>
      </div>
    </div>
  ) 
}

export default Cart