import { Pagination } from 'flowbite-react'
import React from 'react'

type props = {
    currentPage : number
    pageCount : number
    pageChanged : (page : number) => void
}

export default function AppPagination({currentPage , pageCount , pageChanged} : props) {
  return (
    <div className="flex justify-center mt-5">
      <Pagination 
          onPageChange={pageChanged}
          currentPage={currentPage}
          totalPages={pageCount}
          layout='pagination'
          showIcons={true}
          className='text-green-500'
      />
    </div>
  )
}
