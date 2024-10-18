import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeStore from './pages/HomeStore';
import Store from './pages/Store';
import Login from './pages/Login';
import Register from './pages/Register';
import PrivateRoute from './component/PrivateRoute';
import FavoritesPages from './pages/FavoritePages';
import CardPage from './pages/CardPage';
import NotAuthorized from './pages/NotAuthorized';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeStore />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/stores" element={<PrivateRoute><Store /></PrivateRoute>} />
        <Route path="/cardpage" element={<PrivateRoute isAdminRequired={true}><CardPage /></PrivateRoute>} />
        <Route path="/favorites" element={<PrivateRoute isAdminRequired={true}><FavoritesPages /></PrivateRoute>} />
        <Route path="/not-authorized" element={<NotAuthorized />} />
      </Routes>
    </Router>
  );
}

export default App;
