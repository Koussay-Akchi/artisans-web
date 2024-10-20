import { v4 as uuidv4 } from 'uuid';

const defaultAPIRequestMiddleware = (config: any) => {
  const accessToken = localStorage.getItem('access-token');

  if (config.headers) {
    if (accessToken) config.headers['Authorization'] = `Bearer ${accessToken}`;
    config.headers['x-b3-traceId'] = uuidv4();
    config.headers['x-app-version'] = 1.0;
    config.headers['x-product-name'] = 'DESKTOP';
  }

  return config;
};

const errorMsgs: Record<number, string> = {
  500: 'Server error. Please try again later.',
  503: 'Service Unavailable. Please try again later.',
  401: 'Unauthorized',
  403: "You don't have permissions to access this resource.",
};
const errorCodes = Object.keys(errorMsgs);

const defaultAPIResponseMiddleware = async (err: any, axiosAPI: any) => {
  // HANDLE GLOBAL 500, 503, 401 AND 403 STATUS CODE ERRORS
  const { status } = err.response || {};

  // HANDLE REFRESH TOKENS
  const originalConfig = err.config;

  if (
    !originalConfig.url.endsWith('/auth/refresh') &&
    err.response &&
    err.response.status === 401 &&
    err.response.data.message === 'Revoked, expired or invalid token' &&
    !originalConfig._retry
  ) {
    try {
      // TODO: REFRESH TOKENS
      // TODO: SAVE TOKENS
      // TODO: ADD Authorization HEADER TO config AND RETRY REQUEST
      return axiosAPI(originalConfig);
    } catch (err2) {
      return Promise.reject(err2);
    }
  }

  return Promise.reject(err);
};

export { defaultAPIRequestMiddleware, defaultAPIResponseMiddleware };
