import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserDashboard from './components/dashboard/UserDashboard';
import { Login } from './components/dashboard/common/auth/Login';
import { Register } from './components/dashboard/common/auth/Register';

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/register" element={<Register/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/dashboard" element={<UserDashboard/>} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
