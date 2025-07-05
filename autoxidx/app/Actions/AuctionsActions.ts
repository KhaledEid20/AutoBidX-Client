import { Auction, PagedResult } from "@/types";
import { useEffect, useState } from "react";

export async function getItems(url : string): Promise<PagedResult<Auction>> {
    const data = await fetch(`http://localhost:7002/api/search${url}`)
    if(!data.ok){
        console.log("Error to Fetch The Items")
    }
    return data.json();
}
