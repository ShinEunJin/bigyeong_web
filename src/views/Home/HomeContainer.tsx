import { getPhotos } from "@/api/photos";
import { useQuery } from "@tanstack/react-query";
import HomePresenter from "./HomePresenter";

const HomeContainer = () => {
  const query = useQuery(["photos"], () => getPhotos({ category: "TODEST" }));

  if (query) console.log(query);

  return <HomePresenter />;
};

export default HomeContainer;
