'use client'

import { Auction } from "@/types"
import { useEffect, useState } from "react"
import { getItems } from "./AuctionsActions"

export function getListings(){
    const [auction , setAuction] = useState<Auction[]>([])
    const [pageCount , setPageCount] = useState(1)
    const [pageNumber , setPageNumber] = useState(1)

    useEffect(()=>{
        getItems(pageNumber).then(data => {
            setAuction(data.results);
            setPageCount(data.pageCount);
        })
    },[pageNumber])
    return ({auction , pageCount , pageNumber , setPageNumber})
}