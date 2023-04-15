import {View, Text} from 'react-native';
import React from 'react';
import App from '../App';
import {Provider} from 'react-redux';
import {store} from './Redux/store';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { processColor } from 'react-native-reanimated';
import { productApi } from './components/Api/api';

const Main = () => {
  return (
    <Provider store={store}>
    {/* <ApiProvider api={productApi}> */}
  
      <App />
      {/* </ApiProvider> */}
     </Provider>
  
     
  );
};

export default Main;
