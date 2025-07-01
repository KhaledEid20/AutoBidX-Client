'use client'

import React, { useState } from 'react'
import { getItems } from '../Actions/AuctionsActions';
import { Auction } from '@/types';
import AuctionCard from './AuctionCard';

export default function Listing() {
    const [auction , setAuction] = useState<Auction[]>([])
    getItems().then(data => {
        setAuction(data.results);
    })
  return (
    <div className='grid grid-cols-3 gap-6'>
        {auction.map(item => (
            <AuctionCard auction={item} />
        ))}
    </div>
  )
}