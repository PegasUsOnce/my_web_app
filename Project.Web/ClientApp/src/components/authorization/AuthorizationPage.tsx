import React, { useState, useContext, useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../shared/button'
import { FlexContainer } from '../shared/flex-container'
import { Input } from '../shared/input'
import { AuthorizaionContext } from './AuthorizationContext'

export const AuthorizationPage: React.FC = () => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const { isAuthorized, logIn } = useContext(AuthorizaionContext)
  const navigate = useNavigate()

  const authorize = useCallback(() => {
    logIn(login, password)
  }, [login, password, logIn])

  useEffect(() => {
    if (isAuthorized)
      return navigate('/')
  }, [isAuthorized])

  return <FlexContainer gap='18px' direction='vertical' margin='20px auto' width='300px'>
    <Input onChange={setLogin} placeholder='Login' value={login} type='text' />
    <Input onChange={setPassword} placeholder='Password' value={password} type='password' />
    <Button text='Log In' onClick={authorize} height='40px' />
  </FlexContainer>
}
