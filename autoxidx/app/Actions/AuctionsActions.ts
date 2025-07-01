import { Auction, PagedResult } from "@/types";

export async function getItems(): Promise<PagedResult<Auction>> {
    const data = await fetch("http://localhost:7002/api/search?pageNumber=1&pageSize=11")
    if(!data.ok){
        console.log("Error to Fetch The Items")
    }
    return data.json();
}