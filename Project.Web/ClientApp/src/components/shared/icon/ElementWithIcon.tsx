import React from 'react'
import { Icon, IconType } from '.'
import { FlexContainer } from '../flex-container'
import { FlexDirection } from '../flex-container/FlexContainer'
import styles from './Icon.module.scss'

interface INavLinkProps {
  iconType: IconType,
  direction: FlexDirection,
  gap: string,
  children: React.ReactNode
}

export const ElementWithIcon: React.FC<INavLinkProps> = ({ direction, iconType, gap, children }) => {
  return <FlexContainer direction={direction} gap={gap} className={styles.iconContainer} >
    <Icon type={iconType}/>
      {children}
    </FlexContainer>
}
