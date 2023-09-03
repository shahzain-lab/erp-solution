'use client'
import React from 'react'
import GridTable from '../Shared/GridTable'

const PurchaseTransactions = () => {
  return (
    <div>
        <span className='font-semibold text-gray-600'>Transactions</span>
        <GridTable />
    </div>
  )
}

export default PurchaseTransactions