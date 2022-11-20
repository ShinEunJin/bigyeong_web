import { getPhotos } from "@/api/photos";
import { useQuery } from "@tanstack/react-query";

const Photos = () => {
  const { data } = useQuery({ queryKey: ["photos"], queryFn: getPhotos });

  if (!data || data.length < 0) return <div></div>;

  return (
    <>
      {data.map((photo) => (
        <img key={photo._id} src={photo.imgUrl} style={{ width: "400px" }} />
      ))}
    </>
  );
};

export default Photos;
