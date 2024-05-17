import React from 'react'
import Products from '../product'

const ProductRow = ({product,price,id,dispatch,state}) => {
  return (
    <tr>
        <td>{product}</td>
        <td>{price}</td>
        <td>
            <div class="btn-counter">
                <button class="remove" onClick={()=>dispatch({type:"SUBTRACT",payload:1,id:id})}>-</button>
                <span>
                  {
                    Products.filter((product) => {
                      return product.id === id
                    })[0].count
                  }
                </span>
                <button class="add" onClick={()=>dispatch({type:"ADD",payload:1,id:id})}>+</button>
            </div>
        </td>
    </tr>
  )
}

export default ProductRow;