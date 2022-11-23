export interface PhotoType {
  _id: string;
  imgUrl: string;
  title: string;
  writer: string | null;
  location: string;
  detailLocation: string;
  view: number;
  createdAt: string;
  updatedAt: string;
}
