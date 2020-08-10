import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import Routes from './routes';

import { DatabaseInit } from './database';
import { Provider } from 'react-redux';
import { store } from './store';

export default function App() {
  useEffect(() => {
    new DatabaseInit();
  }, []);

  return (
    <Provider store={store}>
      <Routes />
      <StatusBar style="auto" />
    </Provider>
  );
}
