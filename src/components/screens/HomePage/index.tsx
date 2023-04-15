import { View, Text,Image } from 'react-native'
import React from 'react'
import { useGetDataQuery } from '../../../Redux/Api/apiSlice'
import { ScrollView } from 'react-native-gesture-handler';



const homePage = () => {
 const {data}=useGetDataQuery();
   console.log('data', data)

  return (
    <ScrollView>
     {
      data.map((value:any)=>{
        return(
            <Image source={{uri:value.image}} style={{width:40,height:90}}/>
        )
      })
     }
    </ScrollView>
  )
}

export default homePage