import React from "react";
import { getPhoto } from "@/api/photos";
import queryKeys from "@/constants/queryKeys";
import { useQuery } from "@tanstack/react-query";
import classNames from "classnames";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import "./photo.scss";

const Photo = () => {
  const params = useParams<{ id: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const isModal = location.state && location.state.isModal;

  const { data: photo } = useQuery([queryKeys.PHOTO, params.id], () =>
    getPhoto(params.id || "")
  );

  const handleClickBackground = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      navigate(-1);
    }
  };

  return (
    <div className="photo-container">
      <div
        onClick={handleClickBackground}
        className={classNames("photo-background", { modal: isModal })}
      >
        <div className="photo-content__container">
          <div className="photo-content__img-box">
            {photo && (
              <img
                className="photo-content__img"
                src={photo.imgUrl}
                alt=""
                draggable="false"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photo;
