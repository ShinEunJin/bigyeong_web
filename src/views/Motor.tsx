import { useQuery } from "@tanstack/react-query";

import { getPhotos } from "@/api/motor";

const Motor = () => {
  const { data } = useQuery(["getPhotos"], getPhotos);

  console.log(data);

  return <div></div>;
};

export default Motor;
