import React from "react";
import { useDropzone } from "react-dropzone";
interface FileInputProps {
  onFileSelect: (file: any) => any;
  children: any;
}
const FileInput = (props: FileInputProps) => {
  const onDrop = (acceptedFiles: any) => {
    props.onFileSelect(acceptedFiles[0]);
    // Do something with the files
  };
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? props.children : props.children}
    </div>
  );
};
export default FileInput;
