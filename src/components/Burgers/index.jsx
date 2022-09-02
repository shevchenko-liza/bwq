import React from 'react'
import { Item } from './Item'

import classes from './styles.module.scss'
import { BURGERS } from './constants'





 
export const Burgers = () => (
  <div className={classes.burgers}>
    {BURGERS.map((item) => (
      <Item
      key={item.id}
        id={item.id}
        name={item.name}
        compound={item.compound}
        photo={item.photo}
        weight={item.weight}
        
        />
      

    ))}
    
  </div>
  
)

