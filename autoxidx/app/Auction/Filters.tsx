import { useParamsStore } from '@/hooks/ParameterStore'
import { Button, ButtonGroup } from 'flowbite-react'
import React from 'react'


const pageSizeList = [4 , 8 , 12]

export default function Filters() {
    const setPageSize = useParamsStore(state => state.setParams)
    const pageSize = useParamsStore(state => state.pageSize)
  return (
    <div className='flex justify-between items-center shadow-amber-100'>
        <div>
            <span className='mr-2'>Page Size</span>
            <ButtonGroup>
                {pageSizeList.map((val , i) => (
                    <Button
                        key={i}
                        onClick={()=>setPageSize({pageSize:val})}
                        color={`${(pageSize === val ) ? 'green' : '#f2f2f2'}`}
                    >
                        {val}
                    </Button>
                ))}
            </ButtonGroup>
        </div>
    </div>
  )
}
