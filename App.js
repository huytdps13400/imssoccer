import React from 'react';
import {Provider} from 'react-redux';
import RootStack from './src/navigation/RootStack';
import store from './src/redux/store';
const App = () => {
  return (
    <Provider store={store}>
      <RootStack />
    </Provider>
  );
};

export default App;
