import React, { useRef } from "react";

import Button from "./Button";

import "./ImageUpload.css";

const ImageUpload = (props) => {
    const filePickerRef = useRef();

    const pickedHandler = (event) => {
        console.log(event.target);
    }

    const pickImageHandler = () => {
        filePickerRef.current.click();
    }

  return (
    <div className="form-control">
      <input
        type="file"
        ref={filePickerRef}
        id={props.id}
        style={{ display: "none" }}
        accept=".jpg, .png, jpeg"
        onChange={pickedHandler}
      />
      <div className={`image-upload ${props.center && "center"}`}>
        <div className="image-upload__preview">
            <img src="" alt="file preview" />
        </div>
        <Button type="button" onClick={pickImageHandler}>Pick Image</Button>
      </div>
    </div>
  );
};

export default ImageUpload;
