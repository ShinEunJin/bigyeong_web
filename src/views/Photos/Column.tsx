import { Fragment } from "react";
import { Link } from "react-router-dom";

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
                  <div className="photo-box__menu">
                    {/* 아이디 암호화 필요 */}
                    <Link
                      to={photo._id}
                      preventScrollReset={true}
                      state={{ isModal: true }}
                    ></Link>
                  </div>
                </figure>
              ))}
        </Fragment>
      ))}
    </div>
  );
};

export default Column;
