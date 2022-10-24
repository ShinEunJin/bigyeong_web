import { useState } from "react";
import styled from "styled-components";
import { BsUpload } from "@react-icons/all-files/bs/BsUpload";
import { IoMdCloseCircle } from "@react-icons/all-files/io/IoMdCloseCircle";

import UploadForm from "@/components/UploadForm";
import Translate from "@/animations/Translate";

const Container = styled.div`
  width: 70vw;
  max-width: 750px;
  margin: 0 auto;
  height: 100vh;
  border-right: 0.5px solid #e2e2e2;
  border-left: 0.5px solid #e2e2e2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UploadBox = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 20px;
  background-color: #f3f3f3;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #e7e7e7;
  }
`;

const ImgBox = styled.div`
  position: relative;
  width: 400px;
`;

const Img = styled.img`
  width: 100%;
  object-fit: contain;
  object-position: center;
  border-radius: 20px;
`;

const CloseBtn = styled(IoMdCloseCircle)`
  position: absolute;
  right: 10px;
  top: 10px;
  color: #f0f0f0;
  opacity: 0.5;
`;

const Upload = () => {
  const [imgSrc, setImgSrc] = useState<string>("");

  return (
    <Container>
      {!imgSrc && (
        <UploadForm setUploadSource={setImgSrc} uploadSource={imgSrc}>
          <UploadBox>
            <BsUpload color="#b3b3b3" size={50} />
          </UploadBox>
        </UploadForm>
      )}
      {imgSrc && (
        <>
          <Translate distance={[0, -window.innerHeight * 0.08]}>
            <ImgBox>
              <Img src={imgSrc} />
              <CloseBtn />
            </ImgBox>
          </Translate>
          <input type="text" />
        </>
      )}
    </Container>
  );
};

export default Upload;
