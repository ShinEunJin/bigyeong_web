import api from "./api";
import routes from "./routes";

export const getPhotos = (params: { category: "TODEST" }) => {
  return api({ url: routes.photos, method: "get", params });
};
