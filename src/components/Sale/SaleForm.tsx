'use client'

import React, { useEffect, useRef, useState } from 'react'
import ReadonlyInput from '../Core/ReadonlyInput'
import CustomerSelect from '../Shared/CustomerSelect'
import Divider from '../Core/Divider'
import { BiChevronDown } from 'react-icons/bi'
import Button from '../Core/Button'
import { useFormik } from 'formik';
import { validationSchema } from '@/lib/Validation.yup'
import { v4 as uuidv4 } from 'uuid';


const SaleForm = () => {

    // init
    const rowValue = {
        id: uuidv4(),
        item: '',
        quantity: '',
        unit: '',
        amount: ''
    }
    // useFormik
    const formik = useFormik({
        initialValues: {
            rows: [rowValue],
            discount: '',
            discountToPKR: '',
            total: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log('Submitted Values', values)
        } 
    })

    const handleAddRow = () => {
        const newRow = { ...rowValue, id: uuidv4() };
        formik.setFieldValue('rows', [...formik.values.rows, newRow]);
    };
    
    const handleRemoveRow = (index: number) => {
        const updatedRows = formik.values.rows.filter((_, i) => i !== index);
        const _total = updatedRows.map(row => row.amount).reduce((acc, curr) => Number(acc) + Number(curr), 0)
        if(formik.values.discount) {
            const discount = Math.round(Number(_total) * (Number(formik.values.discount)/100));
            formik.setValues({...formik.values, rows: updatedRows, discountToPKR: `${discount}`, total: `${Number(_total) - discount}`});
        } else {
            formik.setValues({...formik.values, rows: updatedRows, total: `${_total}`});
        }
    };

    
    const updateHandle = (value: string, index?: number) => {
        const updatedRows = [...formik.values.rows];
        
        if(index === 0 || index) {            
            updatedRows[index].amount = value;
            const _total = updatedRows.map(row => row.amount).reduce((acc, curr) => Number(acc) + Number(curr), 0)
            const discount = Math.round(Number(_total) * (Number(formik.values.discount)/100));
            formik.setValues({ ...formik.values, rows: updatedRows, discountToPKR: `${discount}`, total: `${Number(_total) - discount}` });
        } else {
            const _total = updatedRows.map(row => row.amount).reduce((acc, curr) => Number(acc) + Number(curr), 0)
            const discount = Math.round(Number(_total) * (Number(value)/100));
            formik.setValues({ ...formik.values, discountToPKR: `${discount}`, total: `${Number(_total) - discount}` });
        }
    }

  return (
    <form onSubmit={formik.handleSubmit} className='flex flex-col justify-between min-h-[90vh]'>

      <div>
            {/* /Cash Switch/  */}
            <div className='flex items-center py-3'>
                <span className="mr-3 text-sm font-medium text-gray-900">Credit</span>
                <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="w-11 h-6 bg-purple-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="ml-3 text-sm font-medium text-gray-900">Cash</span>
                </label>
            </div>

            <Divider />

            {/*  */}
            <div className='flex items-center py-3 w-[50%] gap-3'>
                <ReadonlyInput
                    value="232323"
                    divClass="w-[20%]"
                    label="Customer ID"
                    />
                <CustomerSelect 
                    divClass='w-[50%]'
                    label="Select Party"
                    />
            </div>

        </div>
        <div className="flex flex-col">
            <div className="-m-1.5 overflow-x-auto">
                <div className="p-1.5 min-w-full inline-block align-middle">
                <div className="overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200 ">
                    <thead>
                        <tr>
                        <th scope="col" className="px-6 py-3 text-left border border-gray-200 text-xs font-medium text-gray-500 uppercase">#</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs border border-gray-200 font-medium text-gray-500 uppercase">item</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs border border-gray-200 font-medium text-gray-500 uppercase">quantity</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs border border-gray-200 font-medium text-gray-500 uppercase">price/unit</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs border border-gray-200 font-medium text-gray-500 uppercase">Amount</th>
                        <th scope="col" className="px-6 py-3 text-right text-xs border border-gray-200 font-medium text-gray-500 uppercase">action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {formik.values.rows.map((row, i) => (
                            <tr className="bg-gray-100" key={i}>
                                <td className="w-16 px-6 py-4 whitespace-nowrap text-sm font-medium border border-gray-200 text-gray-800 ">{i+1}</td>
                                <td className="w-96 whitespace-nowrap text-sm text-gray-800 border border-gray-200">
                                <input name={`rows[${i}].item`} value={row.item} onChange={formik.handleChange} type={'text'} className={"bg-inherit border-none px-6 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "}/>
                                </td>
                                <td className="w-24 whitespace-nowrap text-sm text-gray-800 border border-gray-200">
                                  <input name={`rows[${i}].quantity`} value={row.quantity} onChange={(e) => {
                                      updateHandle(`${Number(e.target.value) * Number(row.unit)}`, i);
                                      formik.handleChange(e);
                                    }} type={'number'} className={"bg-inherit border-none px-6 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "}/>
                                </td>
                                <td className="w-24 whitespace-nowrap text-sm text-gray-800 border border-gray-200">
                                  <input name={`rows[${i}].unit`} 
                                  value={row.unit} onChange={(e) => {
                                      updateHandle(`${Number(row.quantity) * Number(e.target.value)}`, i);
                                      formik.handleChange(e);
                                    }} type={'number'} className={"bg-inherit border-none px-6 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "}/>
                                </td>
                                <td className="w-24 px-6 whitespace-nowrap text-sm text-gray-800 border border-gray-200">
                                  <input name={`rows[${i}].amount`} value={row.amount} readOnly className={"bg-inherit px-2 border-none outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "}/>
                                </td>
                                 <td className="w-16 px-6 py-4 whitespace-nowrap text-right text-sm font-medium border border-gray-200">
                                   {formik.values.rows.length > 1 && (
                                       <span onClick={() => handleRemoveRow(i)} className="cursor-pointer text-blue-500 hover:text-blue-700">Delete</span>
                                   )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr className='border-b border-gray-200'>
                            <td></td>
                            <td className="px-6 py-3 clear-both w-full block text-left  text-xs font-medium text-gray-500 uppercase">
                                <span onClick={handleAddRow} className='text-purple-600 border cursor-pointer border-purple-600 rounded-md py-2 px-4'>+ Add Row</span>
                            </td>
                        </tr>
                    </tfoot>
                    </table>
                </div>
                </div>
            </div>
        </div>
        <div>
            <div className='w-full flex justify-between'>
                <div>
                    <span>Description</span>
                </div>
                <div>
                    <div className='flex items-center justify-center'>
                        <span>
                        <label className='mb-2 text-sm font-medium text-gray-900'>Discount %</label>
                        <input type={'number'} name={'discount'} value={formik.values.discount}  onChange={(e) => {
                                updateHandle(e.target.value);
                                formik.handleChange(e);
                            }} placeholder='%' className={"w-[100px] bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"}/>
                        </span>
                          <span className='pt-5'>-</span>
                        <span>
                            <label className='text-sm font-medium text-gray-900'>PKR</label>
                            <input type={'number'} name={'discountToPKR'} value={formik.values.discountToPKR} placeholder='-/PKR' className={"w-[100px] bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"} readOnly/>
                        </span>
                    </div>
                    <div className='my-3'>
                     <label htmlFor={'label'} className="block text-sm font-medium text-gray-900">{'Total'}</label>
                    <input type={'number'}  name={'total'} value={formik.values.total} className={"w-full bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"} readOnly />
                    </div>
                </div>
            </div>
            <Divider />
            <div className='my-2 flex justify-between'>
                <div></div>
                <div className='flex gap-2'>
                    <button type='button' className='border-2 border-purple-600 rounded-md py-1 px-4 text-purple-600 flex items-center'>Share <BiChevronDown className="text-[20px] font-bold" /></button>
                    <Button type="submit" text='Save'></Button>
                </div>
            </div>
        </div>
    </form>
  )
}

export default SaleForm