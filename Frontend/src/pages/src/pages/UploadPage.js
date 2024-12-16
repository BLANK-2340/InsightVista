import React, { useState } from 'react';
import api from '../services/api';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

export default function UploadPage() {
  const [file, setFile] = useState(null);

  const handleUpload = async (e) => {
    e.preventDefault();
    if(!file) return;
    const formData = new FormData();
    formData.append('file', file);
    await api.post('/data/upload', formData, { headers: { 'Content-Type': 'multipart/form-data' } });
    alert('File uploaded successfully');
  };

  return (
    <div className="flex">
      <Sidebar/>
      <div className="flex-1">
        <Navbar/>
        <div className="p-8">
          <h1 className="text-2xl font-bold mb-4">Upload a Dataset</h1>
          <form onSubmit={handleUpload}>
            <input type="file" onChange={e => setFile(e.target.files[0])} className="mb-4" />
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Upload</button>
          </form>
        </div>
      </div>
    </div>
  );
}
