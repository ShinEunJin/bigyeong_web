import { getBikes } from "@/api/bikes";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const Bike = () => {
  // const [maker, setMaker] = useState("");

  // const { data, isLoading, refetch } = useQuery(
  //   ["getBikes"],
  //   () => getBikes({ maker }),
  //   { enabled: false, refetchOnWindowFocus: false }
  // );

  // const onClickHandler = (item: any) => {
  //   if (maker === item) setMaker("");
  //   else setMaker(item);
  //   setTimeout(() => {
  //     refetch();
  //   }, 0);
  // };

  // useEffect(() => {
  //   refetch();
  // }, []);

  return <></>;
};

export default Bike;
