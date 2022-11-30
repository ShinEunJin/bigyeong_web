import axios, { AxiosRequestConfig } from "axios";

const req = axios.create({
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
    const result = await req({
      url,
      method,
      params,
      paramsSerializer,
      data,
      headers,
    });
    if (result.data) return result.data;
  } catch (error) {
    return error;
  }
};

export default api;
