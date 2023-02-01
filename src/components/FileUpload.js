import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React from "react";
import "./FileUpload.css";

const FileUpload = ({ files, setFiles, removeFile }) => {
  const uploadHandler = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    file.isUploading = true;
    setFiles([...files, file]);

    const formData = new FormData();
    formData.append("newFile", file, file.name);
    axios
      .post("http://localhost:3000/api/v1/items/upload", formData)
      .then((res) => {
        file.isUploading = false;
        setFiles([...files, file]);
      })
      .catch((err) => {
        console.error(err);
        removeFile(file.name);
      });
  };

  return (
    <>
      <div className="file-card">
        <div className="file-inputs">
          <input
            className="inner-input"
            type="file"
            name="file"
            onChange={uploadHandler}
          />
          <button className="button">
            <i className="icon">
              <FontAwesomeIcon icon={faPlus} />
            </i>
            Upload
          </button>
        </div>

        <p className="main">Support Files</p>
        <p className="info">PDF, JPG, PNG</p>
      </div>
    </>
  );
};

export default FileUpload;
