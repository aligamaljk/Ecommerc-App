import orders from "../assets/Images/icons/icon1.png";
import orders1 from "../assets/Images/icons/icon2.png";
import orders2 from "../assets/Images/icons/icon3.png";
import orders3 from "../assets/Images/icons/icon4.png";
import orders4 from "../assets/Images/icons/icon5.png";
const Hero = () => {
  return (
    <>
      <section className="hero p-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 hero-details">
              <div className="row g-4 justify-content-center justify-content-md-between align-items-center">
                <div className="col-6 col-md-4 col-lg-2">
                  <div className="card text-center m-auto">
                    <img src={orders} alt="" />
                    <p className="card-text mb-0">Fast Orders</p>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <div className="card text-center m-auto">
                    <img src={orders1} alt="" />
                    <p className="card-text mb-0">Quick Shipping</p>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <div className="card text-center m-auto">
                    <img src={orders2} alt="" />
                    <p className="card-text mb-0">High Saves</p>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <div className="card text-center m-auto">
                    <img src={orders3} alt="" />
                    <p className="card-text mb-0">24/7 Support</p>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <div className="card text-center m-auto">
                    <img src={orders4} alt="" />
                    <p className="card-text mb-0">Online Orders</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
