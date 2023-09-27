import { PRODUCTS1 } from "./Products";
// console.log(PRODUCTS);
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Newarrivals = () => {
  const carouselRef = useRef();
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
  }, []);
  return (
    <>
      <motion.div ref={carouselRef} className="carousel ">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className=" carousel-row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 p-3"
        >
          {PRODUCTS1.map((product) => (
            <motion.div key={product.id} className="col mb-5">
              <motion.div className="card h-100 m-auto">
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
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
};

export default Newarrivals;
