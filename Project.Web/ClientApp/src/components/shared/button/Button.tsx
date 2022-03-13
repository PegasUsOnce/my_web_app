import React from 'react'
import { ButtonType } from '.'
import styles from './Button.module.scss'

interface IProps {
  text: string,
  onClick: () => void
  disabled?: boolean,
  type?: ButtonType
}

const ButtonImpl: React.FC<IProps> = ({ text, onClick, type = 'usual', disabled = false }) => {
  return <div className={styles.buttonContainer}>
    <div className={styles.button + ' ' + styles.usual} onClick={onClick}>
      <div className={styles.textWrapper}>
        {text}
      </div>
    </div>
  </div>
}

/** Кнопка */
export const Button = React.memo(ButtonImpl)
