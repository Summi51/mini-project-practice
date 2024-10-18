import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './HomeStore.css'; // Optional CSS

function HomeStore() {
  const [stores, setStores] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem('token'); // Check if token exists

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const response = await axios.get('http://localhost:8080/stores');
        setStores(response.data);
      } catch (error) {
        console.error('Error fetching stores:', error);
      }
    };

    fetchStores();
  }, []);

  // Handle logout and clear the token
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login'); // Redirect to login after logout
  };

  // Handle Store button click
  const handleStoreAccess = () => {
    if (token) {
      // If user is logged in, navigate to the store page
      navigate('/store');
    } else {
      // If not logged in, alert and navigate to login page
      alert('Please login first to access the store!');
      navigate('/login');
    }
  };

  return (
    <div className="home-container">
      <h1>Welcome to the Stores</h1>
      <ul>
        {stores.map((store) => (
          <li key={store._id}>{store.title}</li>
        ))}
      </ul>

      <div className="button-container">
        {!token ? (
          <>
            <Link to="/register">
              <button className="register-button">Register</button>
            </Link>
            <Link to="/login">
              <button className="login-button">Login</button>
            </Link>
            <button onClick={handleStoreAccess} className="store-button">
              Store
            </button>
          </>
        ) : (
          <>
            <button onClick={handleStoreAccess} className="store-button">
              Store
            </button>
            <button onClick={handleLogout} className="logout-button">Logout</button>
          </>
        )}
      </div>
    </div>
  );
}

export default HomeStore;
