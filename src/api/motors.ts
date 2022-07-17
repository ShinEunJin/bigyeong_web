export const getMotos = (maker: string) => {
  return fetch(
    `https://motorcycle-specs-database.p.rapidapi.com/model/make-name/${maker}`,
    {
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
        "X-RapidAPI-Host": process.env.REACT_APP_API_HOST,
      },
    }
  ).then((res) => res.json());
};

export const getMakers = () => {
  return fetch("https://motorcycle-specs-database.p.rapidapi.com/make", {
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
      "X-RapidAPI-Host": process.env.REACT_APP_API_HOST,
    },
  }).then((res) => res.json());
};

export const getMoto = (id: number) => {
  return fetch(
    `https://motorcycle-specs-database.p.rapidapi.com/article/${id}/image/link`,
    {
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
        "X-RapidAPI-Host": process.env.REACT_APP_API_HOST,
      },
    }
  ).then((res) => res.json());
};

export const getSpec = (id: number) => {
  return fetch(
    `https://motorcycle-specs-database.p.rapidapi.com/article/${id}`,
    {
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
        "X-RapidAPI-Host": process.env.REACT_APP_API_HOST,
      },
    }
  ).then((res) => res.json());
};

export const getModel = (id: number) => {
  return fetch(
    `https://motorcycle-specs-database.p.rapidapi.com/model/make-id/${id}`,
    {
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
        "X-RapidAPI-Host": process.env.REACT_APP_API_HOST,
      },
    }
  ).then((res) => res.json());
};

export const getModels = (id: number, year: number) => {
  return fetch(
    `https://motorcycle-specs-database.p.rapidapi.com/model/make-id/${id}/${year}`,
    {
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
        "X-RapidAPI-Host": process.env.REACT_APP_API_HOST,
      },
    }
  ).then((res) => res.json());
};
