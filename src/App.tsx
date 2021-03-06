import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserDashboard from './components/dashboard/UserDashboard';
import { Login } from './components/common/auth/Login';
import { Register } from './components/common/auth/Register';
import EmployeeDashboard from './components/dashboard/EmployeeDashboard';
import Cart from './components/dashboard/Cart';
import Navbar from './components/Navbar/Navbar';
import { Home } from './components/Home';
import { Product } from './components/dashboard/Product';
import { GlobalProvider } from './context/GlobalState';
//  import lb4Provider from 'react-admin-lb4';
//  import { Admin, Resource } from 'react-admin';
//  import CustomerList from './components/dashboard/CustomerList';
//  import CustomerOrders from './components/dashboard/CustomerOrders';
//  import Products from './components/dashboard/Products';

function App() {
  return (
      <div>
        <GlobalProvider>
          <Navbar/> 
          <BrowserRouter basename='/'>
              <Routes>
                <Route path='/' element={<Home/>} />
                <Route path="/employeedashboard" element={<EmployeeDashboard/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/dashboard" element={<UserDashboard/>} />
                <Route path='/cart' element={<Cart/>} />
                <Route path='product/:id' element={<Product/>} />
              </Routes>
          </BrowserRouter>
        </GlobalProvider> 

        
     {/* <Admin dataProvider={lb4Provider('megashopper.crt4qa9vzj3y.us-east-2.rds.amazonaws.com')}>
           <Resource name='customers' list={CustomerList} />
           <Resource name='orders' list={CustomerOrders} />      
           <Resource name='products' list={Products} />
           <Route path="/login" element={<Login/>} />

     </Admin> */}

             
    
      </div>
  );
}

export default App;
