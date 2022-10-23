import api from "./api";
import routes from "./routes";

export const uploadImgUrl = () => {
  return api({ method: "post", url: routes.photo });
};
