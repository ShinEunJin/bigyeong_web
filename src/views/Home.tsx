import { getBikes } from "@/api/bikes";
import { useQuery } from "@tanstack/react-query";
import { EventHandler, useState } from "react";

const Home = () => {
  const [maker, setMaker] = useState("");

  const { data, isLoading, refetch } = useQuery(
    ["getBikes"],
    () => getBikes({ maker }),
    { enabled: false, refetchOnWindowFocus: false }
  );

  const onClickHandler = (maker: any) => {
    setMaker(maker);
    setTimeout(() => {
      refetch();
    }, 0);
  };

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
              height: 500,
              width: 500,
              objectFit: "contain",
              objectPosition: "center",
            }}
          />
        ))
      )}
    </>
  );
};

export default Home;
