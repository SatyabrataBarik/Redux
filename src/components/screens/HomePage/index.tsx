import {View, Text, Image, FlatList} from 'react-native';
import React from 'react';
import {useGetDataQuery} from '../../../Redux/Api/apiSlice';
import {ScrollView} from 'react-native-gesture-handler';

const HomePage = () => {
  const {data} = useGetDataQuery();

  const renderELement = ({item}: {item: any}) => {
    return (
      <View
        style={{
          margin: 34,
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#ffffff',
          padding:30,

        }}>
        <Image source={{uri: item.image}} style={{height: 60, width: 60}} />
        <Text style={{marginLeft: 23, color: '#000000'}}>
          {item.title.substring(0, 20) + '....'}
        </Text>
      </View>
    );
  };
  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderELement}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default HomePage;
