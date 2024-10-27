import React from 'react'
import NavigationBar from '../homepage/NavBar/NavigationBar/NavigationBar'
import CardsforLogin from './CardsforLogin/CardsforLogin'
import LoginForm from './LoginForm/LoginForm'
import './Login.css'
export default function Login() {
    return (
      <div>
        <NavigationBar flag={false} />
        <div className="container">
          <CardsforLogin />
          <LoginForm />
        </div>
      </div>
    );
  }
