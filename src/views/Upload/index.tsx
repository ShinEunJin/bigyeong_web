import { useState } from "react";
import { BsUpload } from "@react-icons/all-files/bs/BsUpload";
import { IoMdCloseCircle } from "@react-icons/all-files/io/IoMdCloseCircle";
import UploadForm from "@/components/UploadForm";
import Translate from "@/animations/Translate";
import "./styles.scss";

const Upload = () => {
  const [imgSrc, setImgSrc] = useState<string>("");

  return (
    <div className="upload">
      {!imgSrc && (
        <UploadForm setUploadSource={setImgSrc} uploadSource={imgSrc}>
          <div className="upload-input-box">
            <BsUpload color="#b3b3b3" size={50} />
          </div>
        </UploadForm>
      )}
      {imgSrc && (
        <>
          <Translate
            time={0.5}
            distance={[0, -Math.floor(window.innerHeight * 0.08)]}
          >
            <div
              className="hihi"
              style={{ position: "relative", width: "400px" }}
            >
              <img
                style={{
                  width: "100%",
                  objectPosition: "center",
                  objectFit: "contain",
                  borderRadius: "20px",
                }}
                src={imgSrc}
              />
            </div>
            {/* <div className="upload-image-box">
              <img className="upload-image" src={imgSrc} />
              <IoMdCloseCircle className="IoMdCloseCircle" />
            </div> */}
          </Translate>
          <input type="text" />
        </>
      )}
    </div>
  );
};

export default Upload;
