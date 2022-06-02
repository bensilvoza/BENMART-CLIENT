// libraries
import * as React from "react";
// rich text editor
import { Editor } from "@tinymce/tinymce-react";
// Base Web
import { Grid, Cell } from "baseui/layout-grid";
import { FormControl } from "baseui/form-control";
import { Input } from "baseui/input";
import { FileUploader } from "baseui/file-uploader";
import { Select } from "baseui/select";
import { Button, KIND as KINDBUTTON } from "baseui/button";
import { Spinner } from "baseui/spinner";
import { Notification } from "baseui/notification";

// context
import { CreateProductContext } from "../../../contexts/administrator/products/createProductContext";

// components
import HeaderNavigationCompact from "../../../components/headerNavigationCompact";
import Space from "../../../components/space";

function Create() {
  // context
  var { handleCreateProductMate, progress, isLoading } =
    React.useContext(CreateProductContext);

  // rich text editor
  // Tiny Cloud
  var tinyCloudKey = process.env.REACT_APP_TINYCLOUD_KEY;

  var [name, setName] = React.useState("");
  var [uploadedImages, setUploadedImages] = React.useState([]);
  var [description, setDescription] = React.useState("");
  var [price, setPrice] = React.useState("");
  var [quantity, setQuantity] = React.useState("");
  var [category, setCategory] = React.useState("");
  var [currentSelectedImage, setCurrentSelectedImage] = React.useState("");

  // uploadedImages
  function handleMouseEnterOnGallery(imageDetail) {
    setCurrentSelectedImage(imageDetail);
  }

  function handleMouseLeaveOnGallery() {
    setCurrentSelectedImage("");
  }

  function handleClickDeleteImage(imageDetail) {
    var uploadedImagesCopy = [...uploadedImages];
    for (var i = 0; i < uploadedImages.length; i++) {
      if (uploadedImages[i]["name"] === imageDetail) {
        uploadedImagesCopy.splice(i, 1);
        return setUploadedImages(uploadedImagesCopy);
      }
    }
  }

  function handleSubmitProduct(e) {
    e.preventDefault();

    // to prevent duplication of submission
    if (isLoading === true) {
      return;
    }

    var productDetails = {
      ID: Math.floor(Math.random() * 1000000000),
      name: name,
      uploadedImages: uploadedImages,
      description: description,
      price: price,
      quantity: quantity,
      category: category[0]["label"],
    };

    // context
    handleCreateProductMate(productDetails);
  }

  return (
    <div>
      {/* Notification for uploading files */}
      {isLoading === true && (
        <span style={{ position: "fixed", bottom: "0", right: "0" }}>
          <Notification closeable>
            <span>Please wait... {progress}%</span>
          </Notification>
        </span>
      )}
      {/* End, Notification for uploading files */}

      <Grid
        overrides={{
          Grid: {
            style: {
              display: "flex",
              justifyContent: "center",
            },
          },
        }}
      >
        <Cell span={12}>
          <Space value="2rem" />
          <HeaderNavigationCompact />
        </Cell>

        {/* space main */}
        <Cell span={12}></Cell>

        <Cell span={8}>
          <form onSubmit={handleSubmitProduct}>
            <Space value="5rem" />
            <p
              style={{
                fontSize: "2rem",
                fontFamiy: "Montserrat",
              }}
            >
              Create Product
            </p>
            <Space value=".5rem" />
            <FormControl label="Name">
              <Input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.currentTarget.value)}
              />
            </FormControl>

            <Space value=".5rem" />

            <FormControl label="Add image">
              <FileUploader
                multiple
                name="uploadedFile"
                onDrop={function (acceptedImages) {
                  var uploadedImagesCopy = [...uploadedImages];
                  uploadedImagesCopy.push(...acceptedImages);
                  setUploadedImages(uploadedImagesCopy);
                }}
              />
            </FormControl>

            <div style={{ display: "flex" }}>
              {uploadedImages.map((uploadedImage) => (
                <Cell span={2}>
                  <div
                    onMouseEnter={function () {
                      handleMouseEnterOnGallery(uploadedImage["name"]);
                    }}
                    onMouseLeave={handleMouseLeaveOnGallery}
                  >
                    <div
                      style={{
                        border: "1px solid lightgray",
                        padding: ".2rem",
                        borderRadius: ".5rem",
                      }}
                    >
                      <img
                        style={{
                          objectFit: "cover",
                          width: "100%",
                          height: "5rem",
                          borderRadius: ".5rem",
                        }}
                        src={URL.createObjectURL(uploadedImage)}
                      />
                    </div>
                    <div
                      style={{
                        color:
                          currentSelectedImage === uploadedImage["name"]
                            ? "red"
                            : "white",
                        cursor: "pointer",
                        textAlign: "center",
                      }}
                      onClick={function () {
                        handleClickDeleteImage(uploadedImage["name"]);
                      }}
                    >
                      DELETE
                    </div>
                  </div>
                </Cell>
              ))}
            </div>

            <Space value=".5rem" />

            <FormControl label="Price">
              <Input
                type="number"
                required
                value={price}
                onChange={(e) => setPrice(e.currentTarget.value)}
              />
            </FormControl>

            <Space value=".5rem" />

            <FormControl label="Quantity">
              <Input
                type="number"
                required
                value={quantity}
                onChange={(e) => setQuantity(e.currentTarget.value)}
              />
            </FormControl>

            <Space value=".5rem" />

            <FormControl label="Category">
              <Select
                options={[
                  { label: "Cap", id: "1" },
                  { label: "Shoes", id: "2" },
                  { label: "Slippers", id: "3" },
                  { label: "T-shirt", id: "4" },
                  { label: "Shorts", id: "5" },
                  { label: "Perfume", id: "6" },
                ]}
                value={category}
                placeholder="Select color"
                onChange={(params) => setCategory(params.value)}
              />
            </FormControl>

            <Space value=".5rem" />

            <FormControl label="Description">
              <Editor
                apiKey={tinyCloudKey}
                initialValue=""
                init={{
                  height: 500,
                  menubar: false,
                  plugins: [
                    "advlist autolink lists link image",
                    "charmap print preview anchor help",
                    "searchreplace visualblocks code",
                    "insertdatetime media table paste wordcount",
                  ],
                  toolbar:
                    "formatselect | bold italic | \
            alignleft aligncenter alignright | \
            bullist numlist outdent indent | undo redo | help",
                }}
                onChange={function (e) {
                  setDescription(e.target.getContent());
                }}
              />
            </FormControl>

            <Space value="2rem" />

            <Button kind={KINDBUTTON.secondary}>Cancel</Button>
            <Button
              type="submit"
              overrides={{
                BaseButton: {
                  style: { marginLeft: "1rem" },
                },
              }}
            >
              {isLoading === true ? (
                <span>Please wait...</span>
              ) : (
                <span>Create</span>
              )}
            </Button>
            <Space value="8rem" />
          </form>
        </Cell>
      </Grid>
    </div>
  );
}

export default Create;
