import * as React from "react";
import { SlideFade } from "@chakra-ui/react";

function FeaturedProducts(props) {
  let [images, setImages] = React.useState([
    {
      ID: 134242322,
      url: "https://www.solidbackgrounds.com/images/7680x4320/7680x4320-glaucous-solid-color-background.jpg",
    },
    {
      ID: 2748338,
      url: "https://www.solidbackgrounds.com/images/7680x4320/7680x4320-light-salmon-pink-solid-color-background.jpg",
    },
    {
      ID: 7864673,
      url: "https://www.solidbackgrounds.com/images/7680x4320/7680x4320-safety-yellow-solid-color-background.jpg",
    },
  ]);
  let [currentImage, setCurrentImage] = React.useState(images[0]["url"]);
  let [isOpen, setIsOpen] = React.useState(true);
  let [showGalleryPointer, setShowGalleryPointer] = React.useState(false);

  function handleClickGalleryPointer(url) {
    setCurrentImage(url);

    setIsOpen(false);
    setTimeout(function () {
      setIsOpen(true);
    }, 1000);
  }

  function handleShowGalleryPointer() {
    setShowGalleryPointer(true);
  }

  function handleShowGalleryPointerOnMouseLeave() {
    setShowGalleryPointer(false);
  }

  return (
    <div
      onMouseEnter={handleShowGalleryPointer}
      onMouseLeave={handleShowGalleryPointerOnMouseLeave}
    >
      <SlideFade in={isOpen}>
        <img
          style={{
            objectFit: "cover",
            width: "100%",
            height: "30rem",
            borderRadius: ".5rem",
          }}
          src={currentImage}
          alt=""
        />
      </SlideFade>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "1rem",
          color: showGalleryPointer ? "black" : "white",
        }}
      >
        {images.map((image) => (
          <div
            style={{ cursor: "pointer" }}
            onClick={function () {
              handleClickGalleryPointer(image["url"]);
            }}
          >
            {" "}
            <i className="bi bi-circle"></i>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedProducts;
