import React, { useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post('/auth/register', { email, password });
    navigate('/login');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 shadow rounded">
        <h1 className="text-2xl mb-4">Register</h1>
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
        <button className="bg-blue-500 text-white py-2 px-4 rounded w-full">Register</button>
      </form>
    </div>
  );
}
