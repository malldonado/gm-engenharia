import { useState, useEffect } from "react";
import axios from "axios";

function useAbout() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://gtm-backend.vercel.app/about/latest");
        setTitle(response.data.title);
        setText(response.data.text);
        setData(response.data);
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
        setText((prevText) => prevText + "\n");
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
        "https://gtm-backend.vercel.app/about",
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
      console.error("Error updating information:", error);
      setStatus("error");
    }
  };

  const renderParagraphs = (text) => {
    const paragraphs = text.split("\n");
    return paragraphs.map((paragraph, index) => (
      <p key={index} style={{ marginBottom: "5px" }}>{paragraph}</p>
    ));
  };

  return {
    title,
    text,
    file,
    status,
    data,
    setTitle,
    setText,
    setFile,
    handleTextChange,
    handleKeyPress,
    handleSubmit,
    renderParagraphs
  };
}

export default useAbout;
