import axios, { AxiosRequestConfig } from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 10000,
});

const api = async ({
  url,
  method,
  params,
  paramsSerializer,
  data,
  headers,
}: AxiosRequestConfig) => {
  try {
    return await instance({
      url,
      method,
      params,
      data,
      headers,
      paramsSerializer,
    });
  } catch (error) {
    return error;
  }
};

export default api;
