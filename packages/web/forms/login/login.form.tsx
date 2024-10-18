"use client"

import { useLoginUserMutation } from '__generated__/graphql'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from "react-hook-form"

const LoginForm = () => {
  const [, login] = useLoginUserMutation()
  const router = useRouter()



  const { register, handleSubmit, formState: { isLoading } } = useForm()

  const onSubmit = async (data: any) => {
    console.log(data, "ddddddd")
    const response = await login({ body: data })
    console.log(response)


    if (response.data) {
      alert(response.data?.loginUser)
      router.push("/")
    }



  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email")} placeholder='Enter Email' />
      <input {...register("password")} placeholder='Enter Password' />
      {isLoading ? (
        <h4>Loading .....</h4>
      ) : (
        <button type='submit'>Submit</button>
      )}
    </form>
  )
}

export default LoginForm
