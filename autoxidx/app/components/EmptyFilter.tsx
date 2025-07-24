'use client'
import React from 'react'
import Heading from './Heading'
import { Button } from 'flowbite-react'
import { useParamsStore } from '@/hooks/ParameterStore'
import { signIn } from 'next-auth/react'

type props = {
    title? : string
    subtitle? : string
    ShowReset? : boolean
    isLogin? : boolean
    callback : string
}

export default function EmptyFilter({
    title = "No Matches For This Filter",
    subtitle = "Reset The filter",
    ShowReset,
    isLogin,
    callback
}: props) {
  const reset = useParamsStore(store => store.reset)
  return (
    <div className='h-[40vh] flex flex-col gap-2 justify-center items-center shadow-lg'>
      <Heading title={title} subtitle={subtitle} center></Heading>
      <div className='mt-4'>
        {ShowReset && (
          <Button outline onClick={reset}>Remove Filters</Button>
        )}
        {isLogin && (
          <Button outline onClick={() => signIn('id-server',{callback})}>Login</Button>
        )}
      </div>
    </div>
  )
}
