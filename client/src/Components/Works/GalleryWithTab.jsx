import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";

export function GalleryWithTab() {
  const [datawelding, setDatawelding] = useState([]);
  const [dataPlumbing, setDataPlumbing] = useState([]);
  const [dataElectrical, setDataElectrical] = useState([]);
  const [activeTab, setActiveTab] = useState("welding");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        if (activeTab === "welding") {
          const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/Wdbimage`);
          setDatawelding(response.data || []);
        } else if (activeTab === "electrical") {
          const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/Edbimage`);
          setDataElectrical(response.data || []);
        } else if (activeTab === "plumbing") {
          const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/Pdbimage`);
          setDataPlumbing(response.data || []);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchData();
  }, [activeTab]);

  const data = [
    {
      label: "Welding",
      value: "welding", 
      images: datawelding.map((url) => ({ 
        imageLink: `${import.meta.env.VITE_CLOUDINARY_BASE_URL}/${url}` 
      })),
    },
    {
      label: "Electrical",
      value: "electrical",
      images: dataElectrical.map((url) => ({ 
        imageLink: `${import.meta.env.VITE_CLOUDINARY_BASE_URL}/${url}` 
      })),
    },
    {
      label: "Plumbing",
      value: "plumbing", 
      images: dataPlumbing.map((url) => ({ 
        imageLink: `${import.meta.env.VITE_CLOUDINARY_BASE_URL}/${url}` 
      })),
    },
  ];

  return (
    <div id="works" className="flex items-center justify-center ">
          <Tabs value={activeTab} className="p-4 pt-20" >
      <TabsHeader>
        {data.map(({ label, value }) => (
          <Tab 
            key={value} 
            value={value}
            onClick={() => setActiveTab(value)} 
            className="text-gray-800 font-semibold hover:bg-gray-200 p-1"
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {isLoading ? (
          <div className="flex justify-center items-center h-40">
            <p>Loading...</p>
          </div>
        ) : (
          data.map(({ value, images }) => (
            <TabPanel key={value} value={value}>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4 p-4">
                {images?.length > 0 ? (
                  images.map(({ imageLink }, index) => (
                    <div key={index}>
                      <img
                        className=" h-40 md:h-64 w-full max-w-full rounded-lg object-cover object-center"
                        src={imageLink}
                        alt={`${value} work sample ${index}`}
                        
                      />
                    </div>
                  ))
                ) : (
                  <div className="col-span-3 text-center py-10">
                    <p>No images found for {value}</p>
                  </div>
                )}
              </div>
            </TabPanel>
          ))
        )}
      </TabsBody>
    </Tabs>

    </div>
  );
}