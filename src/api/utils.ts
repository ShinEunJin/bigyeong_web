export interface ParamsType {
  [key: string]: string;
}

export const attachParams = (url: string, params: ParamsType): string => {
  let urlParam = url;
  let first = true;
  for (let [key, val] of Object.entries(params)) {
    urlParam += `${first ? "?" : "&"}${key}=${val}`;
    first = false;
  }
  return urlParam;
};
