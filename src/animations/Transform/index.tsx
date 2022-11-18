import { cloneElement, useEffect, useState } from "react";

interface TransformProps {
  children: JSX.Element;
  x?: number;
  y?: number;
  time: number;
  delay?: number;
}

const Transform = (props: TransformProps) => {
  const [style, setStyle] = useState({});

  useEffect(() => {
    setStyle({ transform: `translateY(${props.y}px)`, transition: "all 0.5s" });
  }, [props.children, props.x, props.y]);

  return <>{cloneElement(props.children, { style })}</>;
};

export default Transform;
