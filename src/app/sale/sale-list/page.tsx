import SaleOverview from '@/components/Sale/SaleOverview'
import SaleTransactions from '@/components/Sale/SaleTransactions'
import Main from '@/layout/Main'
import React from 'react'

const SaleList = () => {
  return (
    <Main>
      <div className='bg-white p-2 rounded-lg mx-1 my-2'>
          <SaleOverview />
          <SaleTransactions />

      </div>
    </Main>
  )
}

export default SaleList