import React, { useState, useContext, useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../shared/button'
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

  return <div>
    <div>
      <input placeholder="Login" type='text' required
        value={login}
        onChange={(e) => setLogin(e.target.value)}
      />
      <input placeholder="Password" type='password' required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
    <div>
      <button onClick={authorize}>Try</button>
    </div>
    <div>
      <Button text ='Try' onClick={authorize} />
    </div>
  </div >
}
