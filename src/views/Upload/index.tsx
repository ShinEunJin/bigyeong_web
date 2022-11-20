import "./styles.scss";
import React, { useCallback, useState } from "react";
import { BsUpload } from "@react-icons/all-files/bs/BsUpload";
import UploadForm from "@/components/UploadForm";
import { uploadPhoto } from "@/api/upload";
import Transform from "@/animations/Transform";

interface InputsType {
  title: string;
  location: string;
  detailLocation: string;
}

const Upload = () => {
  const [imgSrc, setImgSrc] = useState<string>("");
  const [imgFile, setImgFile] = useState<File | null>(null);
  const [inputs, setInputs] = useState<InputsType>({
    title: "",
    location: "",
    detailLocation: "",
  });

  const handleUploadPhoto = () => {
    const formData = new FormData();
    if (imgFile) formData.append("photo", imgFile);
    formData.append("photoInfo", JSON.stringify(inputs));
    uploadPhoto(formData);
    setInputs({ title: "", location: "", detailLocation: "" });
    setImgSrc("");
  };

  const handleUpdateInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputs({ ...inputs, [e.target.name]: e.target.value });
    },
    [inputs]
  );

  return (
    <div className="upload">
      {!imgSrc && (
        <UploadForm
          setUploadFile={setImgFile}
          setUploadSource={setImgSrc}
          uploadSource={imgSrc}
        >
          <div className="upload-image-input-box">
            <BsUpload color="#b3b3b3" size={50} />
          </div>
        </UploadForm>
      )}

      {imgSrc && (
        <div className="upload-input-container">
          <Transform duration={500} y={-40} timing={"ease-in-out"}>
            <div className="upload-image-box">
              <img alt="" className="upload-image" src={imgSrc} />
            </div>
          </Transform>
          <input
            value={inputs.title}
            onChange={handleUpdateInput}
            type="text"
            name="title"
            placeholder="title"
          />
          <input
            value={inputs.location}
            onChange={handleUpdateInput}
            type="text"
            name="location"
            placeholder="location"
          />
          <input
            value={inputs.detailLocation}
            onChange={handleUpdateInput}
            type="text"
            name="detailLocation"
            placeholder="detail location"
          />
          <div className="upload-photo-btn" onClick={handleUploadPhoto}>
            <span>제출</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Upload;
