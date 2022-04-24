import * as React from "react";
import axios from "axios";

export const CreateProductContext = React.createContext();

function CreateProductContextProvider(props) {
  var [isLoading, setIsLoading] = React.useState(false);
  var [progress, setProgress] = React.useState(0);

  async function handleCreateProduct(product) {
    setIsLoading(true);

    var formData = new FormData();
    formData.append("ID", product["ID"]);
    formData.append("name", product["name"]);
    formData.append("price", product["price"]);
    formData.append("quantity", product["quantity"]);
    formData.append("category", product["category"]);
    formData.append("description", product["description"]);

    for (var i = 0; i < product["uploadedImages"].length; i++) {
      formData.append(`uploadedImage`, product["uploadedImages"][i]);
    }

    const config = {
      headers: { "content-type": "multipart/form-data" },
      onUploadProgress: (progressEvent) => {
        const progress = Math.round(
          (progressEvent.loaded / progressEvent.total) * 50
        );
        setProgress(progress);
      },
    };

    // communicate to the backend
    var send = await axios.post(
      `http://localhost:5000/administrator/products/create`,
      formData,
      config
    );

    if (send["data"]["message"] === "OK") {
      setIsLoading(false);
    }
  }

  // mate of handleCreateProduct
  var handleCreateProductMate = handleCreateProduct;

  return (
    <CreateProductContext.Provider
      value={{
        handleCreateProductMate: handleCreateProductMate,
        progress: progress,
        isLoading: isLoading,
      }}
    >
      {props.children}
    </CreateProductContext.Provider>
  );
}

export default CreateProductContextProvider;
