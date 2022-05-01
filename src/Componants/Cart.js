import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import './Cart.css'

const Cart = (props) => {
    const {cart}=useSelector( (state) => state.cart ||{})
     return (
        <div>
        <p>You have ordered:</p>
        <div>
        {
           console.log(cart)
        }
        </div>
        </div>
        
    )
}
export default Cart;