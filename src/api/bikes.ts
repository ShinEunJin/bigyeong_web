import api from "./api";
import routes from "./routes";

interface GetBikeParams {
  maker?: string;
  model?: string;
  genre?: string;
}

export interface GetBikeData {
  maker: string;
  model: string;
  image: string;
  displacement: number;
  genre: string;
}

export const getBikes = (params?: GetBikeParams): Promise<GetBikeData[]> => {
  return api({ url: routes.bikes, method: "get", params });
};
