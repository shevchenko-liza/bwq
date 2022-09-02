import { useCallback, useState } from 'react'
import clsx from 'clsx'
import { Link , generatePath} from 'react-router-dom'


import classes from '../styles.module.scss'




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
    <form className={classes.form} onSubmit={handleSubmit}>
      <div className={classes.inputBox}>
        <button type="button" onClick={decrease} className={clsx(classes.button, classes.decrease)} value="-">-</button>
        <input type="text" size="3"    className={classes.input} value={amount} onChange={handleChange} />
        <button type="button" onClick={increase} className={clsx(classes.button, classes.increase)} value="+">+</button>
      </div>
      <button type="submit" className={clsx(classes.button, classes.order)}>Заказать</button>
    </form>
  )
}

export const Item = ({ name, compound, weight, photo,id }) => (
  
  <div className={classes.item}>
    <div className={classes.photoBox}>
      <img className={classes.photo} src={photo} alt="" />
    </div>
    <div className={classes.infoBox}>
    <Link to={generatePath ("/burgers/:id", { id })} className={classes.name}>{name} </Link>
      <p className={classes.compound}>Состав: {compound.join(', ')}</p>
      <span className={classes.weight}>{weight}</span>


      <Order id={id} />
 
    </div>
  </div>
)