import { getPhotos } from "@/api/photos";
import { useQuery } from "@tanstack/react-query";
import HomePresenter from "./HomePresenter";

const HomeContainer = () => {
  const { data } = useQuery(["photos"], () =>
    getPhotos({ category: "TODEST" })
  );

  if (data) console.log(data);

  return <HomePresenter />;
};

export default HomeContainer;
