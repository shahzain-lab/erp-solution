import SaleOverview from '@/components/Sale/SaleOverview'
import SaleTransactions from '@/components/Sale/SaleTransactions'
import Main from '@/layout/Main'
import React from 'react'

const SaleList = () => {
  return (
    <Main className='px-5 py-6'>
        <SaleOverview />
        <SaleTransactions />
    </Main>
  )
}

export default SaleList