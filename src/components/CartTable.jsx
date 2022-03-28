import React from 'react';
import CartTableSingleProduct from './CartTableSingleProduct';
import { useEffect, useContext ,useState} from "react";
import { useCookies } from 'react-cookie';

export default function CartTable(props) {
  const [cookies, setCookie, removeCookie] = useCookies(['cartItems']);
  const [cartItems, setCartItems] = useState({});
  useEffect(() => {
    let cartItems = cookies.cartItems;
    if(undefined==cartItems){
      cartItems = {};
    }
    setCartItems(cartItems);
    
  }, [ ]);
  return  (
    
    <div>
      
        <table className="table">
            <thead>
              <tr>
                <th scope="col">Product</th>
                <th scope="col">Quantity</th>
                <th scope="col" width="120">
                  Price
                </th>
                <th scope="col" className="text-right" width="200">
                  {" "}
                </th>
              </tr>
            </thead>
            <tbody>
            {Object.keys(cartItems).map((productID) => {
                return (
                   
              
              
                  <CartTableSingleProduct
                    productID={productID}
                    key={productID}
                    quantity={cartItems[productID]}
                  />
                  
                );
              })}
            </tbody>
          </table>
    </div>
  )
}
