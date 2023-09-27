import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

const Layot = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layot;
