import React, { useCallback } from 'react'
// import styles from './Input.module.scss'

interface IProps {
  id: string
  placeholder: string
  value: string,
  onChange: (value: string) => void
}

const InputImpl: React.FC<IProps> = ({ id, placeholder, value, onChange }) => {
  const onChangeHandle = useCallback((e) => {
    onChange(e.target.value)
  }, [onChange])

  return <div className="inline-text-field-container">
    <div className="mdc-text-field mdc-ripple-upgraded">
      <input
        className="mdc-text-field__input"
        id={id}
        autoCorrect="off"
        autoComplete="off"
        spellCheck="false"
        maxLength={10000}
        value={value}
        onChange={onChangeHandle}
      />
      <div className="mdc-line-ripple"></div>
      <label htmlFor={id} className="mdc-floating-label">{placeholder}</label>
    </div>
  </div>
}

/** Ввод */
export const Input = React.memo(InputImpl)
