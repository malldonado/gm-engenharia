import useAbout from "../../../hooks/panel/useAbout";

function About() {
  const { title, text, file, setTitle, setText, setFile, handleSubmit, status } = useAbout();

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleTextChange = (e) => setText(e.target.value);
  const handleFileChange = (e) => setFile(e.target.files[0]);

  return (
    <form
      className="md:w-4/5 w-[90%] mt-6 mx-auto flex-col flex gap-y-5"
      onSubmit={handleSubmit}
    >
      {/* Title Field */}
      <div className="sm:col-span-6 mt-1">
        <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
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
              onChange={handleTitleChange}
            />
          </div>
        </div>
      </div>

      {/* Description Field */}
      <div className="sm:col-span-6 mt-1">
        <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
          Description
        </label>
        <div className="mt-2">
          <div className="flex rounded-md w-full shadow-sm ring-1 ring-inset ring-gray-300 bg-white outline-none px-2">
            <textarea
              name="description"
              id="description"
              className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 outline-none w-full font-medium h-32 overflow-y-scroll"
              required
              value={text}
              onChange={handleTextChange}
            />
          </div>
        </div>
      </div>

      {/* File Upload */}
      <div>
        <input
          className="block w-full text-sm text-gray-900 cursor-pointer focus:outline-none"
          id="file_input"
          type="file"
          onChange={handleFileChange}
        />
      </div>

      {/* Submit Button */}
      <button className="w-24 h-10 bg-black rounded-md text-white font-medium hover:bg-[#2563eb]">
        Update
      </button>

      {/* Status Messages */}
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

export default About;
