import { useParamsStore } from '@/hooks/ParameterStore'
import { Button, ButtonGroup } from 'flowbite-react'
import React from 'react'
import { AiOutlineClockCircle, AiOutlineSortAscending } from 'react-icons/ai'
import { BsFillStopCircleFill, BsStopwatch } from 'react-icons/bs'
import { GiFinishLine, GiFlame } from 'react-icons/gi'


const pageSizeList = [4 , 8 , 12]

const  orderButtons = [
    {
        label : 'Alphabetical',
        icon : AiOutlineSortAscending,
        value: 'make'
    },
    {
        label : 'End Date',
        icon : AiOutlineClockCircle,
        value: 'endingSoon'
    },
    {
        label : 'Recently added',
        icon : BsFillStopCircleFill,
        value: 'live'
    },
]
const  filterButtons = [
    {
        label : 'Live Auctions',
        icon : GiFlame,
        value: 'make'
    },
    {
        label : 'End Date < 6 hours',
        icon : GiFinishLine,
        value: 'endingSoon'
    },
    {
        label : 'Recently added',
        icon : BsStopwatch,
        value: 'finished'
    },
]

export default function Filters() {
    const setParams = useParamsStore(state => state.setParams)
    const pageSize = useParamsStore(state => state.pageSize)
    const orderBy = useParamsStore(state => state.OrderBy)
    const filterBy = useParamsStore(state => state.FilterBy)

  return (
    <div className='flex justify-between items-center shadow-amber-100'>
        <div>
            <span className='uppercase mr-2'>Filter By</span>
            <ButtonGroup>
                {

                    filterButtons.map(({label , icon : Icon , value})=>(
                        <Button
                            key={value}
                            onClick={() => setParams({FilterBy : value})}
                            color={`${filterBy === value ? 'green' : '#f2f2f2'}`}
                        >
                            <Icon></Icon>
                            {label}
                        </Button>
                    ))
                }
            </ButtonGroup>
        </div>
        <div>
            <span className='uppercase mr-2'>Order By</span>
            <ButtonGroup>
                {

                    orderButtons.map(({label , icon : Icon , value})=>(
                        <Button
                            key={value}
                            onClick={() => setParams({OrderBy : value})}
                            color={`${orderBy === value ? 'green' : '#f2f2f2'}`}
                        >
                            <Icon></Icon>
                            {label}
                        </Button>
                    ))
                }
            </ButtonGroup>
        </div>
        <div>
            <span className='uppercase mr-2'>Page Size</span>
            <ButtonGroup>
                {pageSizeList.map((val , i) => (
                    <Button
                        key={i}
                        onClick={()=>setParams({pageSize:val})}
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
