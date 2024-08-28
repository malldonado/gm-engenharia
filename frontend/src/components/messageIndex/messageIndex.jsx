import React, { useState } from "react";
import { IoMdArrowForward } from "react-icons/io";
import axios from "axios";

function MessageIndex() {
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

  return (
    <div className="max-w-[1010px] md:flex md:justify-center md:items-top text-white mx-auto md:mt-[200px] px-4 md:px-0">
      <div className="md:w-[45%] md:pr-5 ml-4 xl:ml-0">
        <span className="text-center md:text-[60px] text-[40px] leading-tight">
          {"LET'S DISCUSS"}
          <br /> NEXT PROJECT
        </span>
        <span className="block md:mt-5 md:text-[18px] opacity-70 mb-10 md:mb-0 mt-4">
          Ready to move forward with your construction project? Send us an email
          today to start turning your vision into reality, with expertise and
          commitment.
        </span>
      </div>
      <div className="md:w-[50%] overflow-hidden">
        <form
          className="max-w-[100%] md:ml-5 overflow-hidden"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            className="h-[50px] w-full border-2 border-[#bbb9b9] bg-transparent p-2 outline-none mb-5 placeholder:opacity-80 font-medium text-white"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="text"
            className="h-[50px] w-full border-2 border-[#bbb9b9] bg-transparent p-2 outline-none mb-5 placeholder:opacity-80 font-medium text-white"
            placeholder="Enter your email address"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="number"
            className="h-[50px] w-full border-2 border-[#bbb9b9] bg-transparent p-2 outline-none mb-5 placeholder:opacity-80 font-medium text-white overflow-hidden"
            placeholder="Enter your mobile number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <textarea
            className="w-full h-[150px] bg-transparent outline-none border-2 border-[#bbb9b9] p-2 resize-none placeholder:opacity-80 font-medium text-white"
            placeholder="Enter your message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          <button
            className="flex justify-center items-center text-white bg-[#af9155] hover:bg-[#7d5e21] transition duration-150 ease-in-out h-[50px] w-[160px] mt-5"
            onClick={handleSendMessage}
          >
            Send
            <IoMdArrowForward />
          </button>
          {success && (
            <div className="text-white mb-3 text-xl mt-4">
              Thank you for reaching out, we will be in touch!
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default MessageIndex;
