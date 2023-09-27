import ShopItems from "../Components/ShopItems";

const Shop = () => {
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
            <ShopItems />
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
