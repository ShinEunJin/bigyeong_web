import { Fragment } from "react";

import { PhotoType } from "./types";

interface ColumnPropsType {
  data: PhotoType[][] | undefined;
  pageIdx: number;
}

const Column = (props: ColumnPropsType) => {
  return (
    <div className="photos-grid__column">
      {props.data?.map((photos, idx) => (
        <Fragment key={idx}>
          {photos &&
            photos
              .filter((_v, idx) => idx % 3 === props.pageIdx)
              .map((photo) => (
                <figure key={photo._id} className="photo-box">
                  <img className="photo-box__img" alt="" src={photo.imgUrl} />
                  <div className="photo-box__menu"></div>
                </figure>
              ))}
        </Fragment>
      ))}
    </div>
  );
};

export default Column;
