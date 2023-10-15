import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),
  endpoints: (builder) => ({
    addSale: builder.mutation({
      query: (values) => {
        console.log('Values reaches in service ', values)
        return {
          url: 'sale',
          method: 'POST',
          body: values
        }
      },
    }),
    addPurchase: builder.mutation({
      query: (values) => {
        console.log('Values reaches in service ', values)
        return {
          url: 'purchase',
          method: 'POST',
          body: values
        }
      } 
    }),
    addExpense: builder.mutation({
      query: (values) => {
        console.log('Values reaches in service ', values)
        return 'todos'
      }
    }),
    addVendor: builder.mutation({
      query: (values) => {
        console.log('Values reaches in service ', values)
        return 'todos'
      }
    }),
    addCustomer: builder.mutation({
      query: (values) => {
        console.log(values)
        return {
          url: 'customer',
          method: 'POST',
          body: values
        }
      }
    }),
    addItem: builder.mutation({
      query: (values) => {
        console.log('Values reaches in service ', values)
        return 'todos'
      }
    }),
    // updateBusinessProfile => sidebar  
    updateBusinessProfile: builder.mutation({
      query: (values) => {
        console.log('Values reaches in service ', values)
        return 'todos'
      }
    })
  }),
})
export const { 
  useAddSaleMutation,
  useAddPurchaseMutation,
  useAddExpenseMutation,
  useAddVendorMutation,
  useAddItemMutation,
  useAddCustomerMutation,
  useUpdateBusinessProfileMutation
 } = apiSlice;