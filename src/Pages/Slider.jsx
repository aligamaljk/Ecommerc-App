import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Slider = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const products = useSelector((state) => state.product);
  //   console.log(products);
  return (
    <div className="carousel ">
      <div className=" carousel-row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 p-3">
        <Carousel responsive={responsive}>
          {products.map((product) => (
            <div key={product.id} className="col mb-5">
              <div className="card h-100 m-auto">
                <img
                  src={product.image}
                  alt="carousel-img"
                  className="card-img-top img-fluid"
                />
                <div className="card-body">
                  <p className="card-text mb-2"> {product.brand} </p>
                  <h5 className="mb-3">{product.name} </h5>
                  <div className="card-footer m-auto text-center">
                    <p className="text-danger ">{product.status}</p>
                    <p className="price">
                      <span className="red"></span>
                      <strike>${product.rate}</strike>
                    </p>
                  </div>
                  <div className="card-footer d-flex align-center ">
                    <div className="d-flex justify-content-between align-items-center text-center"></div>
                    <Link to="/shop" className="m-auto btn btn-primary">
                      View products
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Slider;
