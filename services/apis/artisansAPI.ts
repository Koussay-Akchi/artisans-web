import axios from 'axios';

import {
  defaultAPIRequestMiddleware,
  defaultAPIResponseMiddleware,
} from '@/lib/interceptors';

const BASE_URL =
  "http://localhost:9009/artisans";

const artisansAPI = axios.create({
  baseURL: BASE_URL,
});

artisansAPI.interceptors.request.use(defaultAPIRequestMiddleware, (error) =>
  Promise.reject(error)
);

artisansAPI.interceptors.response.use(
  (res) => res,
  (error) => defaultAPIResponseMiddleware(error, artisansAPI)
);

export default artisansAPI;
