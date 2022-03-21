import React from 'react'
import styles from './FlexContainer.module.scss'

export type FlexDirection = 'vertical' | 'horizontal'

interface IProps {
  gap: string,
  width?: string,
  padding?: string,
  direction: FlexDirection,
  children?: React.ReactNode
}

const FlexContainerImpl: React.FC<IProps> = ({ gap, direction, width = undefined, padding = undefined, children }) => {
  const className = styles.flexContainer + ' ' + (direction === 'vertical' ? styles.vertical : styles.horizontal)
  const style = { gap: gap, padding: padding, width: width }

  return <div className={className} style={style} >
    {children}
  </div>
}

export const FlexContainer = React.memo(FlexContainerImpl)
