import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const API_BASE_URL = 'https://fakestoreapi.com/products';

interface productProps {
  id: string;
  title: string;
  price: number;
  description: string;
  image: {
    url: string;
  };
}
 export const apiSlice=createApi({
  reducerPath:'apiSlice',
  baseQuery:fetchBaseQuery({baseUrl:'https://fakestoreapi.com'}),
  endpoints:(builder)=>({
      getData:builder.query({
        query:()=>({
        url:"products",
        method:'get'
        })
      })
  })
})
export const {useGetDataQuery}=apiSlice;