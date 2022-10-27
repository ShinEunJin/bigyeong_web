import uuid from "react-uuid";

export const createAnimationClassName = () => {
  const key =
    "ani-" +
    uuid()
      .substring(0, 15)
      .replace(/[0-9-]/g, "");
  return key;
};
