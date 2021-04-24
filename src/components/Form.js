import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const Form = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ["image/png", "image/jpeg", "image/jpg"];

  function handleChange(e) {
    var selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError(" ");
    } else {
      setFile(null);
      setError("Check your file type");
    }
  }

  return (
    <div className="form">
      <form>
        <label>
          <input onChange={handleChange} type="file" />
          <span>Upload Snap</span>
        </label>
      </form>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </div>
  );
};

export default Form;
