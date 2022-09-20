import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import useScroll from "@/hooks/useScroll";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";

const Main = styled.main`
  width: 70%;
  margin: 0 auto;
  position: relative;
`;

const Header = styled.header`
  width: 100%;
  height: 60px;
  padding: 0 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  left: 0;
  background-color: #fff;
  z-index: 5;
  border-bottom: 0.3px solid #e1e1e1;
`;

const LeftHeader = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 30px;
    height: 30px;
    margin-right: 0.2em;
  }
  span {
    font-weight: bold;
    font-size: 1.2em;
  }
`;

const RightHeader = styled.div`
  font-size: 15px;
  opacity: 0.7;
  span {
    margin-left: 3em;
  }
`;

const Img = styled.img`
  position: absolute;
  top: 10%;
  left: 10%;
`;

const Home = () => {
  const scroll = useScroll();
  const sectionRef = useRef<HTMLDivElement>(null);

  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    if (sectionRef.current) {
      const count = sectionRef.current.childElementCount;
      const { height } = sectionRef.current.getBoundingClientRect();
      for (let i = 0; i < count; i++) {
        if (scroll <= height / count / 2 + (height / count) * i) {
          setActiveSection(i);
          break;
        }
      }
    }
  }, [scroll]);
  useEffect(() => {
    console.log(activeSection >= 1);
  }, [activeSection]);

  return (
    <Main>
      <Header>
        <LeftHeader>
          <img alt="" src={require("@/assets/images/logo.png")} />
          <span>Bigyeong Moto</span>
        </LeftHeader>
        <RightHeader>
          <span>Service</span>
          <span>News</span>
          <span>Touring</span>
        </RightHeader>
      </Header>
      <div ref={sectionRef}>
        <FirstSection active={activeSection === 0} />
        <SecondSection active={activeSection >= 1} />
        <ThirdSection active={activeSection >= 2} />
      </div>
    </Main>
  );
};

export default Home;
