import { useState, useEffect } from "react";
import axios from "axios";
import { Loader, AlertTriangle } from "lucide-react";
import "../../App.css";

function Price() {
  const [data, setData] = useState({
    loading: true,
    tables: [],
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/scrape-table`);
        
        if (response.data.tables && response.data.tables.length > 0) {
          setData({
            loading: false,
            tables: response.data.tables,
            error: null,
          });
        } else {
          setData({
            loading: false,
            tables: [],
            error: "No data available",
          });
        }
      } catch (error) {
        setData({
          loading: false,
          tables: [],
          error: error.message,
        });
      }
    };

    fetchData();
  }, []);

  if (data.loading)
    return (
      <div className="flex justify-center items-center h-64">
        <Loader className="animate-spin w-8 h-8 text-gray-500" />
      </div>
    );

  if (data.error)
    return (
      <div className="flex justify-center items-center h-64 text-red-500">
        <AlertTriangle className="w-6 h-6 mr-2" /> Error: {data.error}
      </div>
    );

  return (
    <section id="price" className="pt-20 mx-4">
      <div className="container mx-auto py-6 px-0 md:px-6 bg-white shadow-lg rounded-xl">
        <h1 className="text-4xl font-extrabold text-center mb-6 text-gray-800">Latest Market Prices</h1>
        <p className="text-center text-gray-600 mb-4">Stay updated with the latest price trends.</p>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse overflow-hidden shadow-lg rounded-lg">
            <thead className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
              <tr>
                <th className="px-7 md:px-3 py-3  text-lg">Variety</th>
                <th className="px-3 py-3  text-lg">Quantity</th>
                <th className="px-3 py-3  text-lg">Price Today</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data.tables.map((item, index) => (
                <tr key={index} className="hover:bg-gray-100 transition">
                  <td className="px-0 md:px-6 py-4 text-gray-700 text-center text-sm md:text-lg">{item.Variety || "N/A"}</td>
                  <td className="pl-6 md:px-6 py-4 text-gray-700 text-center text-sm md:text-lg">{item.Quantity || "N/A"}</td>
                  <td className="px-0 md:px-6 py-4 text-gray-700 text-center text-sm md:text-lg font-semibold">{item["Price Today"] || "N/A"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default Price;