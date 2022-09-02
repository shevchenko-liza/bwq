import { Link } from 'react-router-dom'

import classes from './styles.module.scss'

export const Item = ({ href, icon, children }) => (
  <Link to={href} className={classes.item}>
    <span className={classes.iconBox}>
      <img className={classes.icon} src={icon} alt="" />
    </span>
    <span className={classes.caption}>{children}</span>
  </Link>
)