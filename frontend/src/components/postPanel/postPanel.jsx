import { useState, useEffect } from "react";
import { IoCloseSharp } from "react-icons/io5";
import axios from "axios";
import { FaStar as FaStarRegular } from "react-icons/fa6";

function PostPanel() {
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
                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 outline-none w-full font-medium"
                placeholder="Title of the banner"
                required
                type="text"
                value={formData.title}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div>
          <input
            className="block w-full text-sm text-gray-900 cursor-pointer dark:text-black focus:outline-none"
            name="file"
            type="file"
            onChange={handleChange}
          />
        </div>
        <button
          className="w-24 h-10 bg-black rounded-md text-white font-medium hover:bg-[#2563eb]"
          type="submit"
        >
          Update
        </button>
        {status.message && (
          <div
            className={`text-${
              status.type === "success" ? "green" : "red"
            }-600 font-medium`}
          >
            {status.message}
          </div>
        )}
      </form>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:w-4/5 w-[90%] mt-6 mx-auto">
        {info.map((item) => (
          <div key={item._id} className="flex w-full mt-6 mx-auto">
            <div className="w-full">
              {item.title && (
                <h1 className="text-black text-md z-10 mb-3">{item.title}</h1>
              )}
              <div className="w-full h-[200px] relative">
                <IoCloseSharp
                  className="absolute text-[30px] top-0 right-0 text-red-500 cursor-pointer z-10"
                  onClick={() => deleteProject(item._id)}
                />
                <FaStarRegular
                  className={`absolute text-[25px] top-7 right-[2px] cursor-pointer z-10 ${
                    item.favorited ? "text-yellow-500" : "text-blue-500"
                  }`}
                  onClick={() => toggleFavorite(item._id, item.favorited)}
                />

                {item.image && (
                  <img
                    className="relative w-full md:h-full h-full object-cover hover:opacity-65 cursor-pointer"
                    src={`http://localhost:8000/uploads/${item.image}`}
                    alt=""
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostPanel;
