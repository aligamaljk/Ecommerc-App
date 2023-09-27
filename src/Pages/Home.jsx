import { Link } from "react-router-dom";
import Hero from "../Components/Hero";
import FeaturedProducts from "../Components/FeaturedProducts";
import Newarrivals from "../Components/Newarrivals";
import img from "../assets/Images/banner/b10.jpg";
import img2 from "../assets/Images/banner/b17.jpg";
import Blog from "./Blog";
import Slider from "./Slider";
const Home = () => {
  return (
    <>
      <section className="banner ">
        <div className="contaner-xxl">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="d-flex flex-column justify-content-center ">
                <div className="carousel slide">
                  <div className="carousel-inner">
                    <div className="banner-details">
                      <p className="mb-3">Trade in offer</p>
                      <h1>Super Value Deals</h1>
                      <h2>On all products</h2>
                      <p className="mb-3">Save more today with Apneck</p>
                      <Link
                        to="/shop"
                        className="btn btn-primary"
                        id="button-link"
                      >
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Hero />
      <div className="feaured-products p-5">
        <div className="conatiner-xxl">
          <div className="row">
            <div className="col-12 text-center mb-3">
              <h1>Featured Products</h1>
              <p>All Weather New Modern Designs</p>
            </div>
          </div>
          <Slider />
        </div>
      </div>
      <div className="feaured-products p-5">
        <div className="conatiner-xxl">
          <div className="row">
            <div className="col-12 text-center mb-3">
              <h1>Featured Products</h1>
              <p>All Weather New Modern Designs</p>
            </div>
          </div>
          <FeaturedProducts />
        </div>
      </div>
      <section className="repair-services p-5">
        <div className="container-xxl">
          <div className="row">
            <div className="repair-details">
              <h5 className="mb-3 text-white">Repair Services</h5>
              <h2 className="mb-3 text-white">
                On 70% Off on All Products And Accessories
              </h2>
              <button>Explore Now</button>
            </div>
          </div>
        </div>
      </section>
      <div className="feaured-products p-5">
        <div className="conatiner-xxl">
          <div className="row">
            <div className="col-12 text-center mb-3">
              <h1>New Arrivals</h1>
              <p>Your Best Designer Outfits</p>
            </div>
          </div>
          <Newarrivals />
        </div>
      </div>
      <section className="hot-deals p-5 d-flex flex-column flex-md-row justify-content-center align-items-center align-items-md-start">
        <div className="container-xxl">
          <div className="row">
            <div className="col-md-6 d-flex">
              <div className="card m-auto mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={img2}
                      alt=""
                      className="img-fluid rounded-start"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h2 className="card-title">Hot Deals</h2>
                  <h2 className="card-text mb-2">Buy One get One free.</h2>
                  <p className="card-text mb-2">
                    <small className="text-body-secondary">
                      The latest best collection in our closet
                      <br />
                      Feel Cute with our outfits
                    </small>
                  </p>
                  <Link to="/blog">
                    <button className="mt-4">Learn more</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex">
              <div className="card m-auto mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={img} alt="" className="img-fluid rounded-start" />
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h2 className="card-title">Hot Deals</h2>
                  <h2 className="card-text mb-2">Buy One get One free.</h2>
                  <p className="card-text mb-2">
                    <small className="text-body-secondary">
                      The latest best collection in our closet
                      <br />
                      Feel Cute with our outfits
                    </small>
                  </p>
                  <Link to="/blog">
                    <button className="mt-4">Learn more</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="blogs p-5">
        <div className="container-xxl">
          <div className="row">
            <Blog />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
