const url = process.env.REACT_APP_API_URL;

export const getPhotos = () => {
  return fetch(`${url}/api/v1/photos?category=${"TODEST"}`).then((res) =>
    res.json()
  );
};
