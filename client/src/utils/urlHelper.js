// src/utils/urlHelper.js
export const getPublicUrl = (path) => {
  if (process.env.NODE_ENV === 'development') {
    return path;
  } else {
    return `${process.env.PUBLIC_URL}${path}`;
  }
};