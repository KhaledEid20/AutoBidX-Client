'use client'
import { useParamsStore } from '@/hooks/ParameterStore'
import React from 'react'
import { FaCarAlt } from 'react-icons/fa'

export default function Logo() {
    const reset = useParamsStore(state => state.reset)
  return (
    <div className='text-green-500 text-3xl font-serif font-semibold flex cursor-pointer'
        onClick={reset}>
        <a href="/" className='flex justify justify-between'>
          <FaCarAlt size={35}/>
          <h3>AutoBidX</h3>
        </a>
    </div>
  )
}
