import React from 'react'

type props = {
    title : string,
    subtitle : string,
    center? : boolean
}

export default function Heading({title , subtitle , center} : props) {
  return (
    <>
        <div className={center? 'text-center' : 'text-start'}>
            {title}
        </div>
        <div className='font-light text-neutral-500 mt-2'>
            {subtitle}
        </div>
    </>
  )
}
