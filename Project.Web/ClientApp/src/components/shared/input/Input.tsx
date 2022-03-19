import React, { useCallback } from 'react'
import { InputType } from '.'
import styles from './Input.module.scss'

interface IProps {
  id: string
  placeholder: string
  value: string,
  required?: boolean,
  type: InputType,
  onChange: (value: string) => void
}

const InputImpl: React.FC<IProps> = ({ id, placeholder, type, value, onChange, required = undefined }) => {
  const onChangeHandle = useCallback((e) => {
    onChange(e.target.value)
  }, [onChange])

  return <div className={styles.inputWrapper}>
    <br />
    <input
      type={type}
      className={styles.input}
      required={required}
      onChange={onChangeHandle}
      value={value} />
    <span className={styles.floatingLabel}>{placeholder}</span>
  </div>
}

/** Поле ввода */
export const Input = React.memo(InputImpl)
