import React from 'react'
import { iconsDict, IconType } from '.'
import styles from './Icon.module.scss'

interface IProps {
  type: IconType
}

export const Icon: React.FC<IProps> = ({ type }) => {
  return <i className={`${iconsDict[type]} ${styles.icon}`}></i>
}
