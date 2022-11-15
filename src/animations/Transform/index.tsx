import {
  cloneElement,
  createElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from "react";
import { createPortal } from "react-dom";
import { createAnimationClassName } from "@/animations/utils/className";

type DistanceType = [number, number];

interface TransformProps {
  children: JSX.Element;
  distance: DistanceType;
  time: number;
  delay?: number;
}

const Transform = (props: TransformProps) => {
  const styleClassName = useMemo(() => createAnimationClassName(), []);

  const StyleComponent = useCallback(() => {
    const style = `
@keyframes ${styleClassName} { 
  from { 
    transform: translate(0px, 0px); 
  } 
  to { 
    transform: translate(${props.distance[0]}px, ${props.distance[1]}px); 
  } 
} 

.${styleClassName} { 
  animation: ${styleClassName} ${props.time}ms ease-in-out forwards;
  ${props.delay && `animation-delay: ${props.delay}ms`}
} 
    `;

    const element = createElement("style", null, style.trim());

    const styleComponent = createPortal(element, document.head);

    return styleComponent;
  }, []);

  const ChildComponent = useCallback(() => {
    let element = cloneElement(props.children);
    console.log("rerendering 111");
    console.log(styleClassName);
    element = {
      ...element,
      props: {
        ...element.props,
        className: `${element.props.className} ${styleClassName}`,
      },
    };

    return element;
  }, []);

  return (
    <>
      <StyleComponent />
      <ChildComponent />
    </>
  );
};

export default Transform;
