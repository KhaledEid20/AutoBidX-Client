'use server'

import { auth } from "@/auth";
import { Auction, PagedResult } from "@/types";

export async function getItems(url : string): Promise<PagedResult<Auction>> {
    const data = await fetch(`http://localhost:7002/api/search${url}`)
    if(!data.ok){
        console.log("Error to Fetch The Items")
    }
    return data.json();
}

export async function updateCarAuctions(){
    const session  = await auth()
    const data = {
        Mileage : Math.floor(Math.random()*10000)+1
    }
    const res = await fetch(`http://localhost:7001/api/auctions/f770f2a1-941e-42b3-b3be-acb87e6d6699` , 
        {
            method:'PUT',
            headers : {
                'Content-type' : 'application/json',
                'Authorization' : 'Bearer ' + session?.accessToken
            },
            body : JSON.stringify(data)
        }
    );
    if(!res.ok){
       throw new Error('fetching Failed!!')

    }
    const ContentType = res.headers.get("Content-Type")
    if(ContentType && ContentType.includes('application/json')){
        return res.json()
    }
    return {message : 'There is no Response Data '}
}