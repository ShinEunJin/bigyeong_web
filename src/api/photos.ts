import routes from "./routes";
import { attachParams, ParamsType } from "./utils";

interface getPhotosParams extends ParamsType {
  category: "TODEST" | "TORIDE";
}

export const getPhotos = async (params: getPhotosParams) => {
  const res = await fetch(attachParams(routes.photos, params));
  return await res.json();
};
