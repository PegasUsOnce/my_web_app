import React, { useCallback } from 'react'
import { InputType } from '.'
import styles from './Input.module.scss'

interface IProps {
  placeholder: string
  value?: string,
  type: InputType,
  onChange: (value: string) => void
}

const InputImpl: React.FC<IProps> = ({ placeholder, type, onChange, value = undefined }) => {
  const onChangeHandle = useCallback((e) => {
    onChange(e.target.value)
  }, [onChange])

  return <div className={styles.inputWrapper}>
    <br />
    <input
      type={type}
      className={styles.input}
      required={true} /** без этого не работает floating, можно подумать над другим решением */
      onChange={onChangeHandle}
      placeholder=''
      value={value}
    />
    <span className={styles.floatingLabel}>{placeholder}</span>
  </div>
}

/** Поле ввода */
export const Input = React.memo(InputImpl)
