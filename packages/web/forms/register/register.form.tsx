"use client"
import { useRegisterUserMutation } from '__generated__/graphql'
import React from 'react'
import { useForm } from 'react-hook-form'


// const user = new User({
//   email: body.email,
//   password: hashedPassword,
//   firstName: body.firstName,
//   lastName: body.lastName,
//   phoneNumber: body.phoneNumber
// })
const RegiserForm = () => {
  const [, registerU] = useRegisterUserMutation()


  const { register, handleSubmit, reset } = useForm()

  const onSubmit = async (data: any) => {
    console.log(data)
    const response = await registerU({ body: data })

    if (response.data) {
      alert(response.data.registerUser)
      reset()
    }

  }


  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("email")} placeholder='Enter Email' />
        <input {...register("password")} placeholder='Enter Password' />
        <input {...register("firstName")} placeholder='Enter First Name' />
        <input {...register("lastName")} placeholder='Enter Last Name' />
        <input {...register("phoneNumber")} placeholder='Enter phoneNumber' />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default RegiserForm
