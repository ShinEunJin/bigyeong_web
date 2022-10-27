import { useState } from "react";
import { BsUpload } from "@react-icons/all-files/bs/BsUpload";
import UploadForm from "@/components/UploadForm";
import Transform from "@/animations/Transform";
import "./styles.scss";

const Upload = () => {
  const [imgSrc, setImgSrc] = useState<string>("");

  return (
    <div className="upload">
      {!imgSrc && (
        <UploadForm setUploadSource={setImgSrc} uploadSource={imgSrc}>
          <div className="upload-image-input-box">
            <BsUpload color="#b3b3b3" size={50} />
          </div>
        </UploadForm>
      )}
      {imgSrc && (
        <div className="upload-input-container">
          <Transform
            time={0.5}
            distance={[0, -Math.floor(window.innerHeight * 0.04)]}
          >
            <div className="upload-image-box">
              <img alt="" className="upload-image" src={imgSrc} />
            </div>
          </Transform>
          <div className="upload-input-container__inputs">
            <Transform time={0.5} distance={[-100, 0]} delay={100}>
              <input className="upload-input upload-input__title" />
            </Transform>
            <Transform time={0.5} distance={[-100, 0]} delay={200}>
              <input className="upload-input upload-input__location" />
            </Transform>
          </div>
        </div>
      )}
    </div>
  );
};

export default Upload;
