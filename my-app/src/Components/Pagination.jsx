import React,{useState} from 'react'

const Pagination = ({handlePrev,handleNext,currentPage}) => {

  return (
    <div>
        <button disabled={currentPage===1}  onClick={handlePrev} >Prev</button>
        <button>{currentPage}</button>
        <button disabled={currentPage===52}  onClick={handleNext} >Next</button>
      
    </div>
  )
}

export default Pagination
