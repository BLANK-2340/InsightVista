import React, { useState, useContext } from 'react';
import api from '../services/api';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await api.post('/auth/login', { email, password });
    login(res.data.token);
    navigate('/dashboard');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 shadow rounded">
        <h1 className="text-2xl mb-4">Login</h1>
        <input 
          type="email" 
          placeholder="Email" 
          className="border w-full p-2 mb-4"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input 
          type="password" 
          placeholder="Password"
          className="border w-full p-2 mb-4"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button className="bg-blue-500 text-white py-2 px-4 rounded w-full">Login</button>
      </form>
    </div>
  );
}
