import React from 'react'
import Heading from './Heading'
import { Button } from 'flowbite-react'
import { useParamsStore } from '@/hooks/ParameterStore'

type props = {
    title? : string
    subtitle? : string
    ShowReset? : boolean
}

export default function EmptyFilter({
    title = "No Matches For This Filter",
    subtitle = "Reset The filter",
    ShowReset
}: props) {
  const reset = useParamsStore(store => store.reset)
  return (
    <div className='h-[40vh] flex flex-col gap-2 justify-center items-center shadow-lg'>
      <Heading title={title} subtitle={subtitle} center></Heading>
      <div className='mt-4'>
        {ShowReset && (
          <Button outline onClick={reset}>Remove Filters</Button>
        )}
      </div>
    </div>
  )
}
