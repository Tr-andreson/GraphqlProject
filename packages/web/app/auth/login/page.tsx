"use client"
import LoginForm from 'forms/login/login.form'
import Link from 'next/link'
import React, { useState } from 'react'

export default function Login() {
  return (
    <div>
      <h3>Login Page</h3>
      <LoginForm />
      <div>
        <h3> Do Not have an Account ?</h3>
        <Link href={"/auth/register"}>
          <h4>Register</h4>
        </Link>
      </div>
    </div>
  )
}

