import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify styles
import './Register.css'; 
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [userData, setUserData] = useState({
    name: '',
    gender: '',
    email: '',
    password: '',
    isAdmin: false
  });
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://dalocalprojectbackend.vercel.app/users/register', userData);

      if (response.status === 200) {
        toast.success(`Registration successful! Welcome, ${userData.name}. You can now log in.`);
        navigate('/login')
      } else {
        toast.success('Registration successful! Please log in.');
        navigate('/login')

      }

    } catch (error) {
      if (error.response && error.response.data && error.response.data.err) {
        toast.error(`Registration failed: something went wrong`);
      } else {
        toast.error('An unexpected error occurred. Please try again later.');
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Register</h2>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
        <input type="text" name="gender" placeholder="Gender" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <input type="text" name="isAdmin" placeholder="Provide true or false for admin status" onChange={handleChange} required />
        <button type="submit">Register</button>
      </form>

      <ToastContainer 
        position="top-right"
        autoClose={3000}  
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default Register;
