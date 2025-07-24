import { Auction } from '@/types'
import React from 'react'
import CountDownfeature from './CountDownfeature'

type props={
    auction : Auction
}

export default function AuctionCard({auction} : props) {
  return (
    <a href='#' key={auction.id}>
        <div className='relative w-full bg-gray-50 overflow-hidden aspect-video rounded-lg'>
            <img 
                src={auction.imageUrl}
                alt=""
                className='object-cover'
            />
            <div className='absolute bottom-2 left-2'>
                <CountDownfeature EndDate={auction.auctionEnd}></CountDownfeature>
            </div>
        </div>
        <div className='flex justify-between items-center mt-4 text-2xl'>
            <h3 className='text-gray-700'>{auction.make} {auction.model}</h3>
            <p className='font-semibold'>{auction.year}</p>
        </div>
    </a>
  )
}