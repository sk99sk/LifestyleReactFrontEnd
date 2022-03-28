import React, {useEffect} from "react";
import Banner from "./Banner";
import SingleProduct from "./SingleProduct";
import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "../actions/productActions";


export default function ProductSection() {
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(listProducts());
  }, []);

  return loading ? (
    <div>Loading</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <div>
      <div className="container">
        <Banner />
        <div
          style={{
            width: "100%",
            display: "block",
            margin: "5px auto",
            textAlign: "center",
            fontSize: "25px",
            fontWeight: "bolder",
            fontFamily: "Georgia, serif",
          }}
        >
          Products
        </div>

        <div className="row">
          
          <div className="col">
            <div className="row">
              {products.productList.map((product) => {
                return (
                  <SingleProduct
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    imgSrc={product.imgSrc}
                    pid={product.id}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
