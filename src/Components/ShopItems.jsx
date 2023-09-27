import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { fetchProducts } from "../Redux/Actions/Product-action";
import ReactStars from "react-rating-star-with-type";

import { addToCart, viewToCart } from "../Redux/Actions/Cart-action";
import { Button } from "react-bootstrap";

function ShopItems() {
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <>
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
    </>
  );
}

export default ShopItems;
