import logo from './logo.svg';
import './App.css';
import React from 'react';
import lb4Provider from 'react-admin-lb4';
import { Admin, Resource } from 'react-admin';
import CustomerList from './components/dashboard/CustomerList';

function App() {
  return (
    <><Admin dataProvider={lb4Provider('http//localhost:5000')}>
      <Resource name='customers' list={CustomerList} />
    </Admin>
    
    <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div></>
  );
}

export default App;
