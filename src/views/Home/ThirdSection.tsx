import styled, { keyframes } from "styled-components";

import MountAnimation from "@/components/MountAnimation";
import { memo, useState } from "react";

const Container = styled.section`
  width: 100%;
  height: 100vh;
`;

interface ThirdSectionProps {
  active: boolean;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
    transform: translateX(-20px);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translate(-20px);
  }
  to {
    transform: translateX(0px);
    opacity: 0;
  }
`;

const Img = styled.img<any>`
  width: 200px;
  animation: ${(props) => (props.ani ? fadeIn : fadeOut)} 0.3s forwards;
`;

const ThirdSection = (props: ThirdSectionProps) => {
  const [mount, setMount] = useState(false);
  const [ani, setAni] = useState(false);

  return (
    <Container>
      <MountAnimation
        in={fadeIn}
        out={fadeOut}
        delay={300}
        active={props.active}
        mount={mount}
        setMount={setMount}
        ani={ani}
        setAni={setAni}
      >
        <Img ani={ani} alt="" src={require("@/assets/images/hayabusa.png")} />
      </MountAnimation>
    </Container>
  );
};

export default memo(ThirdSection);
