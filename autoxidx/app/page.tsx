'use client'

import Image from "next/image";
import Listing from "./Auction/Listing";
import AppPagination from "./components/AppPagination";
import Filters from "./Auction/Filters";

export default function Home() {

  return (
    <>
    
    <div className="mt-5">
        <Listing/>
    </div>
    </>
  )
}
