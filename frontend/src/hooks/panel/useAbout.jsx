import React, { useState, useEffect } from "react";
import axios from "axios";

function useAbout() {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [file, setFile] = useState(null);
    const [status, setStatus] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get("http://localhost:8000/about/latest");
          const { title, text } = response.data;
          setTitle(title);
          setText(text);
        } catch (error) {
          console.error("Error fetching latest data:", error);
        }
      };
      fetchData();
    }, []);
  
    const handleTextChange = (e) => {
      setText(e.target.value);
    };
  
    const handleKeyPress = (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        setText(text + "\n");
      }
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("text", text);
        formData.append("file", file);
  
        const response = await axios.put(
          "http://localhost:8000/about",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log("Response:", response.data);
        setStatus("success");
      } catch (error) {
        console.error("Erro ao enviar os dados:", error);
        setStatus("error");
      }
    };

    return { title, text, file, status, handleTextChange, handleKeyPress, handleSubmit }
}

export default useAbout