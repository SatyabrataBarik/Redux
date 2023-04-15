import { View, Text } from 'react-native'
import React from 'react'
import { productApi, useGetAllProductsQuery } from '../../Api/api';


const homePage = () => {
  const {data}=useGetAllProductsQuery();
//  console.log('data', data)
  return (
    <View>
      <Text>index</Text>
    </View>
  )
}

export default homePage