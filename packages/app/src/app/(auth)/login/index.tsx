import LoginForm from '@/forms/login.form'
import { Link } from 'expo-router'
import React from 'react'
import { View, Text } from 'react-native'

const Login = () => {
  return (
    <View className='p-2'>
      <Link href={"/"}>
        <Text className='text-3xl'>Login Page</Text>
      </Link>
      <LoginForm />
    </View>
  )
}

export default Login
