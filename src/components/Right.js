import React, { useEffect, useState } from 'react'

const Right = ( { state } ) => {

  const [total,setTotal] = useState(0);

  const filteredArr = state.filter((product)=>{
    return product.count > 0;
  })

  const newTotal = filteredArr.reduce((acc,currProd) => {
    const cost = currProd.price * currProd.count
    return acc + cost
  },0)

  useEffect(()=> {
    setTotal(newTotal);
  },[newTotal])

  return (
    <div id="right">
        <h1>Cart</h1>
        {
            !filteredArr.length ? <h3>No product added to the cart</h3> : ""
        }
        <table>
            <tbody>
                
                {
                    filteredArr.map((product) => { 
                        return (
                            <tr>
                                <td>{product.name}</td>
                                <td>{product.count} x {product.price}</td>
                            </tr>
                        )
                    })
                }

            </tbody>
        </table>
        <div id="total">
            <h2>Total : <span>{total}</span></h2>
        </div>
    </div>
  )
}

export default Right;