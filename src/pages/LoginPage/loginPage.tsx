import React from 'react'
import "./loginPage.css"
import SignIn from '../../components/auth/signin/signin'
type Props = {}

const LoginPage = (props: Props) => {
    const spans = Array.from({ length: 520 }, (_, index) => index + 1);
  return (
    <>
    <section> 
    {spans.map((number) => (
        <span key={number}></span>
      ))}
   <SignIn></SignIn>

  </section></>
  )
}

export default LoginPage