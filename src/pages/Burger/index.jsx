import { useParams } from "react-router-dom"
import { BURGERS } from "../../components/Burgers/constants"

import { useCallback, useState } from 'react'
import clsx from 'clsx'
import classes from '../../pages/Burger/styles.module.scss'

export const BurgerPage = () => {
    const {id} = useParams()

   const burger = BURGERS.find(burger => burger.id === parseInt(id))
   console.log(burger)
    return (
        <div>
        <div className={classes.burger}>{burger.burger}
                <img className={classes.photo} src={burger.burger_photo} alt="" />
           
           <div className={classes.name}>{burger.name}</div> 
           
           <span className={classes.weight}>{burger.weight} </span> 
           <div className={classes.text}>{burger.text}</div>
<span className={classes.price}> {burger.price}</span>


<Order id={id} />
<ul className={classes.compaunds}>Состав: {burger.compounds.join('-')}
    
</ul>
</div>
        </div>
        
    
    )
}
export const Order = ({id}) => {
    const [amount, setAmount] = useState(0);
    const decrease= useCallback(()=>setAmount((amount) => amount-1) ,[]);
    const increase= useCallback(()=>setAmount((amount) => amount+1) ,[])
  
    const handleChange = useCallback(event => {
      setAmount(event.target.value)
    }, [])
  
    const handleSubmit = useCallback(event => {
      event.preventDefault()
  
      console.log({amount,id })
    }, [amount,id])
  
  
  
    return (
        <div>
    
      <form className={classes.form} onSubmit={handleSubmit}>
     
        <div className={classes.inputBox}>
          <button type="button" onClick={decrease} className={clsx(classes.button, classes.decrease)} value="-">-</button>
          <input type="text" size="3"    className={classes.input} value={amount} onChange={handleChange} />
          <button type="button" onClick={increase} className={clsx(classes.button, classes.increase)} value="+">+</button>
        </div>
        <button type="submit" className={clsx(classes.button, classes.order)}>Заказать</button>
        
        </form>
        
        </div>
     
        
           
      
    )
  }