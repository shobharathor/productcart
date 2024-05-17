import React from 'react'
import Products from '../product.js'
import ProductRow from './ProductRow.js'

const Left = ( {dispatch,state} ) => {
  return (
    <div id="left">
        <h1>Products</h1>
        <table>
            <tbody>

            {
                Products.map((product) => {
                    return <ProductRow product={product.name} price={product.price} dispatch={dispatch} state={state} id={product.id} key={product.id}/>
                })
            }

            </tbody>
        </table>
    </div>
  )
}

export default Left;