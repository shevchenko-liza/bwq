import classes from './styles.module.scss'
import icon1 from'../FreeDelivery/photo/delivery-truck.jpg'
import icon2 from '../FreeDelivery/photo/phon1.jpg'
export const FreeDelivery=()=>{
    return(
        <div>
        <span >
        <img  src={icon2} alt="" className={classes.greenPhon}  />
        </span>
        <span>
        <img  src={icon1} alt="" className={classes.iconDelivery}  />
        <div className={classes.deliveryText}> Закажи ещё на 123 грн и получи бесплатную доставку! </div>
        </span>
        </div>
    )
}