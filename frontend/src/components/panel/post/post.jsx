import { IoCloseSharp } from "react-icons/io5";
import { FaStar as FaStarRegular } from "react-icons/fa6";
import usePost from "../../../hooks/panel/usePost";

function Post() {
  const {
    formData,
    info,
    status,
    handleChange,
    deleteProject,
    handleSubmit,
    toggleFavorite,
  } = usePost();

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

export default Post;
