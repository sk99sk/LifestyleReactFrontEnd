import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export default function ProductDetail(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies(["cartItems","total"]);
  const { id } = useParams();
  let navigate = useNavigate();
 const {token,setToken} = props.Token;
  useEffect(() => {
    const url = `http://localhost:8080/SpringMVCHibernate/products-json`;

    fetch(url)
      .then((data) => data.json())
      .then((parsedData) => parsedData.productList)
      .then((products) => products.find((x) => (x.id == id)))
      .then((product) => {
        setName(product.name);
        setDescription(product.description);
        setPrice(product.price);
      });
  }, []);

  const handleAddToCart = () => {

    let cartItems = cookies.cartItems;
    let total = cookies.total;
    if(total==null||total==undefined){
      total = 0;
    }
    total = parseInt(total);
    if (cartItems == null || cartItems == undefined) {
      cartItems = {};
    }
   
    if (undefined == cartItems[id]) {
      cartItems[id] = 1;
    } else {
      let quantity = cartItems[id];
      quantity = quantity + 1;
      cartItems[id] = quantity;
    }

    setCookie("cartItems", cartItems, { path: "/" });

    total = total + price;
    setCookie('total',total,{ path: "/" });
    navigate("/cart");
  };
  return (
    <div>
      <div className="container">
        <div
          style={{
            width: "100%",
            display: "block",
            margin: "5px auto",
            textAlign: "center",
            fontSize: "25px",
            fontWeight: "bolder",
          }}
        >
          {name}
        </div>

        <div className="row my-3">
          <div className="col-7">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="2"
                ></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    className="d-block w-100"
                    src="https://source.unsplash.com/random/500x300/?clothes"
                    alt="First slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    src="https://source.unsplash.com/random/500x300/?clothing"
                    alt="Second slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    src="https://source.unsplash.com/random/500x300/?fashion"
                    alt="Third slide"
                  />
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
          <div className="col-5">
            <div className="row" style={{ height: "325px" }}>
              <div className="col">{description}</div>
            </div>
            <div className="row my-2">
              <div
                className="col-8"
                style={{ fontSize: "25px", fontWeight: "bolder" }}
              >
                {price}
              </div>
              <div className="col">
                <button
                  onClick={handleAddToCart}
                  type="button"
                  className="btn btn-dark"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
