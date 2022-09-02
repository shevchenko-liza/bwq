import classes from './styles.module.scss'
export const BasketHeader=()=>{
    return(
      
        <form>
            <div>
        <p className={classes.name}>Имя</p>
        <input placeholder='Введите своё имя' name='userName ' type='text' className={classes.userName}></input>
      </div>

      <div>
        <p className={classes.phone}>Телефон</p>
        <input placeholder='(099) 123 45 67' name='userPhone' type='tel' className={classes.userPhone}></input>
      </div>

      <div>
        <p className={classes.payment}>Способ оплаты</p>
        <select name="payment" className={classes.options} >
<option>Наличными</option>
<option>Картой</option>
</select>
      </div>

      <div>
        <p className={classes.delivery}>Способ доставки</p>
        <select name="delivery" className={classes.deliveryOptions} >
<option>Самовывоз</option>
<option>Курьер</option>
</select>
      </div>
      </form>
          
    );
    
}
export default BasketHeader;