// Libraries
import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Pages
import Home from "./pages/customer/home";
import CustomerProducts from "./pages/customer/products/products";
import CustomerProduct from "./pages/customer/products/product";
import Login from "./pages/customer/login";
import Register from "./pages/customer/register";

// admin
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
            <Route exact path="/products" element={<CustomerProducts />} />
            <Route exact path="/products/:ID" element={<CustomerProduct />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />

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
