'use client'
import { Button } from 'flowbite-react'
import React from 'react'
import { login } from '../Actions/Auth'

export default function LoginButton() {
  return (
    <Button
      outline
      onClick={() => {login()}}
      className="cursor-pointer"
    >
        SignIn
    </Button>
  )
}
