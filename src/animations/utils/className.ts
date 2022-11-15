import uuid from "react-uuid";

export const createAnimationClassName = (): string => {
  const key = "ani-st" + uuid().substring(0, 6).replace(/-/g, "");
  return key;
};
