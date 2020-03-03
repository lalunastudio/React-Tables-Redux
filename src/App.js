import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Table from './components/Table';
import rootReducer from './reducers/table';

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Table Render Test</h1>
        <Table />
      </div>
    </Provider>
  );
}

export default App;
