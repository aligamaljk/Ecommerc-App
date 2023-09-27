import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Images/apneck.png";
import { Container, InputGroup } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { RiInboxArchiveLine } from "react-icons/ri";
import { VscAccount } from "react-icons/vsc";
import { CgShoppingCart } from "react-icons/cg";
import { useSelector } from "react-redux";
const Header = () => {
  const product = useSelector((state) => state.cart);
  // console.log(product.length);
  const location = useLocation();
  return (
    <>
      <header className="header-top-strip p-2 shadow-md">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-6">
              <p>The trending outfits at 100% off</p>
            </div>
            <div className="col-6 d-flex justify-content-center align-items-center nav-title">
              <div>
                <a href="href=tel:+254708118414">
                  Call us at +01 (026) 561-874
                </a>
              </div>
              <div className="nav-icon">
                <Link to={""}>
                  <AiOutlineMail className="fs-3" />
                </Link>
                <Link to={""}>
                  <BiPhoneCall className="fs-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      <header className="header-upper navbar-middle sticky-top p-2 p-md-2 p-lg-2">
        <Container>
          <div className="constainer-xxl ">
            <div className="row align-items-center ">
              <div className="col-md-2 d-flex justify-content-center">
                <Link to="/">
                  <img src={logo} alt="" className="img-fluid logo" />
                </Link>
              </div>
              <div className="col-md-10 row col-lg-10  ">
                <div className="col-md-3 m-auto ">
                  <div className="input-group d-none d-md-flex ">
                    <InputGroup>
                      <Form.Control
                        className="form"
                        placeholder="Find Products ..."
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                      />
                      <InputGroup.Text id="basic-addon2">
                        <button className="btn btn-sm "> search </button>
                      </InputGroup.Text>
                    </InputGroup>
                  </div>
                </div>
                <div className="col-md-6 m-auto ">
                  <div className="nav-links menu-links d-none d-md-flex d-lg-flex">
                    <div className="ms-auto gap-3">
                      <Link
                        to="/"
                        className={
                          location.pathname === "/" ? "active" : "inactive"
                        }
                      >
                        HOME
                      </Link>
                    </div>
                    <div className="ms-auto gap-3">
                      <Link
                        to="/shop"
                        className={
                          location.pathname === "/shop" ? "active" : "inactive"
                        }
                      >
                        SHOP
                      </Link>
                    </div>
                    <div className="ms-auto gap-3">
                      <Link
                        to="/pages"
                        className={
                          location.pathname === "/pages" ? "active" : "inactive"
                        }
                      >
                        PAGES
                      </Link>
                    </div>
                    <div className="ms-auto gap-3">
                      <Link
                        to="/blog"
                        className={
                          location.pathname === "/blog" ? "active" : "inactive"
                        }
                      >
                        {" "}
                        BLOG
                      </Link>
                    </div>
                    <div className="ms-auto gap-3">
                      <Link
                        to="/about"
                        className={
                          location.pathname === "/about" ? "active" : "inactive"
                        }
                      >
                        ABOUT
                      </Link>
                    </div>
                    <div className="ms-auto gap-3">
                      <Link
                        to="/contact"
                        className={
                          location.pathname === "/contact"
                            ? "active"
                            : "inactive"
                        }
                      >
                        CONTACT
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 m-auto ">
                  <div className="row d-flex justify-content-center">
                    <div className=" nav-link d-flex align-items-center text-center justify-content-between m-auto w-100">
                      <div className=" d-flex align-items-center text-center">
                        <Link
                          to="/wishlist"
                          className={
                            location.pathname === "/wishlist"
                              ? "inactive-link"
                              : "link"
                          }
                        >
                          <RiInboxArchiveLine />
                          <span className=" fs-6 m-0">Wishlist</span>
                        </Link>
                      </div>
                      <div className=" d-flex align-items-center text-center">
                        <Link
                          to="/login"
                          className={
                            location.pathname === "/login"
                              ? "inactive-link"
                              : "link"
                          }
                        >
                          <VscAccount />
                          <span className=" fs-6 m-0">Account</span>
                        </Link>
                      </div>
                      <div className=" d-flex align-items-center text-center">
                        <Link
                          to="/cart"
                          className={
                            location.pathname === "/cart"
                              ? "inactive-link"
                              : "link"
                          }
                        >
                          <CgShoppingCart />
                          <span className=" add-cart fs-6 m-0">
                            Cart- <span>{product.length}</span>{" "}
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;
//
