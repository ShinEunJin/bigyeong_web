import "./styles.scss";
import { useInfiniteQuery } from "@tanstack/react-query";

import { getPhotos } from "@/api/photos";
import { GET_PHOTOS_LIMIT } from "@/constants";
import Column from "./Column";
import { useCallback, useEffect, useState } from "react";

const Photos = () => {
  const { data, error, fetchNextPage } = useInfiniteQuery({
    queryKey: ["photos"],
    queryFn: getPhotos,
    getNextPageParam: (_lastPage, pages) => ({
      skip: pages.length * pages[0].length,
      limit: GET_PHOTOS_LIMIT,
    }),
  });

  const onIntersect = useCallback(() => {
    fetchNextPage();
  }, []);

  const [target, setTarget] = useState<any>(null);

  useEffect(() => {
    let observer: IntersectionObserver;
    if (target) {
      observer = new IntersectionObserver(onIntersect, {
        threshold: 1,
        rootMargin: "60px",
      });
      observer.observe(target);
    }
    return () => observer && observer.disconnect();
  }, [target, onIntersect]);

  if (error) return <div>Error</div>;

  return (
    <div className="photos-container">
      <div className="photos-grid">
        <Column data={data?.pages} pageIdx={0} />
        <Column data={data?.pages} pageIdx={1} />
        <Column data={data?.pages} pageIdx={2} />
      </div>
      <div ref={setTarget} style={{ width: "100%", height: "1px" }}></div>
    </div>
  );
};

export default Photos;
