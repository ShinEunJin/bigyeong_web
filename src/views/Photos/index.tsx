import "./styles.scss";
import { useInfiniteQuery } from "@tanstack/react-query";

import { getPhotos } from "@/api/photos";
import { GET_PHOTOS_LIMIT } from "@/constants";
import Column from "./Column";
import { useEffect, useRef } from "react";

const Photos = () => {
  const { data, error, fetchNextPage } = useInfiniteQuery({
    queryKey: ["photos"],
    queryFn: getPhotos,
    getNextPageParam: (_lastPage, pages) => {
      if (!_lastPage) return;
      return {
        skip: pages.length * pages[0].length,
        limit: GET_PHOTOS_LIMIT,
      };
    },
  });

  const target = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let observer: IntersectionObserver;

    if (target.current) {
      observer = new IntersectionObserver(() => fetchNextPage(), {
        threshold: 1,
        rootMargin: "60px",
      });
      observer.observe(target.current);
    }
    return () => observer && observer.disconnect();
  }, [target, fetchNextPage]);

  if (error) return <div>Error</div>;

  return (
    <div className="photos-container">
      {data && (
        <div className="photos-grid">
          <Column data={data.pages} pageIdx={0} />
          <Column data={data.pages} pageIdx={1} />
          <Column data={data.pages} pageIdx={2} />
        </div>
      )}
      <div className="photos-addition-line" ref={target}></div>
    </div>
  );
};

export default Photos;
