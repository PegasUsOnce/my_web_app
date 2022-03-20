import React from 'react'
import styles from './Button.module.scss'

interface IProps {
  /** Текст в кнопке */
  text: string,
  /** Дествия по клику */
  onClick: () => void,
  height?: string,
  /** Заблокирована */
  disabled?: boolean
}

const ButtonImpl: React.FC<IProps> = ({ text, onClick, height = undefined, disabled = undefined }) => {
  const style = { height: height }

  return <div className={styles.buttonContainer} style={style} >
    <button className={styles.button} disabled={disabled} onClick={onClick}>{text}</button>
  </div>
}

/** Кнопка */
export const Button = React.memo(ButtonImpl)
