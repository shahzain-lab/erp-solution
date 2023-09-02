'use client'

import React from 'react'
import ReadonlyInput from '../Core/ReadonlyInput'
import CustomerSelect from '../Shared/CustomerSelect'
import Divider from '../Core/Divider'
import { BiChevronDown } from 'react-icons/bi'
import Button from '../Core/Button'
import { useFormik } from 'formik';
import { validationSchema } from '@/lib/Validation.yup'
import { v4 as uuidv4 } from 'uuid';
import TabPanel from '../Shared/Tabs'
import FormTable from '../Shared/FormTable'
import { expenseFormEntries, expenseItemRow } from './lib/expenseParams'
import { Option, Select } from '@material-tailwind/react'
import { useAddExpenseMutation } from '@/redux/services/apiSlice'


const ExpenseForm = () => {
    const [ addExpense ] = useAddExpenseMutation()

    // useFormik
    const formik = useFormik({
        initialValues: {
            ...expenseFormEntries
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            addExpense(values)
            console.log('Submitted Values', values)
        } 
    })

    const handleAddRow = () => {
        const newRow = { ...expenseItemRow, id: uuidv4() };
        formik.setFieldValue('rows', [...formik.values.expenseItemRows, newRow]);
    };
    
    const handleRemoveRow = (index: number) => {
        const updatedRows = formik.values.expenseItemRows.filter((_, i) => i !== index);
        const _total = updatedRows.map(row => row.amount).reduce((acc, curr) => Number(acc) + Number(curr), 0)
        formik.setValues({...formik.values, expenseItemRows: updatedRows, total: `${_total}`});
    };

    
    const updateHandle = (value: string, index?: number) => {
        const updatedRows = [...formik.values.expenseItemRows];
        
        if(index === 0 || index) {            
            updatedRows[index].amount = value;
            const _total = updatedRows.map(row => row.amount).reduce((acc, curr) => Number(acc) + Number(curr), 0)
            formik.setValues({ ...formik.values, expenseItemRows: updatedRows,  total: `${_total}`});
        } else {
            const _total = updatedRows.map(row => row.amount).reduce((acc, curr) => Number(acc) + Number(curr), 0)
            formik.setValues({ ...formik.values, total: `${_total}` });
        }
    }

    const handlePaymentTypeChange = (val?: string) => {
        formik.setFieldValue('paymentType', val)
    }

    const handleCategoryChange = (val?: string) => {
        formik.setFieldValue('category', val)
    }

  return (
    <form onSubmit={formik.handleSubmit} className='flex flex-col justify-between min-h-[90vh]'>

      <div>
            {/* /Cash Switch/  */}
            <div className='flex items-center pb-3'>
              <TabPanel
                 tabNodes={[{name: 'Expense'}]}
                 panelNodes={[
                    <div key={1} className='flex items-center py-2 w-72 gap-3'>
                    <Select value={formik.values.category} onChange={handleCategoryChange} label="Select Category">
                       <Option value='HTML'>Material Tailwind HTML</Option>
                       <Option value='React'>Material Tailwind React</Option>
                       <Option value='Vue'>Material Tailwind Vue</Option>
                       <Option value='Angular'>Material Tailwind Angular</Option>
                       <Option value='Svelte'>Material Tailwind Svelte</Option>
                   </Select>
             </div>
                 ]}
              />
             </div>
            {/*  */}

        </div>
        <div className="flex flex-col">
            <div className="-m-1.5 overflow-x-auto">
                <div className="p-1.5 min-w-full inline-block align-middle">
                <div className="overflow-hidden">
                    <FormTable
                       columns={[
                        {value: '#'},
                        {value: 'item'},
                        {value: 'quantity', class: 'px-2'},
                        {value: 'price/unit', class: 'px-2'},
                        {value: 'Amount', class: 'px-2'},
                        {value: 'action', class: 'text-right'}
                     ]}
                    >
                      <tbody>
                            {formik.values.expenseItemRows.map((row, i) => (
                                <tr className="bg-gray-100" key={i}>
                                    <td className="w-16 px-6 py-2 whitespace-nowrap text-sm font-medium border border-gray-200 text-gray-800 ">{i+1}</td>
                                    <td className="w-96 whitespace-nowrap text-sm text-gray-800 border border-gray-200">
                                    <input name={`expenseItemRows[${i}].itemName`} value={row.itemName} onChange={formik.handleChange} type={'text'} className={"bg-inherit border-none px-6 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "}/>
                                    </td>
                                    <td className="w-12 whitespace-nowrap text-sm text-gray-800 border border-gray-200">
                                    <input name={`expenseItemRows[${i}].quantity`} value={row.quantity} onChange={(e) => {
                                        updateHandle(`${Number(e.target.value) * Number(row.unit)}`, i);
                                        formik.handleChange(e);
                                        }} type={'number'} className={"bg-inherit border-none px-2 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "}/>
                                    </td>
                                    <td className="w-12 whitespace-nowrap text-sm text-gray-800 border border-gray-200">
                                    <input name={`expenseItemRows[${i}].unit`} 
                                    value={row.unit} onChange={(e) => {
                                        updateHandle(`${Number(row.quantity) * Number(e.target.value)}`, i);
                                        formik.handleChange(e);
                                        }} type={'number'} className={"bg-inherit border-none px-2 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "}/>
                                    </td>
                                    <td className="w-12 px-2 whitespace-nowrap text-sm text-gray-800 border border-gray-200">
                                      <span className='bg-inherit px-2 border-none outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 '>{row.amount}</span>
                                    </td>
                                    <td className="w-16 px-6 py-2 whitespace-nowrap text-right text-sm font-medium border border-gray-200">
                                    {formik.values.expenseItemRows.length > 1 && (
                                        <span onClick={() => handleRemoveRow(i)} className="cursor-pointer text-blue-500 hover:text-blue-700">Delete</span>
                                    )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr className='border border-gray-200'>
                                <td></td>
                                <td className="px-6 py-2 clear-both w-full block text-left  text-xs font-medium text-gray-500 uppercase">
                                    <span onClick={handleAddRow} className='text-purple-600 border cursor-pointer border-purple-600 rounded-md py-1 px-2 text-[12px]'>+ Add Row</span>
                                </td>
                            </tr>
                        </tfoot>
                    </FormTable>
                </div>
                </div>
            </div>
        </div>
        <div>
            <div className='w-full flex justify-between'>
                   <div className='flex flex-col gap-3'>
                       <Select value={formik.values.paymentType} onChange={handlePaymentTypeChange} label="Payment Type">
                            <Option value='cheque'>Cheque</Option>
                            <Option value='cash'>Cash</Option>
                        </Select>
                        <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 outline-none text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2" placeholder="Add Description" />
                    </div>
                <div>
                    <div className='my-3'>
                     <label htmlFor={'label'} className="block text-sm font-medium text-gray-900">{'Total'}</label>
                    <input type={'number'} name={'total'} value={formik.values.total} className={"w-full bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2"} readOnly />
                    </div>
                </div>
            </div>
            <Divider className='my-2' />
            <div className=' flex justify-between'>
                <div></div>
                <div className='flex gap-2'>
                    <button type='button' className='border-2 border-purple-600 rounded-md py-1 px-4 text-purple-600 flex items-center'>Share <BiChevronDown className="text-[20px] font-bold" /></button>
                    <Button type='submit'>Save</Button>
                </div>
            </div>
        </div>
    </form>
  )
}

export default ExpenseForm