import React from 'react';
import '../css-modules/JobSearch/Pagination/style.css';
// import { Pagination } from 'react-bootstrap'

export default function JobsPagination({ page, setPage, hasNextPage }) {
  const adjustPage = (amount) => {
    setPage(prevPage => prevPage + amount)
  }

  return (
    <div className = "pagination">
      {page !== 1 && <span className = "item prev" onClick={() => adjustPage(-1)}>&#10094;</span>}
       {page !== 1 && <span className = "item" onClick={() => setPage(1)}>1</span>}
      {page > 2 && <span className = "item elipsis">&#8230;</span>}
      {page > 2 && <span className = "item" onClick={() => adjustPage(-1)}>{page - 1}</span>}
      <span className = "item current">{page}</span>
      {hasNextPage && <span className = "item" onClick={() => adjustPage(1)}>{page + 1}</span>}      
      {hasNextPage && <span className = "item next" onClick={() => adjustPage(1)}>&#10095;</span>} 
    </div>
  )
}