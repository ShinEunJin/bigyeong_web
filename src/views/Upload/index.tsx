import styled from "styled-components";
import { BsUpload } from "@react-icons/all-files/bs/BsUpload";
import UploadForm from "@/components/UploadForm";
import { useState } from "react";

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

const Img = styled.img`
  width: 50%;
`;

const Upload = () => {
  const [imgSrc, setImgSrc] = useState<string | null>(null);

  return (
    <Container>
      <UploadForm setUploadSource={setImgSrc}>
        {imgSrc ? (
          <Img src={imgSrc} />
        ) : (
          <UploadBox>
            <BsUpload color="#b3b3b3" size={50} />
          </UploadBox>
        )}
      </UploadForm>
    </Container>
  );
};

export default Upload;
