import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const  productApi=createApi({
    reducerPath:"productApi",
    baseQuery:fetchBaseQuery({baseUrl:"https://fakestoreapi.com/products"}),
    endpoints:(builder)=>({
        getAllProducts:builder.query({
            query:(product)=>"products",

        })
    })
})                        
export const {useGetAllProductsQuery}=productApi