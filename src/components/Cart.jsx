import React, { useEffect, useState, createContext, useContext } from "react";
import CartTable from "./CartTable";
import CartTotal from "./CartTotal";
import { useNavigate } from "react-router-dom";


export default function Cart(props) {

  const {token,setToken} = props.Token;
  const navigate = useNavigate();

  const goToSignin = ()=>{
navigate("/signin");
  }

  if(!token){
    return(<div style={{textAlign:"center",fontSize:"25px"}}>Plese Sign In to view Cart<br/> <button
      onClick={goToSignin}
      type="button"
      className="btn btn-dark"
    >
      Signin
    </button></div>)
  }

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
