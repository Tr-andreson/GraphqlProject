"use client"
import Link from 'next/link'
import { useLogoutUserMutation } from '__generated__/graphql'
import React from 'react'
import { useRouter } from 'next/navigation'

const Navbar = () => {
  const router = useRouter()
  const [, logout] = useLogoutUserMutation()


  const handleLogout = async () => {
    await logout({})
    router.push("/auth/login")

  }

  return (
    <div>
      <Link href={"/"}>
        <h4 className='text-3xl'>Ecom Project</h4>
      </Link>
      <button className='bg-slate-900 text-white' onClick={handleLogout}>Logout</button>
      <Link href={"/auth/login"}>Login</Link>
    </div>
  )
}

export default Navbar
