import React from "react";
import { ImageInput } from "../components";
import { storiesOf } from "@storybook/react";

storiesOf("ImageInput", module).add("ImageInput", () => {
  const [images, setImages] = React.useState([]);
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ImageInput
        width={500}
        height={300}
        columns={3}
        images={images}
        setImages={setImages}
        isCaption={false}
        maxImg={5}
      />
    </div>
  );
});
