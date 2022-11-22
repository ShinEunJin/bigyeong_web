import { GET_PHOTOS_LIMIT } from "@/constants";
import api from "./api";
import routes from "./routes";

interface PhotoType {
  _id: string;
  imgUrl: string;
  title: string;
  writer: string | null;
  location: string;
  detailLocation: string;
  view: number;
  createdAt: string;
  updatedAt: string;
}

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
