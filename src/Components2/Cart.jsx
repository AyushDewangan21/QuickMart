import React, { useEffect, useState } from 'react'
import './Cart.css'
const Cart = ( {cartinc} ) => {

const [count, setCounter] = useState(9);

useEffect(() => {
  
  if(cartinc==1){
    setCounter(count=>count+1)
  }
  return () => {
    
  };
}, []);

  return (
    <div>
          <div id='header'>
            <div id='line1'></div>
            <div id='cont1'>  {}<div id='logo'></div> {}<div id='qm'>QuickMart</div>{} <div id='inputdiv'><input id='input' type="text" placeholder='Seach products ...' /></div>                  <a id='cart' href="/cart" ><div id='cartcount'>{count}</div></a>                      <div id='account'></div></div>
            <div id='line2'></div>                                                                                                                                                               
          </div>

          {/* NAvigation bar */}
          <div id='navbar'>
          <div id='cont2'><a href="/">Laptop</a></div>
            <div id='cont3'><a href="/handset">Handset</a></div>
            <div id='cont4'><a href="/earpod">Earpod</a></div>
            <div id='cont5'><a href="/led">LED Tv </a></div>
            <div id='cont6'><a href="/other">Others</a></div>
          </div>

          <div id='belowCart'>

          </div>
    </div>
  )
}

export default Cart