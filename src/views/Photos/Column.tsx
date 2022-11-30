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
                <img
                  key={photo._id}
                  alt=""
                  src={photo.imgUrl}
                  style={{ width: "100%" }}
                />
              ))}
        </Fragment>
      ))}
    </div>
  );
};

export default Column;
