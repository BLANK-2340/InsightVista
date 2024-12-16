import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="bg-gray-800 text-white w-64 p-4 flex flex-col space-y-4">
      <Link to="/dashboard" className="hover:bg-gray-700 p-2 rounded">Dashboard</Link>
      <Link to="/upload" className="hover:bg-gray-700 p-2 rounded">Upload</Link>
      <Link to="/insights" className="hover:bg-gray-700 p-2 rounded">Insights</Link>
    </div>
  );
}
