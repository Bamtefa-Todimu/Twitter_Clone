import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import configureStore from '../../store/store'
import { userLoginRequested } from '../../store/auth'

const store = configureStore()

const Login:React.FC = () => {

  // const dispatch = useDispatch()
  
  useEffect(() => {
    store.dispatch(
      userLoginRequested({
        email:"todi",
        password:"1234"
      })
    )
  },[])

  return (
    <div>Login</div>
  )
}

export default Login