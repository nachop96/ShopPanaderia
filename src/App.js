import AppNavigation from './navigation/index';
import { Provider } from 'react-redux';
import React from 'react';
import store from './redux/index';

const App = () => {
  return (
    <Provider store={store}>
        <AppNavigation />
    </Provider>
  );
};

export default App;