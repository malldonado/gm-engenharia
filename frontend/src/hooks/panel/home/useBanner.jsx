import { useState, useEffect } from "react";
import axios from "axios";

function useBanner() {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    facebook: "",
    instagram: "",
    twitter: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [postsResponse, socialMediaResponse] = await Promise.all([
          axios.get("https://gtm-backend.vercel.app/posts"),
          axios.get("https://gtm-backend.vercel.app/user-update"),
        ]);
        
        setData(postsResponse.data.data || []);
        const socialMediaData = socialMediaResponse.data;
        setFormData({
          facebook: socialMediaData.facebook || "",
          instagram: socialMediaData.instagram || "",
          twitter: socialMediaData.twitter || "",
        });
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const zoomInProperties = {
    scale: 1.4,
  };

  return {
    data,
    formData,
    zoomInProperties,
    setFormData,
    isLoading,
    error,
  };
}

export default useBanner;
