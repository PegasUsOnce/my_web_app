import React, { useState, createContext, useCallback } from 'react'
import { UserRepository } from './UserRepository'

interface IProps {
  /** Пользователь авторизован */
  isAuthorized: boolean,
  /** Авторизоваться */
  logIn: (login: string, password: string) => void,
  /** Зарегистрироваться */
  signIn: (login: string, password: string) => void,
  /** Выйти из аккаунта */
  signOut: () => void
}

const repository = new UserRepository()

export const AuthorizaionContext = createContext<IProps>({
  isAuthorized: false,
  logIn: (): void => { throw new Error('Контекст не инициализирован') },
  signIn: (): void => { throw new Error('Контекст не инициализирован') },
  signOut: (): void => { throw new Error('Контекст не инициализирован') }
})

/** Контекст авторизации */
export const AuthorizaionContextProvider: React.FC = ({ children }) => {
  const [isAuthorized, setAuthorized] = useState(!!localStorage.getItem('isAuthorized'))

  const setLocalStorage = useCallback((flag: boolean) => {
    localStorage.setItem('isAuthorized', flag.toString())
  }, [])

  const logIn = useCallback(async (login: string, password: string) => {
    const success = await repository.logIn(login, password)
    if (success) {
      setAuthorized(true)
      setLocalStorage(true)
    }
  }, [setAuthorized])

  const signIn = useCallback(async (login: string, password: string) => {
    const success = await repository.signIn(login, password)
    if (success) {
      setAuthorized(true)
      setLocalStorage(true)
    }
  }, [setAuthorized])

  const signOut = useCallback(async () => {
    setAuthorized(false)
    setLocalStorage(false)
  }, [setAuthorized])

  return <AuthorizaionContext.Provider value={{ isAuthorized, logIn, signIn, signOut }}>
    {children}
  </AuthorizaionContext.Provider>
}
