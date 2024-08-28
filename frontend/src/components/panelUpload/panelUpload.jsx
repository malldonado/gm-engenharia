import { Pane, FileUploader, FileCard } from "evergreen-ui";

function panelUpload() {
  
    const [files, setFiles] = React.useState([]);
    const [fileRejections, setFileRejections] = React.useState([]);
    const handleChange = React.useCallback((files) => setFiles([files[0]]), []);
    const handleRejected = React.useCallback(
      (fileRejections) => setFileRejections([fileRejections[0]]),
      []
    );
    const handleRemove = React.useCallback(() => {
      setFiles([]);
      setFileRejections([]);
    }, []);
    return (
      <div className="flex justify-center w-full">
        <Pane width={1000} maxWidth={1000}>
          <FileUploader
            label="Upload File"
            description="You can upload 1 file. File can be up to 50 MB."
            maxSizeInBytes={50 * 1024 ** 2}
            maxFiles={1}
            onChange={handleChange}
            onRejected={handleRejected}
            renderFile={(file) => {
              const { name, size, type } = file;
              const fileRejection = fileRejections.find(
                (fileRejection) => fileRejection.file === file
              );
              const { message } = fileRejection || {};
              return (
                <FileCard
                  key={name}
                  isInvalid={fileRejection != null}
                  name={name}
                  onRemove={handleRemove}
                  sizeInBytes={size}
                  type={type}
                  validationMessage={message}
                />
              );
            }}
            values={files}
          />
        </Pane>
      </div>
    );
}

export default panelUpload
