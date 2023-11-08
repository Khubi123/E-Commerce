import React, {useContext} from 'react'
import { ShopContext } from "../../context/Shop-context";

const Cartitem2 = (props) => {
    const {cartItems, addToCart, removeFromCart, updateCartItemCount}=useContext(ShopContext)
    const { id, productName, price, productImage } = props.data;
  return (
    <div className='cartItem'>
      <img src={productImage} alt="" />
      <div className="description">
        <p><b>{productName}</b></p>
        <span>${price}</span>
        <div className="countHandler">
            <button onClick={()=>removeFromCart(id)} className='btn btn-2'>-</button>
            <input value={cartItems[id]} className='int' onChange={(e)=>updateCartItemCount(Number(e.target.value), id)}/>
            <button onClick={()=>addToCart(id)} className='btn '>+</button>
        </div>
      </div>
    </div>
  )
}

export default Cartitem2
