import React, { useState } from 'react'
import LoginForm from '../compunents/loginForm'
import RegisterForm from '../compunents/registerForm'

const AuthPage = () => {
    const [loginTougle, setLoginTougle] = useState(true)
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-yellow-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        {loginTougle ? <LoginForm state={setLoginTougle}/> : <RegisterForm state={setLoginTougle}/>}
      </div>
    </div>
  )
}

export default AuthPage