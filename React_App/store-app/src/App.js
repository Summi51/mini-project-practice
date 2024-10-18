import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeStore from './pages/HomeStore'
import  Store from './pages/Store'
import Login from './pages/Login';
import Register from './pages/Register';
import PrivateRoute from './component/PrivateRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeStore />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<PrivateRoute><Store /></PrivateRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
