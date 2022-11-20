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

export const getPhotos = (): Promise<PhotoType[]> => {
  return api({ url: routes.photos, method: "get" });
};
