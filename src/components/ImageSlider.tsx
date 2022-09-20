import { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";

interface StyleContainerProps {
  width: number;
  height: number;
}

const Container = styled.div<StyleContainerProps>`
  overflow: hidden;
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
`;

const sliderAnimation = (
  auto: boolean,
  prevDistance: number,
  distance: number
) => keyframes`
  0% {
    transform: translateX(${prevDistance}px);
  }
  30% {
    transform: translateX(${prevDistance}px);
  }
  100% {
    transform: translateX(${distance}px);
  }
  `;

interface StyleSliderWrapperProps {
  width: number;
  numberOfImages: number;
  imageIdx: number;
  auto: boolean;
}

const SliderWrapper = styled.div<StyleSliderWrapperProps>`
  display: flex;
  width: ${(props) => `${props.width * props.numberOfImages}px`};
  animation: ${(props) =>
      sliderAnimation(
        props.auto,
        -1 * props.width * props.imageIdx,
        -1 * props.width * (props.imageIdx + 1)
      )}
    3s ${(props) => props.auto && "infinite"};
  animation-delay: ${(props) => (props.auto ? 1000 : 0)};
`;

interface ImageSliderProps {
  children: JSX.Element[];
  width: number;
  height: number;
  operation: "auto" | "hover";
}

const ImageSlider = (props: ImageSliderProps) => {
  const [imageIdx, setImageIdx] = useState(0);

  const slide = () => {
    setImageIdx((prev) => prev + 1);
    if (props.children.length === imageIdx + 1) {
      setImageIdx(0);
    }
  };

  const timeRef = useRef<NodeJS.Timer | null>(null);

  useEffect(() => {
    if (props.operation === "auto") {
      timeRef.current = setInterval(() => {
        // slide();
      }, 3000);
      return () => clearInterval(timeRef.current as NodeJS.Timer);
    }
  }, []);

  return (
    <Container
      width={props.width}
      height={props.height}
      onMouseEnter={props.operation === "hover" ? () => slide() : () => null}
    >
      <SliderWrapper
        width={props.width}
        numberOfImages={props.children.length}
        imageIdx={imageIdx}
        auto={props.operation === "auto"}
      >
        {props.children}
      </SliderWrapper>
    </Container>
  );
};

export default ImageSlider;
