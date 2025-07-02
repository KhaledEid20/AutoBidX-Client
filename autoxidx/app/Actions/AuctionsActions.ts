import { Auction, PagedResult } from "@/types";
import { useEffect, useState } from "react";

export async function getItems(pageNumber : number =1): Promise<PagedResult<Auction>> {
    const data = await fetch(`http://localhost:7002/api/search?pageNumber=${pageNumber}&pageSize=8`)
    if(!data.ok){
        console.log("Error to Fetch The Items")
    }
    return data.json();
}
