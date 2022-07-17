import { useQuery } from "react-query";

import {
  getMoto,
  getMotos,
  getModel,
  getMakers,
  getModels,
} from "../api/motors";

const Motor = () => {
  // 419 Suzuki

  //articleId: 968378
  //modelId: 12959 // gsx s125 705957
  //modelName: "SV650 ABS"
  //yearName: 2020
  const { data, isLoading } = useQuery("getMoto", () => getMoto(705957));

  console.log(data);

  return (
    <>{isLoading ? <div>Loading...</div> : data && <img src={data.link} />}</>
    // <div></div>
  );
};

export default Motor;
