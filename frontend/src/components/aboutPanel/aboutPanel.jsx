import React, { useState, useEffect } from "react";
import axios from "axios";

function AboutPanel() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://gtm-backend.vercel.app/about/latest");
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
      console.error("Erro ao enviar os dados:", error);
      setStatus("error");
    }
  };

  return (
    <form
      className="md:w-4/5 w-[90%] mt-6 mx-auto flex-col flex gap-y-5"
      onSubmit={handleSubmit}
    >
      <div className="sm:col-span-6 mt-1">
        <label className="block text-sm font-medium leading-6 text-gray-900">
          Title
        </label>
        <div className="mt-2">
          <div className="flex rounded-md w-full shadow-sm ring-1 ring-inset ring-gray-300 bg-white outline-none px-2">
            <input
              name="title"
              id="title"
              className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 outline-none w-full font-medium"
              placeholder="About us"
              required
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="sm:col-span-6 mt-1">
        <label className="block text-sm font-medium leading-6 text-gray-900">
          Description
        </label>
        <div className="mt-2">
          <div className="flex rounded-md w-full shadow-sm ring-1 ring-inset ring-gray-300 bg-white outline-none px-2">
            <textarea
              type="text"
              name="description"
              id="description"
              className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 outline-none w-full font-medium h-32 overflow-y-scroll"
              required
              value={text}
              onChange={handleTextChange}
              onKeyPress={handleKeyPress}
            />
          </div>
        </div>
      </div>
      <div>
        <input
          className="block w-full text-sm text-gray-900 cursor-pointer dark:text-black focus:outline-none"
          id="file_input"
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
        />
      </div>
      <button className="w-24 h-10 bg-black rounded-md text-white font-medium hover:bg-[#2563eb]">
        Update
      </button>
      {status === "success" && (
        <div className="text-green-600 font-medium">
          Information updated successfully!
        </div>
      )}
      {status === "error" && (
        <div className="text-red-600 font-medium">
          Error updating information. Please try again.
        </div>
      )}
    </form>
  );
}

export default AboutPanel;
