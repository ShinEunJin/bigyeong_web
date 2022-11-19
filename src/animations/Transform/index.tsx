import { cloneElement, useEffect, useState } from "react";

interface TransformProps {
  children: JSX.Element;
  x?: number;
  y?: number;
  z?: number;
  duration: number;
  timing?: string;
  delay?: number;
}

const Transform = (props: TransformProps) => {
  const [style, setStyle] = useState({});

  useEffect(() => {
    setStyle({
      transform: `
        translate3d(
          ${props.x || 0}px, 
          ${props.y || 0}px, 
          ${props.z || 0}px
        )
      `,
      transition: `
        transform 
        ${props.duration || 500}ms 
        ${props.timing || "linear"} 
        ${props.delay || 0}ms
      `,
    });
  }, [props.duration, props.x, props.y, props.z, props.timing, props.delay]);

  return <>{cloneElement(props.children, { style })}</>;
};

export default Transform;
