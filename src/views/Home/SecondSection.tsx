import ImageSlider from "@/components/ImageSlider";
import { memo } from "react";
import styled, { keyframes } from "styled-components";
import { FiArrowRightCircle } from "@react-icons/all-files/fi/FiArrowRightCircle";

const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
`;

interface StyledSectionTypes {
  mount: boolean;
}

const sectionMountKeyframe = (mount: boolean) => keyframes`
  from {
    opacity: ${mount ? 0 : 1};
    transform: ${mount ? "translateY(40px)" : "translateY(-40px)"};
  } to {
    opacity: ${mount ? 1 : 0};
    transform: ${mount ? "translateY(-40px)" : "translateY(40px)"};
  }
`;

const LeftSection = styled.section<StyledSectionTypes>`
  width: 50%;
  animation: ${(props) => sectionMountKeyframe(props.mount)} 0.8s forwards;
  opacity: 0;
  animation-delay: ${(props) => (props.mount ? "0.3s" : "0s")};
`;

const Img = styled.img`
  width: 360px;
`;

const RightSection = styled.section<StyledSectionTypes>`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${(props) => sectionMountKeyframe(props.mount)} 0.8s forwards;
  /* background-color: #f8f8f8; */
`;

const MainText = styled.p`
  font-size: 32px;
  font-weight: 600;
`;

const SFiArrowRightCircle = styled(FiArrowRightCircle)`
  width: 2em;
  height: 2em;
  color: #a7a7a7;
`;
interface SecondSectionProps {
  active: boolean;
}

const imagesUrl = [
  require("@/assets/images/bikes/h2.png"),
  require("@/assets/images/bikes/hayabusa.png"),
  require("@/assets/images/bikes/gsx-1000r.png"),
  require("@/assets/images/bikes/cbr1000rr.png"),
  require("@/assets/images/bikes/m1000rr.png"),
  require("@/assets/images/bikes/r1.png"),
];

const SecondSection = (props: SecondSectionProps) => {
  console.log(require("@/assets/images/bikes/hayabusa.png"));
  return (
    <Container>
      <LeftSection mount={props.active}>
        <Img src={require("@/assets/images/bikes/h2.png")} />
      </LeftSection>
      <RightSection mount={props.active}>
        <MainText>마음에 드는 바이크를 골라보세요</MainText>
        <div>
          <ImageSlider width={360} height={290} operation={"auto"} delay={3000}>
            {imagesUrl.map((v, i) => (
              <Img key={i} src={v} />
            ))}
          </ImageSlider>
          <SFiArrowRightCircle />
        </div>
      </RightSection>
    </Container>
  );
};

export default memo(SecondSection);
