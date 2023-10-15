'use client'

import React, { useState } from 'react'
import Button from '../Core/Button'
import Modal from '../Shared/Modal'
import Divider from '../Core/Divider'
import Input from '../Core/Input'
import { useFormik } from 'formik'
import Select from '../Core/Select'
import TabPanel from '../Shared/Tabs'
import { useAddItemMutation } from '@/redux/services/apiSlice'
import { itemFormEntries } from './lib/itemParams'

const AddItem = () => {
  const [ addItem ] = useAddItemMutation()
  const [isOpen, setIsOpen] = useState(false);
  const [openWholeSale, setOpenWholeSale] = useState(false);

  const formik = useFormik({
    initialValues: {
       ...itemFormEntries
    },
    onSubmit: (values) => {
        console.log('values => ', values)
        addItem(values)
    }
  })

  const handleTabChange = (tab: {name: string}) => {}


  //Pricing
  const Pricing = () => {
    return (
        <div className='flex flex-col gap-3'>
            <div className='bg-gray-100 border border-gray-300 rounded-lg px-3 py-4'>
                <Input name='pricing.salePrice' onChange={formik.handleChange} MainClass='mb-3' labal='Sale Price' value={formik.values.pricing.salePrice} />
                {!openWholeSale ? (
                  <span className='text-blue-600 cursor-pointer' onClick={() => setOpenWholeSale(true)}>+ add wholesale amount</span>
                ) : (
                  <div className=''>
                    <span className='flex gap-5'>Wholesale Price <span className='text-blue-600 cursor-pointer' onClick={() => setOpenWholeSale(false)}>Remove</span></span>
                    <div className='flex items-center gap-4 mt-2'>
                        <Input name='quantity' MainClass='mb-3' labal='Sale Price' onChange={formik.handleChange} value={formik.values.pricing.wholeSalePrice.quantity} />
                        <Input name='price' MainClass='mb-3' labal='Sale Price' onChange={formik.handleChange} value={formik.values.pricing.wholeSalePrice.price} />
                    </div>
                  </div>
                )}
            </div>
            <div className='bg-gray-100 border border-gray-300 rounded-lg px-3 py-4'>
                <Input name='pricing.purchasePrice' onChange={formik.handleChange} MainClass='mb-3' labal='Purchase Price' value={formik.values.pricing.purchasePrice} />
                {/* <span className='text-blue-600 cursor-pointer'>+ add wholesale amount</span> */}
            </div>
        </div>
    )
  }

  // Stock
  const Stock = () => {
    return (
      <div>
         <div className='flex items-center gap-4'>
            <Input name='stock.openQty' MainClass='mb-3' labal='Opening Quantity' onChange={formik.handleChange} value={formik.values.stock.openQty} />
            <Input name='stock.atPrice' MainClass='mb-3' labal='At Price' onChange={formik.handleChange} value={formik.values.stock.atPrice} />
            <Input name='stock.asOfDate' MainClass='mb-3' labal='As of date' onChange={formik.handleChange} value={formik.values.stock.asOfDate} />
         </div>
         <div className='flex items-center gap-4'>
            <Input name='stock.minStock' MainClass='mb-3' labal='Min Stock to maintain' onChange={formik.handleChange} value={formik.values.stock.minStock} />
            <Input name='stock.location' MainClass='mb-3' labal='Location' onChange={formik.handleChange} value={formik.values.stock.location} />
         </div>
      </div>
    )
  }

  return (
    <div>
         <Button onClick={() => setIsOpen(true)}>Add Item</Button>
         <Modal className='max-w-4xl ' title='Add Item' isOpen={isOpen} setIsOpen={setIsOpen}>
         <Divider className='mt-2' />
          <form onSubmit={formik.handleSubmit}>
              <div className='flex gap-5 items-center'>
                <Input name='name' labal='Item Name *' onChange={(e) => formik.handleChange(e)} value={formik.values.name} />
                <Select label='Select Category' options={['Electronics', 'Gadgets', 'Fasion']} addTxt='category' />
              </div>
              <div className='relative'>
                <Input name='code' type='number' labal='Item Code' onChange={formik.handleChange} value={formik.values.code} />
                <span className="absolute top-8 right-0 bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-1 rounded cursor-pointer">Assign Code</span>
              </div>
              <TabPanel
              className='mt-16'
              tabNodes={[{name:'Pricing'},{name:'Stock'}]}
              handleTabChange={handleTabChange}
              panelNodes={[<Pricing key={1} />,<Stock key={2} />]}
            />
                <div className='flex justify-between w-full pt-7 '>
                <span></span>
                <div className='gap-2 flex'>
                    <Button type='button' variant='outline'>Save & New</Button>
                    <Button type='submit'>Save</Button>
                </div>
              </div>
          </form>
         </Modal>
    </div>
  )
}

export default AddItem