import React, { useState } from "react";
import axios from "axios";

function useMessage() {
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/contact", formData);
      console.log("Form data submitted successfully");
      setSuccess(true);
      setFormData({name: ''});
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleSendMessage = () => {
    setSuccess(true);
  };
  return {success, formData, handleChange, handleSubmit, handleSendMessage}
}

export default useMessage