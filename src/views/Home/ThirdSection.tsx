import { memo, useState } from "react";
import styled, { keyframes } from "styled-components";

import useMountTransition from "@/hooks/useMountTransition";

const Container = styled.section`
  width: 100%;
  height: 100vh;
`;

interface ThirdSectionProps {
  active: boolean;
}

const fadeIn = (a: any) => keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
    transform: ${a === "a" ? "translateX(-30px)" : "translateX(30px)"};
  }
`;

const fadeOut = (a: any) => keyframes`
  from {
    opacity: 1;
    transform: ${a === "a" ? "translateX(-30px)" : "translateX(30px)"};
  }
  to {
    transform: translateX(0px);
    opacity: 0;
  }
`;

const Img = styled.img<any>`
  width: 500px;
  opacity: 0;
  animation: ${(props) => (props.ani ? fadeIn("a") : fadeOut("a"))} 0.9s
    forwards;
  animation-delay: ${(props) => (props.ani ? "0.4s" : "0s")};
`;

const Img2 = styled.img<any>`
  width: 500px;
  animation: ${(props) => (props.ani ? fadeIn("b") : fadeOut("b"))} 1s forwards;
`;

const ThirdSection = (props: ThirdSectionProps) => {
  const mountTransition = useMountTransition(props.active, 1100);

  return (
    <Container>
      {mountTransition && (
        <Img
          ani={props.active}
          alt=""
          src={require("@/assets/images/bikes/hayabusa.png")}
        />
      )}
      {mountTransition && (
        <Img2
          ani={props.active}
          alt=""
          src={require("@/assets/images/bikes/h2.png")}
        />
      )}
    </Container>
  );
};

export default memo(ThirdSection);
