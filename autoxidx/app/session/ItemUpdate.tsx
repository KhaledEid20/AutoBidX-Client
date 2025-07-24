'use client'

import React, { useState } from 'react'
import { updateCarAuctions } from '../Actions/AuctionsActions'
import { Button } from 'flowbite-react'

export default function ItemUpdate() {
    const [loading , setLoading] = useState(false)
    const [result , setResult] = useState<any>()

    function doUpdate(){
        setResult(undefined)
        setLoading(true)
        updateCarAuctions()
            .then(res=>setResult(res))
            .catch(err => setResult(err))
            .finally(()=>setLoading(false));
        console.log("The Do update Function Completed !")
    }
  return (
    <div className='flex items-center mt-5'>
        <Button outline onClick={doUpdate} disabled={loading}>
            {loading ? 'Processing...' : 'Update'}
        </Button>
        <div className='ml-5'>
            {JSON.stringify(result,null,2)}
        </div>
    </div>
  )
}
