import React from 'react';
import AddTask from './components/AddTask';
import { Provider } from 'react-redux';
import { store } from './store/index'

import  GlobalStyle from './global/style';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <AddTask />
    </Provider>
  );
}

export default App;
