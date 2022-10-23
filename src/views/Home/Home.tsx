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

const Home = () => {
  const scroll = useScroll(200);
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

  return (
    <Main>
      <div ref={sectionRef}>
        <FirstSection active={activeSection === 0} />
        <SecondSection active={activeSection >= 1} />
        <ThirdSection active={activeSection >= 2} />
      </div>
    </Main>
  );
};

export default Home;
