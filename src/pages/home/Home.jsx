import React, { useEffect } from "react";
import { Carousel } from "antd";
import ShoesCard from "../../components/ShoesCard/ShoesCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductApi } from "../../redux/reducer/productReducer";
import { NavLink } from "react-router-dom";

const Home = () => {
  const { arrProduct } = useSelector((state) => state.productReducer);
  console.log(arrProduct);

  const dispatch = useDispatch();
  const getAllProduct = async () => {
    const action = getAllProductApi();
    dispatch(action);
  };
  useEffect(() => {
    getAllProduct();
  }, []);
  return (
    <div className=" home">
      <Carousel effect={"scroll"}>
        {arrProduct.slice(0, 4).map((item) => {
          return (
            <div key={item?.id} className="carousel">
              <div className="carousel-item">
                <div className="w-35">
                  <img
                    src={item?.image}
                    className="img-fluid"
                    style={{ objectFit: "cover" }}
                    alt="..."
                  />
                </div>
                <div className="w-65">
                  <h2>{item?.name}</h2>
                  <p>{item?.description}</p>
                  <NavLink
                    to={`/detail/${item?.id}`}
                    className="btn btn-warning"
                  >
                    Buy now
                  </NavLink>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
      <div className=" container mt-2 g-0 home__feature">
        <h3 className="text-center mb-3">Product Feature </h3>
        <div className="row g-0">
          {arrProduct.map((prod) => {
            return (
              <div className="col-6 col-md-4 col-lg-3 " key={prod?.id}>
                <ShoesCard prod={prod} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
