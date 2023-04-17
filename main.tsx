import {View, Text} from 'react-native';
import React from 'react';
import App from './App';
import {Provider} from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store,} from './src/Redux/store';

const Main = () => {
  return (
    <Provider store={store}>
      {/* <ApiProvider api={productApi}> */}
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>

      {/* </ApiProvider> */}
    </Provider>
  );
};

export default Main;
