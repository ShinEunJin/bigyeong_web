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

const DragAnimation = keyframes`
  0% {
    opacity: 0.15;
    transform: translateY(0px);
  }
  50% {
    opacity: 0.25;
    transform: translateY(20px);
  }
  100% {
    opacity: 0.15;
    transform: translateY(0px);
  }
`;

const DragImg = styled.img`
  width: 3em;
  height: 3em;
  position: absolute;
  bottom: 6em;
  animation: ${DragAnimation} 2s infinite;
`;

interface FirstSectionProps {
  active: boolean;
}

const FirstSection = (props: FirstSectionProps) => {
  return (
    <Container>
      <MainText>
        Faster, Farther, Freer
        <br />
        With My Bike
      </MainText>
      {props.active && (
        <DragImg src={require("@/assets/images/home/drag.png")} />
      )}
    </Container>
  );
};

export default FirstSection;
