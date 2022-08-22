import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { userLoginRequested } from '../../store/auth'

import './Login.css'


const Login:React.FC = () => {

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(
      userLoginRequested({
        email:"todi",
        password:"1234"
      })
    )
  },[dispatch])

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="login_image-container">
          <img src="https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png" alt="" />
          <svg viewBox="0 0 24 24" aria-hidden="true" width="380px" height="380px" fill='#ffffff'><g><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path></g></svg>
        </div>

        <div className="login_right-container">
          <div className="login_right-wrapper">
            <div className="twitter-logo">
              <svg viewBox="0 0 24 24" aria-hidden="true" width="42px" height="42px" fill='rgb(214, 217, 219)'><g><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path></g></svg>
            </div>

            <div className="happening_now_text">
              Happening now
            </div>

            <div className="jtt_text">
              Join Twitter today
            </div>

            <div className="sign_up-actions">
              <div className="su-google"></div>
              <div className="su-apple"></div>
              <div className="or_seperator">
                <span></span>
                <span>or</span>
                <span></span>
              </div>
              <div className="su-phone"></div>
              <div className="tos_text">
                By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.
              </div>
            </div>

            <div className="sign_in-actions">
              <p>Already have an account?</p>
              <div className="sign_in-btn">
                Sign in
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="login-footer">
        About Help Center Terms of Service Privacy Policy Cookie Policy Accessibility Ads info Blog Status Careers Brand Resources Advertising Marketing Twitter for Business Developers Directory Settings ©2022Twitter, Inc.
      </div>
    </div>
  )
}

export default Login