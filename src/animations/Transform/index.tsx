import { cloneElement, createElement } from "react";
import { createPortal } from "react-dom";
import { createAnimationClassName } from "@/animations/utils/className";

type DistanceType = [number, number];

interface TranslateProps {
  children: JSX.Element;
  distance: DistanceType;
  time: number;
  delay?: number;
}

const Translate = (props: TranslateProps) => {
  const className = createAnimationClassName();

  const Styleani = () => {
    let el = createElement(
      "style",
      null,
      `
        @keyframes ${className} { 
          from { 
            transform: translate(0px, 0px); 
          } 
          to { 
            transform: translate(${props.distance[0]}px, ${
        props.distance[1]
      }px); 
          } 
        } 
        .${className} { 
          animation: ${className} ${props.time}s ease-in-out forwards;
          ${props.delay && `animation-delay: ${props.delay}ms`}
        } 
      `
    );

    const element = createPortal(el, document.head);

    return element;
  };

  const Element = () => {
    let element = cloneElement(props.children);
    element = {
      ...element,
      props: {
        ...element.props,
        className: `${element.props.className} ${className}`,
      },
    };
    return element;
  };

  return (
    <>
      <Styleani />
      <Element />
    </>
  );
};

export default Translate;
