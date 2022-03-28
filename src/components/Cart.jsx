import React, { useEffect, useState, createContext, useContext } from "react";
import CartTable from "./CartTable";
import CartTotal from "./CartTotal";


export default function Cart(props) {

  const {token,setToken} = props.Token;


  return (
    <div className="container">
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
        Your Cart
      </div>
      <div className="row">
        <div className="col-9">
          <CartTable />
        </div>
        <div className="col-3">
          <CartTotal Token={{token,setToken}}/>
        </div>
      </div>
    </div>
  );
}
