import { Button, ButtonGroup } from 'flowbite-react'
import React from 'react'

type props ={
    pageSize : number
    setPageSize : (size : number) => void
}

const pageSizeList = [4 , 8 , 12]

export default function Filters({pageSize , setPageSize} : props) {
  return (
    <div className='flex justify-between items-center'>
        <div>
            <span className='mr-2'>Page Size</span>
            <ButtonGroup>
                {pageSizeList.map((val , i) => (
                    <Button
                        key={i}
                        onClick={()=>setPageSize(val)}
                        color={`${(pageSize === val ) ? 'green' : 'gray'}`}
                    >
                        {val}
                    </Button>
                ))}
            </ButtonGroup>
        </div>
    </div>
  )
}
