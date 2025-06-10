import React from 'react'
import { useSelector } from 'react-redux'

const CheckWhetherCountIsThere = () => {
  const {count} = useSelector((state) => state.counter);
  return (
    <div>
      {
        count >= 0 ? (
          <h1 className='text-green-500 font-bold text-xl'>Count is there</h1>
        ) : (
          <h1 className='text-red-500 font-bold text-xl'>Count is not there</h1>
        )
      } 
    </div>
  )
}

export default CheckWhetherCountIsThere
