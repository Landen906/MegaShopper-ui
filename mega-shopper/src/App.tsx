import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserDashboard from './components/dashboard/UserDashboard';
import { Login } from './components/common/auth/Login';
import { Register } from './components/common/auth/Register';
import EmployeeDashboard from './components/dashboard/EmployeeDashboard';
import Cart from './components/dashboard/Cart';

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/employeedashboard" element={<EmployeeDashboard/>}/>
            <Route path="/register" element={<Register/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/dashboard" element={<UserDashboard/>} />
            <Route path='/cart' element={<Cart/>} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
