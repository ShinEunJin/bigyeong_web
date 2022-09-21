import { getBikes } from "@/api/bikes";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const Bike = () => {
  const [maker, setMaker] = useState("");

  const { data, isLoading, refetch } = useQuery(
    ["getBikes"],
    () => getBikes({ maker }),
    { enabled: false, refetchOnWindowFocus: false }
  );

  const onClickHandler = (item: any) => {
    if (maker === item) setMaker("");
    else setMaker(item);
    setTimeout(() => {
      refetch();
    }, 0);
  };

  useEffect(() => {
    refetch();
  }, []);

  const Button = () => {
    const maker = ["YAMAHA", "KAWASAKI", "SUZUKI", "HONDA", "BMW"];
    return (
      <>
        {maker.map((v, i) => (
          <button key={i} onClick={() => onClickHandler(v)}>
            {v}
          </button>
        ))}
      </>
    );
  };

  return (
    <>
      <Button />
      {isLoading ? (
        <div>loading</div>
      ) : (
        data?.map((v, i) => (
          <img
            src={v.image}
            alt="sorry"
            key={i}
            style={{
              height: 400,
              width: 400,
              objectFit: "contain",
              objectPosition: "center",
            }}
          />
        ))
      )}
    </>
  );
};

export default Bike;
