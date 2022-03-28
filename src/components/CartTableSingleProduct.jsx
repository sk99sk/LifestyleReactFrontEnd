import React from 'react';
import { useEffect, useState,useContext } from "react";
import {
  Link, useNavigate 
} from "react-router-dom";
import { useCookies } from 'react-cookie';



export default function CartTableSingleProduct(props) {
  let navigate = useNavigate();
  const productID = props.productID;
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [loading, setLoading] = useState(true);
  
  const [cookies, setCookie, removeCookie] = useCookies(['cartItems',"total"]);
 
  

  function handleRemoveFromCart (){
    let cartItems = cookies.cartItems;
    let quantityItem = cartItems[productID];
    
    if(quantityItem<=1){
      let newCartItems = {};
      Object.keys(cartItems).forEach((pid)=>{if(pid!=productID){newCartItems[pid]=cartItems[pid];}})
      setCookie("cartItems" ,newCartItems,{path:"/"});
      setQuantity(0);
    }else{
      quantityItem = quantityItem -1;
      cartItems[productID] = quantityItem;
      setCookie("cartItems" ,cartItems,{path:"/"});
      setQuantity(quantityItem);
    }

    let Ctotal = cookies.total;
    Ctotal = parseInt(Ctotal);
    Ctotal = Ctotal - price;
    setCookie('total',Ctotal,{path:"/"});
    navigate("/");


  }

  useEffect(() => {
    let cartItems = cookies.cartItems;
    let quantityItem = cartItems[productID];
    setQuantity(quantityItem);
    const url = `http://localhost:8080/SpringMVCHibernate/products-json`;
    fetch(url)
      .then((data) => data.json())
      .then((parsedData) => parsedData.productList)
      .then((products) =>products.find(x=>x.id==productID)).then(product=>{setName(product.name);setPrice(product.price);setLoading(false);})

  }, []);

  
  return loading ? (
    <div>Loading</div>
  ) : (
    
    <tr>
                <td>
                  <figure className="itemside align-items-center">
                    <div className="aside">
                      <img src="https://source.unsplash.com/random/50x50/?jeans" className="img-sm" />
                    </div>
                    <figcaption className="info">
                      <Link to="/product" className="title text-dark">
                      {name}
                      </Link>
                    </figcaption>
                  </figure>
                </td>
                <td>
                  {quantity}
                </td>
                <td>
                  <div className="price-wrap">
                    <var className="price">{price}</var>
                  </div>
                </td>
                <td className="text-right">
                <button
                  onClick={handleRemoveFromCart}
                  type="button"
                  className="btn btn-dark"
                >
                  Remove
                </button>
                </td>
              </tr>
  )
}
