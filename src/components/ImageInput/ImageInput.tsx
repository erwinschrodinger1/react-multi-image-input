import React from "react";
import "./ImageInput.css";
import ImageInside from "../../components/ImageInside/ImageInside";

const ImageGallery = require("./images.svg") as string;
export default function ImageInput({
  width,
  height,
  images,
  setImages,
  columns,
  isCaption,
}: {
  width: number;
  height?: number;
  images: any;
  setImages: any;
  columns: number;
  isCaption?: boolean;
}) {
  const onFileSelect = (e: any) => {
    const selectedFiles = e.target.files;
    let selectedFilesArray = Array.from(selectedFiles);

    if (selectedFilesArray.length > 5) {
      selectedFilesArray = selectedFilesArray.slice(-5);
    }

    let imagesArray = images.concat(
      selectedFilesArray.map((file: any) => {
        if (isCaption) {
          return { caption: "", src: URL.createObjectURL(file) };
        }
        return { src: URL.createObjectURL(file) };
      })
    );
    if (imagesArray.length > 5) {
      imagesArray = imagesArray.slice(-5);
    }

    setImages(imagesArray);
  };
  function onFileRemove(index: number) {
    setImages([...images.slice(0, index), ...images.slice(index + 1)]);
  }
  return (
    <div
      className={`ImageInput`}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      {images.length === 0 ? (
        <div className="overlay">
          <img src={ImageGallery} alt="" height={"30%"} width={"30%"} />{" "}
          <p style={{ color: "#434242" }}>Upload Image</p>
          <input
            type={"file"}
            accept="image/*"
            multiple
            onChange={onFileSelect}
          />
        </div>
      ) : (
        <div
          className="images"
          style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
        >
          {images.map((img: any, index: number) => {
            return (
              <ImageInside
                index={index}
                setImage={setImages}
                onFileRemove={onFileRemove}
                images={images}
                isCaption={isCaption}
              />
            );
          })}
          <div className="addMore">
            <p style={{ color: "#434242" }}>Add More +</p>
            <input
              type={"file"}
              accept="image/*"
              multiple
              onChange={onFileSelect}
            />
          </div>
        </div>
      )}
    </div>
  );
}
