import {
  cloneElement,
  createElement,
  memo,
  useEffect,
  useRef,
  useState,
} from "react";
import styled, { keyframes } from "styled-components";

interface MountAnimationProps {
  children: JSX.Element;
  active: boolean;
  in: any;
  out: any;
  delay: any;
  mount: any;
  setMount: any;
  ani: any;
  setAni: any;
}

const MountAnimation = (props: MountAnimationProps) => {
  const timeRef = useRef<any>(null);

  useEffect(() => {
    if (props.active && !props.mount) {
      clearTimeout(timeRef.current);
      props.setAni(true);
      props.setMount(true);
    } else if (!props.active && props.mount) {
      props.setAni(false);
      timeRef.current = setTimeout(() => {
        props.setMount(false);
      }, props.delay);
    }
    return () => clearTimeout(timeRef.current);
  }, [props.active, props.mount]);

  const tmpElement = cloneElement(props.children);
  const Element = () => tmpElement;

  return <>{props.mount && <Element />}</>;
};

export default MountAnimation;
