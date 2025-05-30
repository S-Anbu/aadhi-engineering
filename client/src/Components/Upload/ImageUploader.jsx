import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ImageUploader = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);
  const [dashboardData, setDashboardData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/auth', {
          withCredentials: true,
        });
        setDashboardData(response.data);
      } catch (err) {
        setError(err.response?.data?.message || 'Authentication failed');
        if (err.response?.status === 401) {
          navigate('/login');
        }
      }
    };

    fetchDashboardData();
  }, [navigate]);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    setUploading(true);
    setError(null);

    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('upload_preset', 'aadhi-engineering');

    try {
      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/anbumani/image/upload',
        formData
      );
      setImageUrl(response.data.secure_url);
      setSelectedFile(null);
       const resp =await axios.post(`http://localhost:3000/api/urlUpload`,{imageUrl: response.data.secure_url}, {withCredentials:true})
       setError(resp.data?.message);
       return
    } catch (err) {
      setError('Failed to upload image.');
    } finally {
      setUploading(false);
    }
  };

  const handleCancel = () => {
    setSelectedFile(null);
    setImageUrl(null);
  };

  if (error && !dashboardData) {
    return <div className="text-red-500 mt-32 text-center">{error}</div>;
  }

  if (!dashboardData) {
    return <div className="text-center mt-32">Loading...</div>;
  }

  return (
    <div className="flex items-center justify-center min-h-[80vh] px-4">
      <div className="w-full max-w-xl bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center">
        <h2 className="text-2xl font-semibold mb-6 text-center">Upload Image</h2>

        <label className="w-full border-2 border-dashed border-gray-300 rounded-xl bg-gray-50 hover:bg-gray-100 cursor-pointer p-6 flex flex-col items-center text-center transition-all">
          <input
            type="file"
            accept='image/*'
            onChange={handleFileChange}
            className="hidden"
          />
          <svg
            className="w-10 h-10 text-gray-400 mb-2"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7 16V4a1 1 0 011-1h8a1 1 0 011 1v12m-4-4l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
          <p className="text-gray-600">
            {selectedFile ? selectedFile.name : 'Click to select an image'}
          </p>
        </label>

        {selectedFile && (
          <div className="flex gap-4 mt-6">
            <button
              onClick={handleUpload}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition"
              disabled={uploading}
            >
              {uploading ? 'Uploading...' : 'Upload'}
            </button>
            <button
              onClick={handleCancel}
              className="bg-gray-300 hover:bg-gray-400 text-black font-medium py-2 px-4 rounded-lg transition"
            >
              Cancel
            </button>
          </div>
        )}

        {imageUrl && (
          <div className="mt-8 text-center">
          
            <p className="text-sm text-gray-600 mb-2">Uploaded Image:</p>
            <img
              src={imageUrl}
              alt="Uploaded"
              className="w-48 h-auto rounded-xl shadow"
            />
            <button
              onClick={handleCancel}
              className="bg-gray-300 hover:bg-gray-400 text-black font-medium py-2 px-4 rounded-lg transition"
            >
              Cancel
            </button>
          </div>
        )}

        {error && (
          <p className="mt-4 text-center text-red-500 text-sm">{error}</p>
        )}
      </div>
    </div>
  );
};

export default ImageUploader;
