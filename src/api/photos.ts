import api from "./api";
import routes from "./routes";

interface GetPhotosReqParams {
  category: "TODEST" | "TORIDE";
}

export interface GetPhotosData {
  title: string;
  location: string;
  detailLocation: string;
  description: string;
  imageUri: string;
}

export const getPhotos = (
  params: GetPhotosReqParams
): Promise<GetPhotosData[]> => {
  return api({ url: routes.photos, method: "get", params });
};
