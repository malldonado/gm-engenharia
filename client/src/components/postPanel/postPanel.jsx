import React, { useState, useEffect } from "react";
import { IoCloseSharp } from "react-icons/io5";
import axios from "axios";

function PostPanel() {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState(null);
  const [info, setInfo] = useState([]);
  // const [postData, setPostData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/posts");
        setInfo(response.data.data);
      } catch (error) {
        console.error("Error fetching latest data:", error);
      }
    };
    fetchData();
  }, []);

  const deleteProject = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/posts/${id}`);
      infoData(info.filter((project) => project._id !== id));
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("file", file);

      const response = await axios.post("http://localhost:8000/posts", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      // console.log(response)
      setStatus("success");
    } catch (error) {
      console.error("Error sending data:", error);
      setStatus("error");
    }
  };
  
  const handleTextChange = (e) => {
    setTitle(e.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="block w-full">
      <form
        className="md:w-4/5 w-[90%] mt-6 mx-auto flex-col flex gap-y-5"
        onSubmit={handleSubmit}
      >
        <div className="sm:col-span-6 mt-1">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Banner title
          </label>
          <div className="mt-2">
            <div className="flex rounded-md w-full shadow-sm ring-1 ring-inset ring-gray-300 bg-white outline-none px-2">
              <input
                name="title"
                id="title"
                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 outline-none w-full font-medium"
                placeholder="Title of the banner"
                required
                type="text"
                value={title}
                onChange={handleTextChange}
              />
            </div>
          </div>
        </div>
        <div>
          <input
            className="block w-full text-sm text-gray-900 cursor-pointer dark:text-black focus:outline-none"
            id="file_input"
            type="file"
            onChange={handleFileChange}
          />
        </div>

        <button className="w-24 h-10 bg-black rounded-md text-white font-medium hover:bg-[#2563eb]" type="submit">
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:w-4/5 w-[90%] mt-6 mx-auto">
        {info.map((item, index) => (
          <div key={index} className="flex w-full mt-6 mx-auto">
            <div className="w-full">
                {item.title && <h1 className="text-black text-md z-10 mb-3">Title: {item.title}</h1>}
              <div className="w-full h-[200px] relative">
                <IoCloseSharp className="absolute text-[30px] top-0 right-0 text-red-500 cursor-pointer z-10" onClick={() => deleteProject(item._id)} />
                {item.image && <img className="relative w-full md:h-full h-full object-cover" src={`http://localhost:8000/uploads/${item.image}`} alt="" />}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostPanel;
