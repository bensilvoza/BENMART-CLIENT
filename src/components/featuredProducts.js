import * as React from "react";

function FeaturedProducts(props) {
  let [images, setImages] = React.useState([
    {
      ID: 134242322,
      url: "https://d1rlzxa98cyc61.cloudfront.net/kemana/banner/contents/lg-brand-week-main-kv-1200x564_3.jpg",
    },
    {
      ID: 2748338,
      url: "https://res.cloudinary.com/benblog-cloudinary/image/upload/v1651460974/nathan-oakley-q2xKzfyg83w-unsplash_kz0csc.jpg",
    },
    {
      ID: 7864673,
      url: "https://res.cloudinary.com/benblog-cloudinary/image/upload/v1651460974/kyoshi-reyes-Ps_ujcY0oT8-unsplash_lto6i1.jpg",
    },
  ]);
  let [currentImage, setCurrentImage] = React.useState(images[0]["url"]);
  let [isOpen, setIsOpen] = React.useState(true);
  let [showGalleryPointer, setShowGalleryPointer] = React.useState(false);

  function handleClickGalleryPointer(url) {
    setCurrentImage(url);
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
            style={{ cursor: "pointer", marginRight: ".3rem" }}
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
