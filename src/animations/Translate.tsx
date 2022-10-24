import { Children, cloneElement, createElement } from "react";
import styled, { keyframes } from "styled-components";

type DistanceType = [number, number];

interface TranslateProps {
  children: JSX.Element;
  distance?: DistanceType;
}

interface TranslateContainerProps {
  distance?: DistanceType;
}

const translate = (distance: DistanceType) => keyframes`
    from {
        transform: translate(0px, 0px);
    } 
    to {
        transform: translate(${distance[0]}px, ${distance[1]}px);
    }
`;

const TranslateContainer = styled.div<TranslateContainerProps>`
  animation: ${(props) => translate(props.distance || [0, 0])} 0.5s ease-in-out
    forwards;
`;

const Translate = (props: TranslateProps) => {
  return (
    <TranslateContainer distance={props.distance}>
      {props.children}
    </TranslateContainer>
  );
};

export default Translate;
