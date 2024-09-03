import React from "react";
import useAbout from "../../hooks/panel/about/useAbout";

function AboutPanel() {
  const {
    title,
    text,
    file,
    status,
    setTitle,
    setText,
    setFile,
    handleTextChange,
    handleKeyPress,
    handleSubmit
  } = useAbout();

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
          <div className="flex rounded-md w-full shadow-sm ring-1 ring-inset ring-gray-300 bg-white px-2">
            <input
              name="title"
              id="title"
              className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 w-full font-medium"
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
          <div className="flex rounded-md w-full shadow-sm ring-1 ring-inset ring-gray-300 bg-white px-2">
            <textarea
              name="description"
              id="description"
              className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 w-full font-medium h-32 overflow-y-scroll"
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
          className="block w-full text-sm text-gray-900 cursor-pointer focus:outline-none"
          id="file_input"
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
        />
      </div>
      <button
        type="submit"
        className="w-24 h-10 bg-black rounded-md text-white font-medium hover:bg-[#2563eb]"
      >
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
