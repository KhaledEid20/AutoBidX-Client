'use client'
import { Dropdown, DropdownDivider, DropdownItem } from 'flowbite-react'
import { User } from 'next-auth'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'
import { AiFillCar, AiFillTrophy } from 'react-icons/ai'
import { FaSignOutAlt } from 'react-icons/fa'
import { IoIosWarning } from 'react-icons/io'
import { RiAuctionFill } from 'react-icons/ri'

type props ={
  user:User
}
export default function sessionButton({user}:props) {
  return (
    <Dropdown inline label={`Welcome ${user.name}`}>
      <DropdownItem icon={RiAuctionFill}>
        <Link href="/"> My Auctions</Link>
      </DropdownItem>
      <DropdownItem icon={AiFillTrophy}>
        <Link href="/"> Auctions Won</Link>
      </DropdownItem>
      <DropdownItem icon={AiFillCar}>
        <Link href="/">Sell my car</Link>
      </DropdownItem>
      <DropdownItem icon={IoIosWarning}>
        <Link href="/session"> session (Devoloper Only)</Link>
      </DropdownItem>
      <DropdownDivider></DropdownDivider>
        <DropdownItem icon={FaSignOutAlt} onClick={() => signOut({callbackUrl : '/'})}>Sign-Out</DropdownItem>
    </Dropdown>
  )
}
