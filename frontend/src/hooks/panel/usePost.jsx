import { useState, useEffect } from "react";
import axios from "axios";

function usePost() {
  const [formData, setFormData] = useState({ title: "", file: null });
  const [info, setInfo] = useState([]);
  const [status, setStatus] = useState({ type: null, message: null });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const deleteProject = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/posts/${id}`);
      setInfo(info.filter((project) => project._id !== id));
      setStatus({ type: "success", message: "Data deleted successfully!" });
    } catch (error) {
      console.error("Error deleting data:", error);
      setStatus({
        type: "error",
        message: "Error deleting data. Please try again.",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataObj = new FormData();
    formDataObj.append("title", formData.title);
    formDataObj.append("file", formData.file);

    try {
      await axios.post("http://localhost:8000/posts", formDataObj, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setFormData({ title: "", file: null });
      setStatus({
        type: "success",
        message: "Information updated successfully!",
      });
      const response = await axios.get("http://localhost:8000/posts");
      setInfo(response.data.data);
    } catch (error) {
      console.error("Error sending data:", error);
      setStatus({
        type: "error",
        message: "Error updating information. Please try again.",
      });
    }
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:8000/posts");
        setInfo(response.data.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, []);

  const toggleFavorite = async (itemId, isFavorited) => {
    try {
      // Unset the favorite icon from all posts
      const updatedInfo = info.map((post) =>
        post._id === itemId
          ? { ...post, favorited: !isFavorited }
          : { ...post, favorited: false }
      );

      setInfo(updatedInfo);

      const response = await axios.post(
        `http://localhost:8000/posts/${itemId}/favorite`,
        {
          favorited: !isFavorited,
        }
      );

      setSelectedItemId(itemId);
    } catch (error) {
      console.error("Error toggling favorite:", error);
    }
  };

  return {
    formData,
    info,
    status,
    handleChange,
    deleteProject,
    handleSubmit,
    toggleFavorite,
  };
}

export default usePost;