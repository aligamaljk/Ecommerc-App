import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
// import { fetchProducts } from "../Redux/Actions/Product-action";
import ReactStars from "react-rating-star-with-type";
import { AiFillCaretLeft } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";
import { addToCart, viewToCart } from "../Redux/Actions/Cart-action";
import { Button } from "react-bootstrap";
// import Demo from "../Pages/demo";
const ProductsPage = () => {
  const [number, setNumber] = useState(1);
  const [product, setProduct] = useState([]);
  const fetchProduct = (number) => {
    axios
      .get(`http://localhost:9000/PRODUCTS?_limit=8&_page=${number}`)
      .then((res) => setProduct(res.data));
  };
  console.log(product);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchProduct(number);
  }, [number]);
  return (
    <>
      <section className="shop p-5">
        <div className="container-xxl">
          <div className="row">
            <div className="shop-details">
              <h1 className="mb-3 text-white">
                <span className="title-green">#100%</span> Off On All Products
              </h1>
              <p>Make your orders we will deliver..</p>
            </div>
          </div>
        </div>
      </section>
      <section className="featured-products p-5">
        <div className="container-xxl">
          <div className="row">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
              {product.map((product) => (
                <div key={product.id} className="col mb-5">
                  <div className="card h-100 m-auto">
                    <img
                      src={product.image}
                      alt=""
                      className="card-img-top img-fluid"
                    />
                    <div className="card-body">
                      <p className="card-text mb-2">{product.brand}</p>
                      <h5>{product.name}</h5>
                      <ReactStars
                        count={5}
                        value={4}
                        size={24}
                        edit={false}
                        activeColor="#cca27e"
                      />
                      <div className="mb-3">
                        <p className="price mb-2">
                          <span className="red">{product.price}$</span>
                          &nbsp;<strike>{product.price * 2}$</strike>
                        </p>
                        <Link to={`/details/${product.id}`}>
                          <div
                            onClick={() => {
                              // console.log(product);
                              dispatch(viewToCart(product));
                            }}
                          >
                            View Details
                          </div>
                        </Link>
                      </div>
                      <div className="d-flex justify-content-center">
                        <Button
                          className="myButton btn  w-100 text-centar"
                          onClick={() => {
                            dispatch(addToCart(product));
                          }}
                        >
                          Add To Cart
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button
              style={{ width: "fit-content", margin: "auto" }}
              className="btn btn-primary"
              onClick={() => setNumber(+number - 1)}
              disabled={number === 1}
            >
              <AiFillCaretLeft /> Prev Page
            </button>
            <h2 style={{ width: "fit-content" }}> Page {number}</h2>
            <button
              style={{ width: "fit-content", margin: "auto" }}
              className="btn btn-primary"
              onClick={() => setNumber(+number + 1)}
              disabled={number === 5}
            >
              Next Page <AiFillCaretRight />
            </button>
          </div>
          {/* <div style={{ width: "fit-content", margin: "auto" }}>
            <Demo />
          </div> */}
        </div>
      </section>
    </>
  );
};

export default ProductsPage;
