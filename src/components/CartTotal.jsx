import { useCookies } from "react-cookie";
import React, { useEffect, useState, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";




export default function CartTotal(props) {
  const [total, setTotal] = useState(0);
  const [cookies, setCookie, removeCookie] = useCookies(["cartItems","total"]);





  
  useEffect(() => {
    
    let Ctotal = cookies.total;
    if(Ctotal==null||Ctotal==undefined){
      Ctotal = 0;
    }
    setTotal(Ctotal);

  }, []);

  return (
    <div>
      <div
        className="text-center my-3"
        style={{ fontWeight: "bolder", fontSize: "25px" }}
      >
        Total : Rs. {total}
      </div>

      
      
    </div>
  );
}
