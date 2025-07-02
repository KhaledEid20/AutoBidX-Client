import React, { useEffect, useState } from 'react'
import { getItems } from '../Actions/AuctionsActions';
import { Auction } from '@/types';
import AuctionCard from './AuctionCard';
import AppPagination from '../components/AppPagination';

type props={
  auction : Auction[]
}

export default function Listing({auction } : props) {
  return (
    <>
      <div className='grid grid-cols-4 gap-6'>
          {auction.map(item => (
              <AuctionCard auction={item} />
          ))}
      </div>
      <div>
      </div>
    </>
  )
}