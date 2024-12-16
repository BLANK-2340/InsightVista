import React, { useState, useEffect } from 'react';
import api from '../services/api';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { Bar } from 'react-chartjs-2';

export default function InsightsPage() {
  const [datasets, setDatasets] = useState([]);
  const [selectedDataset, setSelectedDataset] = useState('');
  const [dataContent, setDataContent] = useState(null);
  const [insights, setInsights] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await api.get('/data/datasets');
      setDatasets(res.data);
    }
    fetchData();
  }, []);

  const handleDatasetSelect = async (e) => {
    const dsId = e.target.value;
    setSelectedDataset(dsId);
    if(dsId) {
      const res = await api.get(`/data/data/${dsId}`);
      setDataContent(res.data);
    } else {
      setDataContent(null);
    }
  };

  const handleGetInsights = async () => {
    const res = await api.get('/insights');
    setInsights(res.data.insights);
  };

  const chartData = {
    labels: dataContent ? dataContent.map((d, i) => `Item ${i+1}`) : [],
    datasets: [
      {
        label: 'Value',
        data: dataContent ? dataContent.map(item => item.value) : [],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      }
    ]
  };

  return (
    <div className="flex">
      <Sidebar/>
      <div className="flex-1">
        <Navbar />
        <div className="p-8">
          <h1 className="text-2xl font-bold mb-4">Insights</h1>
          <select onChange={handleDatasetSelect} value={selectedDataset} className="border p-2 mb-4">
            <option value="">Select a dataset</option>
            {datasets.map(ds => (
              <option key={ds._id} value={ds._id}>{ds.filename}</option>
            ))}
          </select>

          {dataContent && (
            <div className="mb-4">
              <h2 className="text-xl mb-2">Chart</h2>
              <Bar data={chartData} />
            </div>
          )}

          <button onClick={handleGetInsights} className="bg-green-500 text-white px-4 py-2 rounded">Get Insights</button>
          
          {insights && (
            <ul className="mt-4">
              {insights.map((ins, idx) => <li key={idx} className="border-b py-2">{ins}</li>)}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
