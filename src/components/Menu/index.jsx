import { Item } from './Item'

import icon1 from './icons/01.jpg'
import icon2 from './icons/02.jpg'
import icon3 from './icons/03.jpg'
import icon4 from './icons/04.jpg'
import icon5 from './icons/05.jpg'
import icon6 from './icons/06.jpg'
import icon7 from './icons/07.jpg'

import classes from './styles.module.scss'

const ITEMS = [
  { href: '/menu/burgers', icon: icon1, caption: 'Бургеры' },
  { href: '/menu/business-menu', icon: icon2, caption: 'Бизнес меню' },
  { href: '/menu/kitchen', icon: icon3, caption: 'Кухня' },
  { href: '/menu/first-meal', icon: icon4, caption: 'Первые блюда' },
  { href: '/menu/brazier', icon: icon5, caption: 'Мангал' },
  { href: '/menu/desserts', icon: icon6, caption: 'Десерты' },
  { href: '/menu/beverages', icon: icon7, caption: 'Напитки' },
]

export const Menu = () => (
  <nav className={classes.menu}>
    {ITEMS.map((item, index) => (
      <Item
        key={`Menu item: ${item.href} ${index}`}
        href={item.href}
        icon={item.icon}
      >
        {item.caption}
      </Item>
    ))}
  </nav>
)