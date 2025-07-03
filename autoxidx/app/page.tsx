'use client'

import Image from "next/image";
import Listing from "./Auction/Listing";
import AppPagination from "./components/AppPagination";
import { getListings } from "./Actions/AuctionEffects";
import Filters from "./Auction/Filters";

export default function Home() {
  const data = getListings()
  return (
    <>
    <Filters pageSize={data.pageSize} setPageSize={data.setpageSize}></Filters>
    <div className="mt-5">
        <Listing auction={data.auction}/>
    </div>
    <AppPagination pageChanged={data.setPageNumber} pageCount={data.pageCount} currentPage={data.pageNumber}></AppPagination>
    </>
  )
}
