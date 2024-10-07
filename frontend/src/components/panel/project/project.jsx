import useProject from "../../../hooks/panel/useProject";

function InputField({ label, placeholder, value, onChange, type }) {
  return (
    <div className="sm:col-span-5 mt-1 w-full mr-2">
      <label className="block text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      <div className="mt-2">
        <div className="flex rounded-md w-full shadow-sm ring-1 ring-inset ring-gray-300 bg-white outline-none px-2">
          <input
            name="title"
            id="title"
            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 outline-none w-full font-medium"
            placeholder={placeholder}
            required
            type={type}
            value={value}
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
}

function TextareaField({ label, placeholder, value, onChange }) {
  return (
    <div className="sm:col-span-6 mt-1">
      <label className="block text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      <div className="mt-2">
        <div className="flex rounded-md w-full shadow-sm ring-1 ring-inset ring-gray-300 bg-white outline-none px-2">
          <textarea
            name="description"
            id="description"
            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 outline-none w-full font-medium h-32"
            placeholder={placeholder}
            required
            value={value}
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
}

function FileInput({ files, handleFileChange, handleDelete }) {
  return (
    <article
      aria-label="File Upload Modal"
      className="relative h-full flex flex-col bg-white shadow-xl rounded-md"
    >
      <section className="h-full overflow-auto p-8 w-full flex flex-col">
        <header className="border-dashed border-2 border-gray-400 py-12 flex flex-col justify-center items-center">
          <p className="mb-3 font-semibold text-gray-900 flex flex-wrap justify-center">
            <span>Drag and drop your</span>&nbsp;
            <span>files anywhere or</span>
          </p>
          <input
            id="hidden-input"
            type="file"
            multiple
            className="hidden"
            onChange={(e) => handleFileChange(e)}
          />
          <button
            className="mt-2 rounded-sm px-3 py-1 bg-gray-200 hover:bg-gray-300 focus:shadow-outline focus:outline-none"
            onClick={() => document.getElementById("hidden-input").click()}
          >
            Upload a file
          </button>
        </header>

        <h1 className="pt-8 pb-3 font-semibold sm:text-lg text-gray-900">
          To Upload
        </h1>

        <ul id="gallery" className="flex flex-1 flex-wrap -m-1">
          {files.length === 0 && (
            <li
              id="empty"
              className="h-full w-full text-center flex flex-col justify-center items-center"
            >
              <img
                className="mx-auto w-32"
                src="https://user-images.githubusercontent.com/507615/54591670-ac0a0180-4a65-11e9-846c-e55ffce0fe7b.png"
                alt="no data"
              />
              <span className="text-small text-gray-500">
                No files selected
              </span>
            </li>
          )}
          {files.map((file, index) => (
            <li
              key={index}
              className="block p-1 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8 h-24"
            >
              <article
                tabIndex="0"
                className="group w-full h-full rounded-md focus:outline-none focus:shadow-outline elative bg-gray-100 cursor-pointer relative shadow-sm"
              >
                {file.type.match("image.*") ? (
                  <img
                    alt="upload preview"
                    className="img-preview w-full h-full sticky object-cover rounded-md bg-fixed"
                    src={URL.createObjectURL(file)}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col justify-center items-center">
                    <span className="p-1 text-blue-800">
                      <i>
                        <svg
                          className="fill-current w-4 h-4 ml-auto pt-1"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M15 2v5h5v15h-16v-20h11zm1-2h-14v24h20v-18l-6-6z" />
                        </svg>
                      </i>
                    </span>
                    <p className="p-1 size text-xs text-gray-700">
                      {file.size > 1024
                        ? file.size > 1048576
                          ? Math.round(file.size / 1048576) + "mb"
                          : Math.round(file.size / 1024) + "kb"
                        : file.size + "b"}
                    </p>
                  </div>
                )}
                <section className="flex flex-col rounded-md text-xs break-words w-full h-full z-20 absolute top-0 py-2 px-3">
                  <h1 className="flex-1 group-hover:text-blue-800">
                    {file.name}
                  </h1>
                  <div className="flex">
                    <button
                      className="delete ml-auto focus:outline-none hover:bg-gray-300 p-1 rounded-md text-gray-800"
                      onClick={() => handleDelete(file.url)}
                    >
                      <svg
                        className="pointer-events-none fill-current w-4 h-4 ml-auto"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          className="pointer-events-none"
                          d="M3 6l3 18h12l3-18h-18zm19-4v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.316c0 .901.73 2 1.631 2h5.711z"
                        />
                      </svg>
                    </button>
                  </div>
                </section>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}

function Project() {
  const {
    title,
    description,
    files,
    handleTextChange,
    handleDescriptionChange,
    handleFileChange,
    handleDelete,
    handleSubmit,
  } = useProject();

  return (
    <div className="md:w-4/5 w-[90%] mt-6 mx-auto flex-col flex gap-y-5">
      <InputField
        label="First banner title"
        placeholder="About us"
        value={title}
        onChange={handleTextChange}
        type="text"
      />
      <TextareaField
        label="Description"
        placeholder="Enter description"
        value={description}
        onChange={handleDescriptionChange}
      />
      <main className="container mx-auto max-w-screen-lg">
        <FileInput
          files={files}
          handleFileChange={handleFileChange}
          handleDelete={handleDelete}
        />
      </main>
      <div className="flex justify-start">
        <button
          className="w-24 h-10 bg-black rounded-md text-white font-medium hover:bg-[#2563eb] mr-2"
          onClick={handleSubmit}
        >
          Update
        </button>
        <button
          id="cancel"
          className="w-24 h-10 bg-white rounded-md text-black font-medium"
          onClick={() => setFiles([])}
        >
          Cancel
        </button>
      </div>
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
    </div>
  );
}

export default Project;
