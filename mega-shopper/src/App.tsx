import logo from './logo.svg';
import './App.css';
import React from 'react';
// import lb4Provider from 'react-admin-lb4';
import { Admin, Resource } from 'react-admin';

// import CustomerList from './components/dashboard/CustomerList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserDashboard from './components/dashboard/UserDashboard';
import { Login } from './components/dashboard/common/auth/Login';
import { Register } from './components/dashboard/common/auth/Register';

function App() {
  return (
      <div className="App">
    {/* <Admin dataProvider={lb4Provider('http//localhost:5000')}>
      <Resource name='customers' list={CustomerList} />
    </Admin> */}
  
  <BrowserRouter>
    <Routes>
      <Route path="/register" element={<Register/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/dashboard" element={<UserDashboard/>} />
    </Routes>
  </BrowserRouter>
       
      </div>

import CustomerList from './components/dashboard/CustomerList';
import CustomerOrders from './components/dashboard/CustomerOrders';
import Products from './components/dashboard/Products';

function App() {
  return (
    <><Admin dataProvider={lb4Provider('http//localhost:5000')}>
      <Resource name='Customers' list={CustomerList} />
      <Resource name='Orders' list={CustomerOrders} />
      <Resource name='Products' list={Products} />
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
