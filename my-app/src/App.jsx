import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";

import PublicLayout from "./Layouts/PublicLayout";

import HomePage from "./Pages/HomePage";
import ProductsPage from "./Pages/ProductsPage";
import ProductDetailsPage from "./Pages/ProductDetailsPage";

import CartPage from "./Pages/CartPage";
import CheckoutPage from "./Pages/CheckoutPage";

import Login from "./Pages/Login";
import Register from "./Pages/Register";

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<PublicLayout />}>

            {/* 🏠 Home */}
            <Route index element={<HomePage />} />

            {/* 🛍️ Pages */}
            <Route path="products" element={<ProductsPage />} />
            <Route path="product/:id" element={<ProductDetailsPage />} />

            <Route path="cart" element={<CartPage />} />
            <Route path="checkout" element={<CheckoutPage />} />

            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />

          </Route>

        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}