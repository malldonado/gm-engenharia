import React, { useState, useEffect } from "react";
import axios from "axios";
import "react-slideshow-image/dist/styles.css";

function BannerProjects() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:8000/posts/favorite");
      setData(response.data.data || []);
    };
    fetchData();
  }, []);
  return { data };
}

export default BannerProjects;
