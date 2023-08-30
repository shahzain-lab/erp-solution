'use client'

import React, { useState } from 'react'
import Button from '../Core/Button'
import Modal from '../Shared/Modal'
import Divider from '../Core/Divider'
import Input from '../Core/Input'
import { useFormik } from 'formik'
import Select from '../Core/Select'
import TabPanel from '../Shared/Tabs'

const AddItem = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openWholeSale, setOpenWholeSale] = useState(false);

  const formik = useFormik({
    initialValues: {
        itemName: '',
        category: '',
        itemCode: '',
        price: {
            amount: '23'
        },
        wholesale: {
          qty: '2',
          price: ''
        },
        stock: {
          openQty: '',
          atPrice: '23000',
          asOfDate: '28/09/2023',
          minStock: '100',
          location: ''
        }
    },
    onSubmit: (values) => {
        console.log('values => ', values)
    }
  })


  //Pricing
  const Pricing = () => {
    return (
        <div className='flex flex-col gap-3'>
            <div className='bg-gray-100 border border-gray-300 rounded-lg px-3 py-4'>
                <Input name='amount' onChange={formik.handleChange} MainClass='mb-3' labal='Sale Price' value={formik.values.price.amount} />
                {!openWholeSale ? (
                  <span className='text-blue-600 cursor-pointer' onClick={() => setOpenWholeSale(true)}>+ add wholesale amount</span>
                ) : (
                  <div className=''>
                    <span className='flex gap-5'>Wholesale Price <span className='text-blue-600 cursor-pointer' onClick={() => setOpenWholeSale(false)}>Remove</span></span>
                    <div className='flex items-center gap-4 mt-2'>
                        <Input name='qty' MainClass='mb-3' labal='Sale Price' onChange={formik.handleChange} value={formik.values.wholesale.qty} />
                        <Input name='price' MainClass='mb-3' labal='Sale Price' onChange={formik.handleChange} value={formik.values.wholesale.price} />
                    </div>
                  </div>
                )}
            </div>
            <div className='bg-gray-100 border border-gray-300 rounded-lg px-3 py-4'>
                <Input name='amount' MainClass='mb-3' labal='Purchase Price' value={formik.values.price.amount} />
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
            <Input name='openQty' MainClass='mb-3' labal='Opening Quantity' onChange={formik.handleChange} value={formik.values.stock.openQty} />
            <Input name='atPrice' MainClass='mb-3' labal='At Price' onChange={formik.handleChange} value={formik.values.stock.atPrice} />
            <Input name='asOfDate' MainClass='mb-3' labal='As of date' onChange={formik.handleChange} value={formik.values.stock.asOfDate} />
         </div>
         <div className='flex items-center gap-4'>
            <Input name='minStock' MainClass='mb-3' labal='Min Stock to maintain' onChange={formik.handleChange} value={formik.values.stock.minStock} />
            <Input name='location' MainClass='mb-3' labal='Location' onChange={formik.handleChange} value={formik.values.stock.location} />
         </div>
      </div>
    )
  }

  return (
    <div>
         <Button onClick={() => setIsOpen(true)}>Add Item</Button>
         <Modal className='max-w-4xl ' title='Add Item' isOpen={isOpen} setIsOpen={setIsOpen}>
         <Divider className='mt-2' />
            <div className='flex gap-5 items-center'>
               <Input name='itemName' labal='Item Name *' onChange={(e) => formik.handleChange(e)} value={formik.values.itemName} />
               <Select label='Select Category' options={['Electronics', 'Gadgets', 'Fasion']} addTxt='category' />
            </div>
            <div className='relative'>
               <Input name='itemCode' type='number' labal='Item Code' onChange={formik.handleChange} value={formik.values.itemCode} />
               <span className="absolute top-8 right-0 bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-1 rounded cursor-pointer">Assign Code</span>
            </div>
            <TabPanel
             className='mt-16'
             tabNodes={[{name:'Pricing'},{name:'Stock'}]}
             panelNodes={[<Pricing key={1} />,<Stock key={2} />]}
           />
              <div className='flex justify-between w-full pt-7 '>
              <span></span>
              <div className='gap-2 flex'>
                  <Button variant='outline'>Save & New</Button>
                  <Button>Save</Button>
              </div>
            </div>
         </Modal>
    </div>
  )
}

export default AddItem