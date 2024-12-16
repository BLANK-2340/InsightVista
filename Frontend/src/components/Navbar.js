import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function Navbar() {
  const { logout } = useContext(AuthContext);
  
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <Link to="/dashboard" className="font-bold">InsightVista</Link>
      <button onClick={logout} className="bg-red-500 px-3 py-1 rounded">Logout</button>
    </nav>
  );
}
