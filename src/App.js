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
import Cart from "./pages/customer/checkout/cart";
import Shipping from "./pages/customer/checkout/shipping";
import Summary from "./pages/customer/checkout/summary";
import Payment from "./pages/customer/checkout/payment";
import Account from "./pages/customer/account";

// admin
import AdministratorProductsCreate from "./pages/administrator/products/create";

// context
import LoginContextProvider from "./contexts/customer/loginContext";
import ProductsContextProvider from "./contexts/customer/productsContext";
import FavoriteProductsContextProvider from "./contexts/customer/favoriteProductsContext";
// admin
import CreateProductContextProvider from "./contexts/administrator/products/createProductContext";

function App() {
  return (
    <div>
      <BrowserRouter>
        <FavoriteProductsContextProvider>
          <ProductsContextProvider>
            <LoginContextProvider>
              <CreateProductContextProvider>
                <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route
                    exact
                    path="/products"
                    element={<CustomerProducts />}
                  />
                  <Route
                    exact
                    path="/products/:ID"
                    element={<CustomerProduct />}
                  />
                  <Route exact path="/login" element={<Login />} />
                  <Route exact path="/register" element={<Register />} />
                  <Route exact path="/cart" element={<Cart />} />
                  <Route exact path="/shipping" element={<Shipping />} />
                  <Route exact path="/summary" element={<Summary />} />
                  <Route exact path="/payment" element={<Payment />} />
                  <Route exact path="/account" element={<Account />} />

                  <Route
                    exact
                    path="/administrator/products/create"
                    element={<AdministratorProductsCreate />}
                  />
                </Routes>
              </CreateProductContextProvider>
            </LoginContextProvider>
          </ProductsContextProvider>
        </FavoriteProductsContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
