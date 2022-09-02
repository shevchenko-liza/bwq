import classes from './styles.module.scss'
import clsx from 'clsx'
export const BasketFooter=()=>{
    return(
 <span>

 <div className={classes.list}>
 <span className={classes.c}>Стоимость заказа</span>
 <span className={classes.deliveryPrice}>Доставка</span>
 <span className={classes.bonuses}>Бонусы</span>
 <span className={classes.totalPayable}>Итого к оплате</span>
   </div>
   <button type="submit" className={clsx(classes.buttonSubmit, classes.order)}s>Оформить заказ</button>
   </span>
    )
}