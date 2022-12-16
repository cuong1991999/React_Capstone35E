import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductByIdApi } from "../../redux/reducer/productReducer";
import ShoesCard from "../../components/ShoesCard/ShoesCard";

const Detail = () => {
  const { productDetail } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();

  console.log(productDetail);
  const param = useParams();

  const getProductById = () => {
    const action = getProductByIdApi(param.id);
    dispatch(action);
  };

  useEffect(() => {
    getProductById();
  }, [param.id]);
  return (
    <section className="detail">
      <div className="product__detail container">
        <div className="row product__detail-item">
          <div className="col-lg-4">
            <img src={productDetail?.image} className="w-100" alt="..." />
          </div>
          <div className="col-lg-8 product__item-info">
            <h3>{productDetail?.name}</h3>
            <p>{productDetail?.description}</p>
            <p>Available size</p>
            <div className="product__item-btn">
              {productDetail?.size.map((item) => {
                return <button key={item}>{item}</button>;
              })}
            </div>
            <p>{productDetail?.price}$</p>
            <div className="product__item-btn-quantity">
              <button>+</button>
              <span>1</span>
              <button>-</button>
            </div>
            <button className="btn product__item-btn-cart">Add to cart</button>
          </div>
        </div>
      </div>
      <div className="realate-product container mt-3">
        <h2 className="text-center mb-3">Realate Product</h2>
        <div className="row">
          {productDetail?.relatedProducts.map((item) => {
            return (
              <div className="col-6 col-md-4 col-lg-3" key={item.id}>
                <ShoesCard prod={item} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Detail;
