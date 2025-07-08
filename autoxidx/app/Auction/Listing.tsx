import React, { useEffect, useState } from 'react'
import { getItems } from '../Actions/AuctionsActions';
import { Auction, PagedResult } from '@/types';
import AuctionCard from './AuctionCard';
import AppPagination from '../components/AppPagination';
import { useShallow } from 'zustand/shallow';
import { useParamsStore } from '@/hooks/ParameterStore';
import queryString from 'query-string';
import Filters from './Filters';
import EmptyFilter from '../components/EmptyFilter';


export default function Listing() {
  const [data , setData] = useState<PagedResult<Auction>>()
const params = useParamsStore(useShallow(state => ({
  pageNumber : state.pageNumber,
  pageSize : state.pageSize,
  searchTerm : state.searchTerm,
  OrderBy : state.OrderBy,
  FilterBy : state.FilterBy
})))

  const setParams = useParamsStore(state => state.setParams);
  const url = queryString.stringifyUrl({url : '' , query : params})
  console.log(url)
useEffect(() => {
  getItems(url).then(d => setData(d));
}, [url]);
  function setPageNumber(pageNumber:number){
    setParams({pageNumber})
  }
  if(!data) return "There is no data available"
  return (
    <>
      <Filters ></Filters>
      {
          data.totalCount === 0 ? (
            <EmptyFilter ShowReset></EmptyFilter>
          ):(
          <>
          <div className='grid grid-cols-4 gap-6 mt-5'>
            {data.results?.map(item => (
                <AuctionCard auction={item} />
            ))}
          </div>
          <AppPagination pageChanged={setPageNumber} pageCount={data.pageCount} currentPage={params.pageNumber}></AppPagination>
          </>
        )
      }
    </>
  )
}