// Libraries
import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Pages
import Home from "./pages/customer/home";
import AdministratorProductsCreate from "./pages/administrator/products/create";

// context
import CreateProductContextProvider from "./contexts/administrator/products/createProductContext";

function App() {
  return (
    <div>
      <BrowserRouter>
        <CreateProductContextProvider>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route
              exact
              path="/administrator/products/create"
              element={<AdministratorProductsCreate />}
            />
          </Routes>
        </CreateProductContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
