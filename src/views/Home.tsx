import { getBikes } from "@/api/bikes";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
  const { data, isLoading, isError, error } = useQuery(["getBikes"], () =>
    getBikes({ model: "" })
  );

  if (isError) console.log(error);
  console.log(data);

  return (
    <>
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
