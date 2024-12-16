import React, { useEffect, useState } from 'react';
import api from '../services/api';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

export default function Dashboard() {
  const [datasets, setDatasets] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await api.get('/data/datasets');
      setDatasets(res.data);
    }
    fetchData();
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <div className="p-8">
          <h1 className="text-2xl font-bold mb-4">Your Datasets</h1>
          {datasets.length === 0 && <p>No datasets uploaded yet.</p>}
          <ul>
            {datasets.map(ds => (
              <li key={ds._id} className="border-b py-2">{ds.filename} - {new Date(ds.uploadedAt).toLocaleString()}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
