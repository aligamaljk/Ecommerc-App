import { Route, Routes } from "react-router";
import "./App.scss";
import Layot from "./Components/layot";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";

import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Wishlist from "./Pages/Wishlist";
import Checkout from "./Pages/Checkout";
import Details from "./Pages/Details";
import Blo from "./Pages/Blo";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import ProductsPage from "./Components/ProductsPage";
// import { ReactQueryDevtools } from "react-query/devtools";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="app">
        <Routes>
          <Route path="/" element={<Layot />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="pages" element={<ProductsPage />} />
            <Route path="blog" element={<Blo />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="cart" element={<Cart />} />
            <Route path="login" element={<Login />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="details/:Id" element={<Details />} />
          </Route>
        </Routes>
      </div>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
}

export default App;
