import EmptyFilter from '@/app/components/EmptyFilter'
import React from 'react'

export default function signIn({searchParams} : {searchParams : {
    callback : string
}}) {
  return (
    <EmptyFilter 
        title="You are not logged In"
        subtitle='click on the butto below'
        isLogin
        callback={searchParams.callback}
    ></EmptyFilter>
  )
}
