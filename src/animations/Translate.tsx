import { cloneElement } from "react";

type DistanceType = [number, number];

interface TranslateProps {
  children: JSX.Element;
  distance: DistanceType;
  time: number;
}

interface TranslateContainerProps {
  distance: DistanceType;
  time: number;
}

const Translate = (props: TranslateProps) => {
  const Element = () => {
    const el = cloneElement({
      ...props.children,
      props: {
        ...props.children.props,
        style: {
          ...props.children.props.style,
          transition: "all 0.5s ease-in-out",
          transform: `translateY(-150px)`,
        },
      },
    });
    console.log(el);
    return el;
  };
  return (
    // <TranslateContainer distance={props.distance} time={props.time}>
    <Element />
    // </TranslateContainer>
  );
};

export default Translate;
