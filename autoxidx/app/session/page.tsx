import { auth } from '@/auth'
import React from 'react'
import Heading from '../components/Heading'
import ItemUpdate from './ItemUpdate'

export default async function Session() {
    const session = await auth()
  return (
    <div>
        <Heading title='session Dashboard' subtitle={''}/>
        <div className='bg-blue-200 border-2 border-blue-500'>
            <h3 className='text-lg'>Session Data</h3>
            <pre className='whitespace-pre-wrap break-all'>{JSON.stringify(session , null , 2)}</pre>
        </div>
        <ItemUpdate></ItemUpdate>
    </div>
  )
}
