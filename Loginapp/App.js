import React, { component } from 'react';
import Login from './app/screens/login';
import {Provider} from 'react-redux';
import configurestore from './app/store/Store';


function App() {
  return (
    <Provider store={store}>
    <Login />
    </Provider>
  )
};

export default App;