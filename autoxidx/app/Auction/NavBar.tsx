import React from 'react'
import { FaCarAlt } from "react-icons/fa";


export default function NavBar() {
  return (
    <header className='sticky top-0 flex z-50 justify-between p-8'>
        <div className='text-green-500 text-3xl font-serif font-semibold flex'>
            <FaCarAlt size={35}/>
            <h3>AutoBidX</h3>
        </div>
        <div>Search</div>
        <div>Login/Register</div>
    </header>
  )
}
