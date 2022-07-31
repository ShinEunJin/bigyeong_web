import { useQuery } from "@tanstack/react-query";

import { getPhotos } from "@/api/motor";

interface PhotoData {
  _id: string;
  category: "TODEST";
  createdAt: string;
  updatedAt: string;
  description: string;
  detailLocation: string;
  location: string;
  imageUri: string;
  title: string;
}

const Motor = () => {
  const { data, isLoading } = useQuery<PhotoData[]>(["getPhotos"], getPhotos);

  console.log(data);

  return (
    <>
      {isLoading ? (
        <div>loading</div>
      ) : (
        <div>
          {data?.map((photo) => (
            <div key={photo._id}>
              <img
                alt="hi"
                src={photo.imageUri}
                style={{
                  width: "400px",
                  height: "400px",
                  objectFit: "contain",
                }}
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Motor;
