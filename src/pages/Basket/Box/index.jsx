import classes from './styles.module.scss'
import icon2 from '../Box/photo/phon1.jpg'
import icon3 from '../Box/photo/box.png'
export const Box=()=>{
    return(
        <div>
        
        <span >
        <img  src={icon2} alt="" className={classes.GreenPhon}  />
        
     </span>
     <span>
     
        <img  src={icon3} alt="" className={classes.box}  />
        <div className={classes.boxText}> Доступно 2568 бонусных баллов </div>
        </span>
        </div>
    )
}