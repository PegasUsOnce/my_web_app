/* eslint-disable quote-props */
import { ElementWithIcon } from './ElementWithIcon'
import { Icon } from './Icon'

export type IconType = 'cart-shopping' | 'list-align-left' | 'list-align-right' | 'ghost' | 'apple'

export const iconsDict: Record<IconType, string> = {
  'cart-shopping': 'fas fa-solid fa-cart-shopping',
  'ghost': 'fas fa-solid fa-ghost',
  'apple': 'fas fa-solid fa-apple-whole',
  'list-align-left': 'fas fa-solid fa-align-left',
  'list-align-right': 'fas fa-solid fa-align-right'
}

export { Icon, ElementWithIcon }
