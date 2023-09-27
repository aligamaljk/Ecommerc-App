import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/Actions/Cart-action";
import axios from "axios";
import { useParams } from "react-router";

import { useQuery } from "@tanstack/react-query";

const Details = () => {
  const { Id } = useParams();

  const fetchProduct = () => {
    return axios.get(`http://localhost:9000/PRODUCTS/${Id}`);
  };
  const { isLoading, isError, error, data } = useQuery({
    queryKey: "product",
    queryFn: fetchProduct,
  });

  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return <h2>{error.message}</h2>;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useDispatch();

  return (
    <div className="details p-5">
      <div className="container-xxl">
        <div className="row">
          <div className="d-flex flex-column align-items-center">
            <h1 className="mb-3"></h1>
            <p className="mb-3"></p>
          </div>
          <div className="col-12 p-5">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-6">
                  <img
                    src={data?.data.image}
                    className="img-fluid rounded-start"
                    alt=""
                  />
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <h5>Brand: {data?.data.brand}</h5>
                    <h5>
                      Details:
                      <br /> <p className="card-text">{data?.data.name}</p>
                    </h5>
                    <h5>Price: {data?.data.price}$</h5>
                    <strike>{data?.data.price * 2}$</strike>
                  </div>
                  <button
                    className="btn btn-primary myButton "
                    id="button-link"
                    onClick={() => {
                      dispatch(addToCart(data.data));
                    }}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
