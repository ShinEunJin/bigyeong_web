import "./styles.scss";
import React, { useCallback, useState } from "react";
import { BsUpload } from "@react-icons/all-files/bs/BsUpload";
import UploadForm from "@/components/UploadForm";
import { uploadPhoto } from "@/api/upload";
import Transform from "@/animations/Transform";

interface InputsType {
  title: string;
  location: string;
}

const Upload = () => {
  const [imgSrc, setImgSrc] = useState<string>("");
  const [imgFile, setImgFile] = useState<File | null>(null);
  const [inputs, setInputs] = useState<InputsType>({
    title: "",
    location: "",
  });

  const handleUploadPhoto = () => {
    const formData = new FormData();
    if (imgFile) formData.append("photo", imgFile);
    uploadPhoto(formData);
  };

  const handleUpdateInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputs({ ...inputs, [e.target.name]: e.target.value });
    },
    [inputs]
  );

  const [move, setMove] = useState(-80);

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
          <Transform time={400} y={move}>
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
          <div className="upload-photo-btn" onClick={handleUploadPhoto}>
            <span>제출</span>
          </div>
          <div
            className="upload-photo-btn"
            onClick={() => setMove((prev) => (prev ? 0 : -80))}
          >
            <span>이동 테스트</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Upload;
