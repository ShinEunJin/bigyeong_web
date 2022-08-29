const baseUrl = process.env.REACT_APP_API_URL;

const PHOTOS = "/api/v1/photos";

let routes = {
  photos: PHOTOS,
};

for (let [key, val] of Object.entries(routes)) {
  routes[key] = baseUrl + val;
}

export default routes;
