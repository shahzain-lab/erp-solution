import PurchaseOverview from '@/components/Purchase/PurchaseOverview'
import PurchaseTransactions from '@/components/Purchase/PurchaseTransactions'
import Main from '@/layout/Main'
import React from 'react'

const Page = () => {
  return (
    <Main>
      <div className='bg-white p-2 rounded-lg mx-1 my-2'>
          <PurchaseOverview />
          <PurchaseTransactions />
      </div>
    </Main>
  )
}

export default Page