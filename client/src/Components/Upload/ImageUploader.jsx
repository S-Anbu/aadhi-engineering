import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ImageUploader = () => {
  const [imageUrl, setImageUrl] = useState(null); // for preview or uploaded URL
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);
  const [dashboardData, setDashboardData] = useState(null);
  const [category, setCategory] = useState(''); // 'welding', 'plumbing', 'electrical'
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/auth`, {
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

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setSelectedFile(null);
    setImageUrl(null);
    setError(null);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    if (file) {
      setImageUrl(URL.createObjectURL(file)); // Show preview before upload
    }
  };

  const handleUpload = async () => {
    if (!selectedFile || !category) {
      setError('Please select a category and a file.');
      return;
    }

    setUploading(true);
    setError(null);

    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('upload_preset', 'aadhi-engineering');

    try {
      const response = await axios.post(`${import.meta.env.VITE_cloud_URL}`, formData);
      const cloudUrl = response.data.secure_url;
      setImageUrl(cloudUrl); // Replace preview with real uploaded URL
      setSelectedFile(null);

      let endpoint = '';

      // Category-based endpoint
      if (category === 'welding') endpoint = '/api/uploadWelding';
      else if (category === 'plumbing') endpoint = '/api/uploadPlumbing';
      else if (category === 'electrical') endpoint = '/api/uploadElectrical';

      const resp = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}${endpoint}`,
        { imageUrl: cloudUrl },
        { withCredentials: true }
      );

      setError(resp.data?.message);
    } catch (err) {
      setError('Failed to upload image.');
    } finally {
      setUploading(false);
    }
  };

  const handleCancel = () => {
    setSelectedFile(null);
    setImageUrl(null);
    setError(null);
  };

  if (error && !dashboardData) {
    return <div className="text-red-500 mt-32 text-center min-h-[70vh]">{error}</div>;
  }

  if (!dashboardData) {
    return <div className="text-center mt-32">Loading...</div>;
  }

  return (
    <div className="flex items-center justify-center mt-14 min-h-[80vh] px-4">
      <div className="w-full max-w-xl bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center">
        <h2 className="text-2xl font-semibold mb-6 text-center">Upload Image</h2>

        {/* Category Selector */}
        <select
          value={category}
          onChange={handleCategoryChange}
          className="w-full mb-6 p-3 border border-gray-300 rounded-lg"
        >
          <option value="">Select Category</option>
          <option value="welding">Welding</option>
          <option value="plumbing">Plumbing</option>
          <option value="electrical">Electrical</option>
        </select>

        {/* Uploader only if category is selected */}
        {category && (
          <>
            <label className="w-full border-2 border-dashed border-gray-300 rounded-xl bg-gray-50 hover:bg-gray-100 cursor-pointer p-6 flex flex-col items-center text-center transition-all">
              <input
                type="file"
                accept="image/*"
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

            {/* Buttons */}
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
          </>
        )}

        {/* Image Preview / Uploaded Image */}
        {imageUrl && (
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600 mb-2">
              {selectedFile ? 'Image Preview:' : 'Uploaded Image:'}
            </p>
            <img
              src={imageUrl}
              alt="Preview"
              className="w-50 h-40 rounded-xl shadow"
            />
            
          </div>
        )}

        {/* Error Message */}
        {error && (
          <p className="mt-4 text-center text-red-500 text-sm">{error}</p>
        )}
      </div>
    </div>
  );
};

export default ImageUploader;
