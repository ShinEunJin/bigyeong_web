import styled from "styled-components";
import { useEffect, useRef, useState } from "react";

import useScroll from "@/hooks/useScroll";

const Container = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding-top: 100px;
`;

const ImagesContainer = styled.div`
  width: 32%;
  height: 100vh;
  background-color: aliceblue;
`;

const Img = styled.img`
  width: 100%;
  object-fit: contain;
  object-position: center;
  margin-bottom: 1rem;
`;

const Images1 = [
  require("@/assets/images/test/korea16.jpeg"),
  require("@/assets/images/test/korea2.jpeg"),
  require("@/assets/images/test/korea3.jpeg"),
  require("@/assets/images/test/korea4.jpeg"),
];
const Images2 = [
  require("@/assets/images/test/korea6.jpeg"),
  require("@/assets/images/test/korea1.jpeg"),
  require("@/assets/images/test/korea7.jpeg"),
  require("@/assets/images/test/korea8.jpeg"),
];
const Images3 = [
  require("@/assets/images/test/korea5.jpeg"),
  require("@/assets/images/test/korea10.jpeg"),
  require("@/assets/images/test/korea11.jpeg"),
  require("@/assets/images/test/korea12.jpeg"),
];

const Bikes = () => {
  const scroll = useScroll(300);

  const [screenH, setScreenH] = useState(window.innerHeight);

  const test = useRef(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (screenH - 200 < scroll) {
      for (let i = 0; i < 4; i++) {
        [Images1, Images2, Images3].map((v) =>
          v.push(
            require(`@/assets/images/test/korea${Math.floor(
              Math.random() * 16 + 1
            )}.jpeg`)
          )
        );
      }
      setScreenH(document.body.scrollHeight - window.innerHeight);
    }
  }, [scroll, screenH]);

  console.log(test.current++);

  return (
    <Container>
      <ImagesContainer>
        {Images1.map((v, i) => (
          <Img key={i} src={v} />
        ))}
      </ImagesContainer>
      <ImagesContainer>
        {Images2.map((v, i) => (
          <Img key={i} src={v} />
        ))}
      </ImagesContainer>
      <ImagesContainer>
        {Images3.map((v, i) => (
          <Img key={i} src={v} />
        ))}
      </ImagesContainer>
    </Container>
  );
};

export default Bikes;
