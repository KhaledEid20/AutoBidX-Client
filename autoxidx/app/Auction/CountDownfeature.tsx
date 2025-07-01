import React from 'react'
import Countdown, { zeroPad } from 'react-countdown';

type props = {
    EndDate : any
}

const renderer = ({days, hours, minutes, seconds, completed } : {days:number , hours: number , minutes:number , seconds:number , completed:boolean}) => {
    return(
        <div className={`border-2 border-white text-white py-1 flex justify-center rounded-lg text-2xs
            ${(completed)? 'bg-red-600' : (days === 0 && hours < 10 )? 'bg-amber-500' :'bg-green-600'}`}>
            {completed? (<span>Auction Finished</span>) 
            :
            (<span>{zeroPad(days)} : {zeroPad(hours)} : {zeroPad(minutes)} : {zeroPad(seconds)}</span>) 
            }
            </div>
        
    )
};

export default function CountDownfeature({EndDate} : props) {
  return (
    <Countdown
    date={EndDate}
    renderer={renderer}
  />
  )
}
