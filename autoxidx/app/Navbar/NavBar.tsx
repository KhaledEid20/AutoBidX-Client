import React from 'react'
import { FaCarAlt } from "react-icons/fa";
import SearchComponent from './searchComponent';
import Logo from './Logo';
import LoginButton from './LoginButton';
import { getCurrentUser } from '../Actions/Auth';
import SessionButton from './sessionButton';


export default async function NavBar() {
  const user = await getCurrentUser()
  return (
    <header className='sticky top-0 flex z-50 justify-between p-8 bg-green-100'>
        <Logo></Logo>
        <SearchComponent />
        {user ? (<SessionButton user={user}/>) : (<LoginButton></LoginButton>)}
    </header>
  )
}
