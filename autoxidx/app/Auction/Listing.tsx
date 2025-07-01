'use client'

import React, { useState } from 'react'
import { getItems } from '../Actions/AuctionsActions';
import { Auction } from '@/types';

export default function Listing() {
    const [auction , setAuction] = useState<Auction[]>([])
    getItems().then(data => {
        setAuction(data.results);
    })
  return (
    <div>
        {auction.map(item => (
            <div>{JSON.stringify(item,null,0)}</div>
        ))}
    </div>
  )
}