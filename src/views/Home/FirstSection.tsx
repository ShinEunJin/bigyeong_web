import useMountTransition from "@/hooks/useMountTransition";
import styled, { keyframes } from "styled-components";

const Container = styled.section`
  height: 100vh;
  width: 100%;
  text-align: center;
  padding-top: 30vh;
  position: relative;
`;

const MainText = styled.div`
  font-size: 3.5em;
  font-weight: bolder;
  line-height: 1.5em;
`;

const DragAnimation = (mount: boolean) => keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(20px);
  }
  100% {
    transform: translateY(0px);
    opacity: ${!mount && 0};
  }
`;

interface DragImgProps {
  mount: boolean;
}

const DragImg = styled.img<DragImgProps>`
  opacity: 0.3;
  width: 3em;
  height: 3em;
  position: absolute;
  bottom: 8em;
  animation: ${(props) => DragAnimation(props.mount)} 2s infinite;
`;

interface FirstSectionProps {
  active: boolean;
}

const FirstSection = (props: FirstSectionProps) => {
  const imgTransition = useMountTransition(props.active, 2000);

  return (
    <Container>
      <MainText>
        Faster, Farther, Freer
        <br />
        With My Bike
      </MainText>
      {imgTransition && (
        <DragImg
          mount={props.active}
          src={require("@/assets/images/home/drag.png")}
        />
      )}
    </Container>
  );
};

export default FirstSection;
