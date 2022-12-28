import React from "react";
import "./ImageInside.css";
export default function ImageInside({
  index,
  images,
  width,
  onFileRemove,
  setImage,
  isCaption,
}: {
  index: number;
  images?: any;
  width?: number;
  onFileRemove?: any;
  setImage?: any;
  isCaption?: boolean;
}) {
  return (
    <div className="ImageInside">
      <img src={images[index].src} alt="" />
      <span
        onClick={() => {
          onFileRemove(index);
        }}
        style={{ color: "red" }}
        className="crossButton"
      >
        X
      </span>
      {isCaption && (
        <textarea
          placeholder="Caption"
          onChange={(e) => {
            let temp = images;
            temp[index].caption = e.target.value;
            setImage(temp);
          }}
          defaultValue={"Caption: "}
        />
      )}
    </div>
  );
}
