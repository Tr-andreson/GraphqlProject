import RegiserForm from 'forms/register/register.form'
import Link from 'next/link'
import React from 'react'

const Register = () => {
  return (
    <div>
      <h4>Register Page</h4>
      <RegiserForm />
      <div>
        <h3>Already Have an account ?</h3>
        <Link href={"/auth/login"}>
          <h4>Login</h4>
        </Link>
      </div>
    </div>
  )
}

export default Register
