import "./styles.scss";
import { useInfiniteQuery } from "@tanstack/react-query";

import { getPhotos } from "@/api/photos";
import { GET_PHOTOS_LIMIT } from "@/constants";
import { Fragment } from "react";

const Photos = () => {
  const { data, error, fetchNextPage } = useInfiniteQuery({
    queryKey: ["photos"],
    queryFn: getPhotos,
    getNextPageParam: (_lastPage, pages) => ({
      skip: pages.length * pages[0].length,
      limit: GET_PHOTOS_LIMIT,
    }),
  });

  if (error) return <div>Error</div>;

  return (
    <div className="photos-container">
      <button onClick={() => fetchNextPage()}>plus</button>

      <div className="photos-grid">
        <div className="photos-grid__column">
          {data?.pages.map((photos, idx) => (
            <>
              {photos
                .filter((_v, idx) => idx % 3 === 0)
                .map((photo) => (
                  <img
                    key={photo._id}
                    alt=""
                    src={photo.imgUrl}
                    style={{ width: "100%" }}
                  />
                ))}
            </>
          ))}
        </div>
        <div className="photos-grid__column">
          {data?.pages.map((photos, idx) => (
            <>
              {photos
                .filter((_v, idx) => idx % 3 === 1)
                .map((photo) => (
                  <img
                    key={photo._id}
                    alt=""
                    src={photo.imgUrl}
                    style={{ width: "100%" }}
                  />
                ))}
            </>
          ))}
        </div>
        <div className="photos-grid__column">
          {data?.pages.map((photos, idx) => (
            <>
              {photos
                .filter((_v, idx) => idx % 3 === 2)
                .map((photo) => (
                  <img
                    key={photo._id}
                    alt=""
                    src={photo.imgUrl}
                    style={{ width: "100%" }}
                  />
                ))}
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Photos;
