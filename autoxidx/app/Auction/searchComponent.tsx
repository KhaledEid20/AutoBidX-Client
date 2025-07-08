'use client'
import { useParamsStore } from '@/hooks/ParameterStore'
import React from 'react'
import { FaSearch } from 'react-icons/fa'

export default function SearchComponent() {
  const setParams = useParamsStore(state => state.setParams)
  const searchVal = useParamsStore(state => state.searchVal)
  const setSearchVal = useParamsStore(state => state.setSearchVal)

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchVal(event.target.value)
  }

  function search() {
    setParams({ searchTerm: searchVal })
  }

  return (
    <div className='w-2xl flex items-center border-2 rounded-full shadow-sm py-2'>
      <input
        type="text"
        value={searchVal}
        className='flex-grow px-4 outline-none rounded-full border-transparent focus:ring-0 bg-transparent'
        onChange={onChange}
        onKeyDown={(e) => {
          if (e.key === 'Enter') search()
        }}
        placeholder='Search with the car name or the color'
      />
      <button
        className='bg-green-500 text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-green-600 transition-colors cursor-pointer mr-3'
        onClick={search}
      >
        <FaSearch size={20} />
      </button>
    </div>
  )
}
