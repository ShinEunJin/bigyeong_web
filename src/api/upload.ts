import api from "./api";
import routes from "./routes";

export const uploadPhoto = (data: FormData) => {
  return api({
    method: "post",
    url: routes.photo,
    data,
    headers: { "Content-Type": "multipart/form-data" },
  });
};
