import logo from './logo.svg';
import './App.css';
import React from 'react';
import lb4Provider from 'react-admin-lb4';
import { Admin, Resource } from 'react-admin';
import CustomerList from './components/dashboard/CustomerList';
import CustomerOrders from './components/dashboard/CustomerOrders';
import Products from './components/dashboard/Products';
import EmployeeDashboard from './components/dashboard/EmployeeDashboard';

function App() {
  return (

    
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
      </div>
  );
}

export default App;
