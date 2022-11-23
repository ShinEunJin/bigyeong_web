import { GET_PHOTOS_LIMIT } from "@/constants";
import api from "./api";
import routes from "./routes";
import { PhotoType } from "@/views/Photos/types";

interface GetPhotosParamsType {
  pageParam?: {
    skip: number;
    limit: number;
  };
}

export const getPhotos = ({
  pageParam = { skip: 0, limit: GET_PHOTOS_LIMIT },
}: GetPhotosParamsType): Promise<PhotoType[]> => {
  return api({
    url: routes.photos,
    method: "get",
    params: {
      skip: pageParam.skip || 0,
      limit: pageParam.limit || GET_PHOTOS_LIMIT,
    },
  });
};
