import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './HomeStore.css'; 

function HomeStore() {
  const [stores, setStores] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem('token'); 

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const response = await axios.get('https://dalocalprojectbackend.vercel.app/stores');
        setStores(response.data);
      } catch (error) {
        console.error('Error fetching stores:', error);
      }
    };

    fetchStores();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('isAdmin')
    navigate('/login'); 
  };

  const handleStoreAccess = () => {
    if (token) {
      navigate('/stores');
    } else {
      alert('Please login first to access the store!');
      navigate('/login');
    }
  };

  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to the Stores</h1>

      <div className="stores-container">
        {stores.map((store) => (
          <div key={store._id} className="store-card">
            <h2>{store.title}</h2>
            <p>{store.description}</p>
            <button className="visit-store-button" onClick={() => navigate(`/stores/${store._id}`)}>Visit Store</button>
          </div>
        ))}
      </div>

      <h2 className="home-title">Navigate to Other Pages</h2>
      <div className="page-buttons-container">
        <Link to="/cardpage">
          <button className="custom-button">Card Page</button>
        </Link>
        <Link to="/favorites">
          <button className="custom-button">Favorites Page</button>
        </Link>
        <Link to="/stores">
          <button className="custom-button">Stores Page</button>
        </Link>
        <Link to="/register">
          <button className="custom-button">Register</button>
        </Link>
        <Link to="/login">
          <button className="custom-button">Login</button>
        </Link>
      </div>

      <div className="button-container">
        {!token ? (
          <>
            <button onClick={handleStoreAccess} className="custom-button store-button">
              Access Store
            </button>
          </>
        ) : (
          <>
            <button onClick={handleStoreAccess} className="custom-button store-button">
              Access Store
            </button>
            <button onClick={handleLogout} className="custom-button logout-button">Logout</button>
          </>
        )}
      </div>
    </div>
  );
}

export default HomeStore;
