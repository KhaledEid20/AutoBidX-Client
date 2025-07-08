import React from 'react'
import { FaCarAlt } from "react-icons/fa";
import SearchComponent from './searchComponent';
import Logo from './Logo';

export default function NavBar() {
  return (
    <header className='sticky top-0 flex z-50 justify-between p-8 bg-green-100'>
        <Logo></Logo>
        <div><SearchComponent /></div>
        <div>Login/Register</div>
    </header>
  )
}
