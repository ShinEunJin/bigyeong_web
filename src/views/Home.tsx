import { getPhotos } from "@/api/photos";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
  const { data, isLoading } = useQuery(["getPhotos"], () =>
    getPhotos({ category: "TODEST" })
  );

  return (
    <>
      {isLoading ? (
        <div>loading</div>
      ) : (
        data?.map((v, i) => (
          <img
            src={v.imageUri}
            alt="sorry"
            key={i}
            style={{ height: 300, width: 300 }}
          />
        ))
      )}
    </>
  );
};

export default Home;
