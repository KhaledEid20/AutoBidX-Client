'use client'
import Image from "next/image";
import Listing from "./Auction/Listing";
import AppPagination from "./components/AppPagination";
import { getListings } from "./Actions/AuctionEffects";

export default function Home() {
  const data = getListings()
  return (
    <>
    <div>
        <Listing auction={data.auction}/>
    </div>
    <AppPagination pageChanged={data.setPageNumber} pageCount={data.pageCount} currentPage={data.pageNumber}></AppPagination>
    </>
  )
}
