import path from '../../pages/Basket/photo/path.png'
import classes from '../../pages/Basket/styles.module.scss'
import React,{useState} from 'react'


import {BasketHeader} from '../../pages/Basket/BasketHeader'
import {BasketFooter} from '../../pages/Basket/BasketFooter'
import {FreeDelivery} from '../../pages/Basket/FreeDelivery'
import {Box} from '../../pages/Basket/Box'
import {Delivery} from '../../pages/Basket/Delivery'
export const Basket = () => {
    
    let [ cartOpen,setCartOpen ] = useState(false)
    return (
     <div>
        <img  src={path} alt="" onClick={()=>setCartOpen(cartOpen = !cartOpen)} className={classes.path}  />
   {cartOpen && (
          <div className={classes.shop}> 
          <div className={classes.basket}>Корзина</div>
         <BasketHeader/>
         <FreeDelivery/>
        <Delivery/>

         <Box/>
          <BasketFooter/>
            </div>
            
        )}
        
  </div>
    )
  }
  