import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import {
  addToCart,
  clear,
  deleteToCart,
  popToCart,
} from "../Redux/Actions/Cart-action";
import { Link } from "react-router-dom";

const Cart = () => {
  const product = useSelector((state) => state.cart);
  // console.log(product);
  const dispatch = useDispatch();

  const totlePrice = product.reduce((acc, product) => {
    // console.log(product.price);
    acc += product.price * product.quantity;
    return acc;
  }, 0);
  useEffect(() => {}, []);

  return (
    <>
      <div className="cart">
        <div className="container-xxl p-5">
          <div className="row">
            {product.length > 0 ? (
              <>
                <div className="p-2 text-center">
                  <h2>Cart</h2>
                </div>
                <div className="col-12 col-md-5 text-center">
                  <h5>Product</h5>
                </div>
                <div className="col-12 col-md-5 text-center">
                  <h5>Details</h5>
                </div>
              </>
            ) : (
              <h1>Your Cart Is Empty!!!</h1>
            )}

            <div className="p-3">
              {product.map((product) => (
                <div className="container card my-3" key={product.id}>
                  <div className="row g-3">
                    <div className="col-12 col-md-5">
                      <div className="p-3">
                        <div className="cart-item-image m-auto">
                          <img src={product.image} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-5">
                      <div className="p-3">
                        <h2>{product.name}</h2>
                        <p className="cart-item-id">
                          Product Brand:{" "}
                          <b className="text-center mb-1"> {product.brand}</b>
                        </p>
                        <p className="cart-item-id">
                          Product Price:{" "}
                          <b className="text-center mb-1">
                            {product.price.toFixed(2)}$
                          </b>
                        </p>
                        <p className="cart-item-id">
                          Product Number:{" "}
                          <b className="text-center mb-1">{product.id}</b>
                        </p>
                        <p className="cart-item-id">
                          Items in Stock:{" "}
                          <b className="text-center mb-1">
                            {(product.price * 1.5).toFixed(2)}
                          </b>
                        </p>
                      </div>
                      <div className="p-3 d-flex justify-content-between align-items-center">
                        <div className="count-handler">
                          <button
                            className="btn btn-outline-secondary"
                            onClick={() => {
                              dispatch(addToCart(product));
                              // setCount(product.quantity);
                            }}
                          >
                            +
                          </button>
                          <div>{product.quantity}</div>
                          {product.quantity == 1 ? (
                            <>
                              <button
                                className="btn btn-outline-secondary"
                                onClick={() => {
                                  dispatch(deleteToCart(product));
                                }}
                              >
                                -
                              </button>
                            </>
                          ) : (
                            <>
                              <button
                                className="btn btn-outline-secondary"
                                onClick={() => {
                                  dispatch(popToCart(product));
                                }}
                              >
                                -
                              </button>
                            </>
                          )}
                        </div>
                        <button
                          className="btn btn-outline-danger"
                          onClick={() => {
                            dispatch(deleteToCart(product));
                          }}
                        >
                          Delete
                        </button>
                      </div>
                      <div className="p-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter coupon code..."
                          id="coupon"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="col-12 p-2 text-end">
                {product.length > 0 ? (
                  <>
                    <div className="d-flex justify-content-between">
                      <h3>Total Price: ${totlePrice.toFixed(2)}</h3>
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          dispatch(clear());
                        }}
                      >
                        Clear
                      </button>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-12 col-md-6 d-flex m-auto justify-content-center mt-4">
                        <Link to="/shop">
                          <button className="btn shopbtn">
                            Continue Shopping
                          </button>
                        </Link>
                      </div>
                      <div className="col-12 col-md-6 total m-auto d-flex flex-column p-5">
                        <div className="col-12">
                          <div className="text-end">
                            <div className="align-items-center">
                              <div className="total-price align-items-center">
                                <b>Total Price: ${totlePrice.toFixed(2)}</b>
                              </div>
                            </div>
                            <Link to="/checkout">
                              <button className="mt-5 btn shopbtn ">
                                Proceed to Checkout
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
